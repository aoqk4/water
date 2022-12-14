package kr.or.project.mapper;

import java.util.List;

import kr.or.project.annotation.MariaDbMapper;
import kr.or.project.main.model.FishingPort;

@MariaDbMapper
public interface FishingPortMapper {
	public List<FishingPort> createFishingPort(FishingPort fishingPort)throws Exception;
	public List<FishingPort> readALLFishingPort(FishingPort fishingPort)throws Exception;
	public List<FishingPort> updateFishingPort(FishingPort fishingPort)throws Exception;
	public List<FishingPort> deleteFishingPort(FishingPort fishingPort)throws Exception;
}
