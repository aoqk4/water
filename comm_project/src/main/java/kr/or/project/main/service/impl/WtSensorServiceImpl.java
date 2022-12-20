package kr.or.project.main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.project.main.model.Sensor;
import kr.or.project.main.model.SensorReadings;
import kr.or.project.main.model.WtChart;
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
	public void insertSensorReadings(SensorReadings sensorReadings) {
		// TODO Auto-generated method stub
		try {
			mapper.insertSensorReadings(sensorReadings);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public List<WtSensor> readALLWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readALLWtSensor(WtSensor);
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readALLWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("에러다 병신아");
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readLightWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readLightWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("에러다 병신아");
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readPhWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readPhWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("에러다 병신아");
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readLevelWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readLevelWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("에러다 병신아");
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readTemperWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readTemperWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readLightWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readLightWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readPhWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readPhWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readLevelWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readLevelWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@Override
	public List<WtSensor> readTemperWtSensor(WtSensor WtSensor) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readTemperWtSensor(WtSensor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<WtChart> readChartHour(WtChart WtChart) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readChartHour(WtChart);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@Override
	public List<WtChart> readChartDay(WtChart WtChart) {
		// TODO Auto-generated method stub
		System.out.println("123");
		try {
			return mapper.readChartDay(WtChart);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}	
}
