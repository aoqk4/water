package kr.or.project.main.model;

import java.time.LocalDateTime;

public class WtChart {

	private String ph; // 수질
	
	private String temper; // 온도
	
	private String created_at; // 시간

	public String getPh() {
		return ph;
	}

	public void setPh(String ph) {
		this.ph = ph;
	}

	public String getTemper() {
		return temper;
	}

	public void setTemper(String temper) {
		this.temper = temper;
	}

	public String getCreated_at() {
		return created_at;
	}

	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
}
