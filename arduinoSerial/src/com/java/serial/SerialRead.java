package com.java.serial;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.PreparedStatement;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class SerialRead implements Runnable {

	InputStream inS;
	BufferedReader bufferedReader;
	PreparedStatement pstmt;

	public SerialRead(BufferedReader bufferedReader) {
		this.bufferedReader = bufferedReader;
	}

	@Override
	public void run() {

		HttpURLConnection httpConn = null;

		StringBuilder buffer = null;
		OutputStream outputStream = null;
		BufferedReader bufferedReader = null;
		BufferedWriter bufferedWriter = null;
		String readLine = null;

		try {
		} catch (Exception e) {
			e.printStackTrace();
		}

		while (true) {
			try {

				// for DB
//				ResultSet rs = null;
				if (this.bufferedReader.ready()) {
					String result = this.bufferedReader.readLine();

					// 측정 시간 체크
					java.sql.Timestamp timestamp = new java.sql.Timestamp(System.currentTimeMillis());

					JSONObject jsonObj = null;

					JSONParser jsonParse = new JSONParser();
					jsonObj = (JSONObject) jsonParse.parse(result);
					jsonObj.put("createdAt", timestamp.toString());

					URL url = new URL("http://61.103.243.89:8080/deviceAPI/postsensor");
					httpConn = (HttpURLConnection) url.openConnection();

					httpConn.setRequestMethod("POST");
					httpConn.setRequestProperty("Accept", "application/json");
					httpConn.setRequestProperty("Content-Type", "application/json");
					httpConn.setRequestProperty("Transfer-Encoding", "chunked");
					httpConn.setRequestProperty("Connection", "keep-alive");
					httpConn.setDoInput(true);
					httpConn.setDoOutput(true); // POST 데이터를 OutputStream으로 넘겨 주겠다는 설정
					httpConn.setUseCaches(false);
					httpConn.setDefaultUseCaches(false);

					if (httpConn != null) {
						outputStream = httpConn.getOutputStream();

						bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
						bufferedWriter.write(jsonObj.toString());
						bufferedWriter.flush();

						buffer = new StringBuilder();
						if (httpConn.getResponseCode() == HttpURLConnection.HTTP_OK) {

							bufferedReader = new BufferedReader(
									new InputStreamReader(httpConn.getInputStream(), "UTF-8"));
							while ((readLine = bufferedReader.readLine()) != null) {
								buffer.append(readLine).append("\n");
							}
						} else {
							buffer.append("\"code\" : \"" + httpConn.getResponseCode() + "\"");
							buffer.append(", \"message\" : \"" + httpConn.getResponseMessage() + "\"");
						}
					}

					if (bufferedWriter != null) {
						bufferedWriter.close();
					}
					if (outputStream != null) {
						outputStream.close();
					}
					if (bufferedReader != null) {
						bufferedReader.close();
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}