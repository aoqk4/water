package kr.or.project.main.service;

import java.util.List;

import kr.or.project.main.model.FishingPort;

public interface FishingPortService {
	public List<FishingPort> createFishingPort(FishingPort fishingPort);
	public List<FishingPort> readALLFishingPort(FishingPort fishingPort);
	public List<FishingPort> updateFishingPort(FishingPort fishingPort);
	public List<FishingPort> deleteFishingPort(FishingPort fishingPort);
}
