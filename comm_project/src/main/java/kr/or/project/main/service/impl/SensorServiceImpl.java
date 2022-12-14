package kr.or.project.main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.project.main.model.Sensor;
import kr.or.project.main.service.SensorService;
import kr.or.project.mapper.SensorMapper;

@Service
public class SensorServiceImpl implements SensorService {

	@Autowired
	private SensorMapper mapper;
	
	@Override
	public List<Sensor> createSensor(Sensor sensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.createSensor(sensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Sensor> readALLSensor(Sensor sensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readALLSensor();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("에러다 병신아");
			return null;
		}
	}

	@Override
	public List<Sensor> updateSensor(Sensor sensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.updateSensor(sensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Sensor> deleteSensor(Sensor sensor) {
		// TODO Auto-generated method stub
		try {
			return mapper.deleteSensor(sensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

}
