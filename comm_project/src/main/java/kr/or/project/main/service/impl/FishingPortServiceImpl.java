package kr.or.project.main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.project.main.model.FishingPort;
import kr.or.project.main.service.FishingPortService;
import kr.or.project.mapper.FishingPortMapper;

@Service
public class FishingPortServiceImpl implements FishingPortService {

	@Autowired
	private FishingPortMapper mapper;
	
	@Override
	public List<FishingPort> createFishingPort(FishingPort fishingPort) {
		// TODO Auto-generated method stub
		try {
			return mapper.createFishingPort(fishingPort);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<FishingPort> readALLFishingPort(FishingPort fishingPort) {
		// TODO Auto-generated method stub
		try {
			return mapper.readALLFishingPort(fishingPort);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<FishingPort> updateFishingPort(FishingPort fishingPort) {
		// TODO Auto-generated method stub
		try {
			return mapper.updateFishingPort(fishingPort);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<FishingPort> deleteFishingPort(FishingPort fishingPort) {
		// TODO Auto-generated method stub
		try {
			return mapper.deleteFishingPort(fishingPort);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

}
