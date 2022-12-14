package kr.or.project.main.model;

import java.time.LocalDateTime;

public class FishingPort {

	private int portId;
	
	private String portNm;
	
	private String description;
	
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;
	
	public int getPortId() {
		return portId;
	}
	public void setPortId(int portId) {
		this.portId = portId;
	}

	public String getPortNm() {
		return portNm;
	}
	public void setPortNm(String portNm) {
		this.portNm = portNm;
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
