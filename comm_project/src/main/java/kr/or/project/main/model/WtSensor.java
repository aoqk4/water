package kr.or.project.main.model;

import java.time.LocalDateTime;

public class WtSensor {

	private String light; // 조도

	private String ph; // 수질

	private String Fishbowl; // 수위

	private String temper; // 수온

	private String date; // created 날짜
	
	private String time; // created 시간

	public String getLight() {
		return light;
	}

	public void setLight(String light) {
		this.light = light;
	}

	public String getPh() {
		return ph;
	}

	public void setPh(String ph) {
		this.ph = ph;
	}

	public String getFishbowl() {
		return Fishbowl;
	}

	public void setFishbowl(String fishbowl) {
		Fishbowl = fishbowl;
	}

	public String getTemper() {
		return temper;
	}

	public void setTemper(String temper) {
		this.temper = temper;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	}
