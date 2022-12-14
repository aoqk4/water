package kr.or.project.mapper;

import java.util.List;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.DeviceSensor;

@MariaDbMapper
public interface DeviceSensorMapper {
	public List<DeviceSensor> createDeviceSensor(DeviceSensor deviceSensor)throws Exception;
	public List<DeviceSensor> readALLDeviceSensor(DeviceSensor deviceSensor)throws Exception;
	public List<DeviceSensor> updateDeviceSensor(DeviceSensor deviceSensor)throws Exception;
	public List<DeviceSensor> deleteDeviceSensor(DeviceSensor deviceSensor)throws Exception;
	public List<DeviceSensor> senosorLogPageNation(DeviceSensor deviceSensor)throws Exception;
}
