package kr.or.project.mapper;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.Sensor;
import java.util.List;

@MariaDbMapper
public interface SensorMapper {
	public List<Sensor> createSensor(Sensor sensor)throws Exception;
	public List<Sensor> readALLSensor()throws Exception;
	public List<Sensor> updateSensor(Sensor sensor)throws Exception;
	public List<Sensor> deleteSensor(Sensor sensor)throws Exception;
}
