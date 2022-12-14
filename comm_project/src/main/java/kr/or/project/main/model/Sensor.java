package kr.or.project.main.model;

import java.time.LocalDateTime;

public class Sensor {

	private int sensorId;
	
	private String sensorNm;
	
	private String description;
	
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;
	

	public int getSensorId() {
		return sensorId;
	}
	public void setSensorId(int sensorId) {
		this.sensorId = sensorId;
	}
	public String getSensorNm() {
		return sensorNm;
	}
	public void setSensorNm(String sensorNm) {
		this.sensorNm = sensorNm;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	

}
