package kr.or.project.main.model;

import java.time.LocalDateTime;

public class SensorReadings {

	private float light; // 조도

	private float ph; // 수질

	private float Fishbowl; // 수위

	private float temper; // 수온

	private String createdAt;

	public float getLight() {
		return light;
	}

	public void setLight(float light) {
		this.light = light;
	}

	public float getPh() {
		return ph;
	}

	public void setPh(float ph) {
		this.ph = ph;
	}

	public float getFishbowl() {
		return Fishbowl;
	}

	public void setFishbowl(float fishbowl) {
		Fishbowl = fishbowl;
	}

	public float getTemper() {
		return temper;
	}

	public void setTemper(float temper) {
		this.temper = temper;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
}
