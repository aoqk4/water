package kr.or.project.main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.project.main.model.Device;
import kr.or.project.main.service.DeviceService;
import kr.or.project.mapper.DeviceMapper;

@Service
public class DeviceServiceImpl implements DeviceService {

	@Autowired
	private DeviceMapper mapper;
	
	
	@Override
	public List<Device> createDevice(Device device) {
		// TODO Auto-generated method stub
		try {
			return mapper.createDevice(device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Device> readALLDevice(Device device) {
		// TODO Auto-generated method stub
		try {
			return mapper.readALLDevice(device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Device> updateDevice(Device device) {
		// TODO Auto-generated method stub
		try {
			return mapper.updateDevice(device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Device> deleteDevice(Device device) {
		// TODO Auto-generated method stub
		try {
			return mapper.deleteDevice(device);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

}
