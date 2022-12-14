package kr.or.project.mapper;

import java.util.List;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.Device;

@MariaDbMapper
public interface DeviceMapper {
	public List<Device> createDevice(Device device)throws Exception;
	public List<Device> readALLDevice(Device device)throws Exception;
	public List<Device> updateDevice(Device device)throws Exception;
	public List<Device> deleteDevice(Device device)throws Exception;
}
