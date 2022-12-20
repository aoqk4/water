package kr.or.project.main.service;

import java.util.List;

import kr.or.project.main.model.Sensor;
import kr.or.project.main.model.SensorReadings;
import kr.or.project.main.model.WtChart;
import kr.or.project.main.model.WtSensor;

public interface WtSensorService {	
	public void insertSensorReadings(SensorReadings sensorReadings);
	public List<WtSensor> readALLWtSensor(WtSensor WtSensor);
	public List<WtSensor> readLightWtSensor(WtSensor WtSensor);
	public List<WtSensor> readPhWtSensor(WtSensor WtSensor);
	public List<WtSensor> readLevelWtSensor(WtSensor WtSensor);
	public List<WtSensor> readTemperWtSensor(WtSensor WtSensor);
	public List<WtChart> readChartHour(WtChart WtChart);
	public List<WtChart> readChartDay(WtChart WtChart);
}
