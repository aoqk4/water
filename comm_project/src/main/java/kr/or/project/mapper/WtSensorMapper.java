package kr.or.project.mapper;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.SensorReadings;
import kr.or.project.main.model.WtChart;
import kr.or.project.main.model.WtSensor;

import java.util.List;

@MariaDbMapper
public interface WtSensorMapper {
	public void insertSensorReadings(SensorReadings sensorReadings)throws Exception;
	public List<WtSensor> createSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> readALLWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> readLightWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> readPhWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> readLevelWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> readTemperWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtChart> readChartHour(WtChart WtChart)throws Exception;
	public List<WtChart> readChartDay(WtChart WtChart)throws Exception;
	public List<WtSensor> updateWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> deleteSensor(WtSensor WtSensor)throws Exception;
}
