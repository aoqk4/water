package kr.or.project.main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.project.main.model.Sensor;
import kr.or.project.main.model.WtSensor;
import kr.or.project.main.service.SensorService;
import kr.or.project.main.service.WtSensorService;
import kr.or.project.mapper.SensorMapper;
import kr.or.project.mapper.WtSensorMapper;

@Service
public class WtSensorServiceImpl implements WtSensorService {

	@Autowired
	private WtSensorMapper mapper;
	
	@Override
	public List<WtSensor> createSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.createSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<WtSensor> readALLWtSensor() {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readALLWtSensor();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("에러다 병신아");
			return null;
		}
	}

	@Override
	public List<WtSensor> updateWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.updateWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<WtSensor> deleteSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.deleteSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

}
