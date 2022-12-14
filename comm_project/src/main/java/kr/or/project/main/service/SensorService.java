package kr.or.project.main.service;

import java.util.List;

import kr.or.project.main.model.Sensor;

public interface SensorService {
	public List<Sensor> createSensor(Sensor sensor);
	public List<Sensor> readALLSensor(Sensor sensor);
	public List<Sensor> updateSensor(Sensor sensor);
	public List<Sensor> deleteSensor(Sensor sensor);
}
