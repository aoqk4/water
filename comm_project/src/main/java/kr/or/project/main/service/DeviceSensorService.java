package kr.or.project.main.service;

import java.util.List;

import kr.or.project.main.model.DeviceSensor;

public interface DeviceSensorService {
	public List<DeviceSensor> createDeviceSensor(DeviceSensor deviceSensor);
	public List<DeviceSensor> readALLDeviceSensor(DeviceSensor deviceSensor);
	public List<DeviceSensor> updateDeviceSensor(DeviceSensor deviceSensor);
	public List<DeviceSensor> deleteDeviceSensor(DeviceSensor deviceSensor);
	public List<DeviceSensor> senosorLogPageNation(DeviceSensor deviceSensor);
}
