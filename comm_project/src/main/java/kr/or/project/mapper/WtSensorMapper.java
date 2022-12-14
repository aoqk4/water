package kr.or.project.mapper;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.WtSensor;

import java.util.List;

@MariaDbMapper
public interface WtSensorMapper {
	public List<WtSensor> createSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> readALLWtSensor()throws Exception;
	public List<WtSensor> updateWtSensor(WtSensor WtSensor)throws Exception;
	public List<WtSensor> deleteSensor(WtSensor WtSensor)throws Exception;
}
