package kr.or.project.main.model;

import java.time.LocalDateTime;

public class DeviceSensor {
	
	private int DStId;

	private int deviceId;
	
	private int sensorId;
	
	private int sensorSt;
	
	private int pageNum;
	
	private float sensorVal;
	
	private String createdAt;

	private LocalDateTime updatedAt;

	public int getDStId() {
		return DStId;
	}

	public void setDStId(int dStId) {
		this.DStId = dStId;
	}

	public int getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(int deviceId) {
		this.deviceId = deviceId;
	}

	public int getSensorId() {
		return sensorId;
	}

	public void setSensorId(int sensorId) {
		this.sensorId = sensorId;
	}

	public int getSensorSt() {
		return sensorSt;
	}

	public void setSensorSt(int sensorSt) {
		this.sensorSt = sensorSt;
	}
	
	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public float getSensorVal() {
		return sensorVal;
	}

	public void setSensorVal(float sensorVal) {
		this.sensorVal = sensorVal;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	
}
