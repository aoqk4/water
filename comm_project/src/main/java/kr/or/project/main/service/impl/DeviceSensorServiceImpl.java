package kr.or.project.main.service.impl;

import java.util.List;

import kr.or.project.main.model.DeviceSensor;
import kr.or.project.main.service.DeviceSensorService;
import kr.or.project.mapper.DeviceSensorMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceSensorServiceImpl implements DeviceSensorService {

	@Autowired
	private DeviceSensorMapper mapper;
	
	@Override
	public List<DeviceSensor> createDeviceSensor(DeviceSensor deviceSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.createDeviceSensor(deviceSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<DeviceSensor> readALLDeviceSensor(DeviceSensor deviceSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.readALLDeviceSensor(deviceSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<DeviceSensor> updateDeviceSensor(DeviceSensor deviceSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.updateDeviceSensor(deviceSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<DeviceSensor> deleteDeviceSensor(DeviceSensor deviceSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.deleteDeviceSensor(deviceSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public List<DeviceSensor> senosorLogPageNation(DeviceSensor deviceSensor) {
		try {
			return mapper.senosorLogPageNation(deviceSensor);
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return null;
		}
	}

}
