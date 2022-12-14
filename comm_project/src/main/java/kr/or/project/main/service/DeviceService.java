package kr.or.project.main.service;

import java.util.List;

import kr.or.project.main.model.Device;

public interface DeviceService {
	public List<Device> createDevice(Device device);
	public List<Device> readALLDevice(Device device);
	public List<Device> updateDevice(Device device);
	public List<Device> deleteDevice(Device device);
}
