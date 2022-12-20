package kr.or.project.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.or.project.main.model.Device;
import kr.or.project.main.model.DeviceSensor;
import kr.or.project.main.model.Sensor;
import kr.or.project.main.model.SensorReadings;
import kr.or.project.main.model.WtChart;
import kr.or.project.main.model.WtSensor;
import kr.or.project.main.service.DeviceSensorService;
import kr.or.project.main.service.DeviceService;
import kr.or.project.main.service.SensorService;
import kr.or.project.main.service.WtSensorService;

@RestController
@RequestMapping("deviceAPI")
public class DeviceController {

	private static final Logger logger = LoggerFactory.getLogger(MainActionController.class);

	@Autowired
	DeviceService deviceService;
	
	@Autowired
	DeviceSensorService deviceSensorService;
	
	@Autowired
	WtSensorService wtSensorService;
	
	@RequestMapping(method = RequestMethod.GET, path = "/deviceGet")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtSensor> getDevice(HttpServletRequest request, Model model) throws Exception {
		WtSensor wtSensor = new WtSensor();
		
		List<WtSensor> result = wtSensorService.readALLWtSensor(wtSensor);
		
		return result;
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/postlight")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtSensor> postLight(HttpServletRequest request, Model model, @RequestBody WtSensor wtSensor) throws Exception {
		List<WtSensor> result = wtSensorService.readLightWtSensor(wtSensor);
		
		return result;
	}

	@RequestMapping(method = RequestMethod.POST, path = "/postph")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtSensor> postPh(HttpServletRequest request, Model model, @RequestBody WtSensor wtSensor) throws Exception {
		List<WtSensor> result = wtSensorService.readPhWtSensor(wtSensor);
		
		return result;
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/postlevel")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtSensor> postLevel(HttpServletRequest request, Model model, @RequestBody WtSensor wtSensor) throws Exception {
		List<WtSensor> result = wtSensorService.readLevelWtSensor(wtSensor);
		
		return result;
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/posttemper")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtSensor> postTemper(HttpServletRequest request, Model model, @RequestBody WtSensor wtSensor) throws Exception {
		List<WtSensor> result = wtSensorService.readTemperWtSensor(wtSensor);
		
		System.out.println(result);
		return result;
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/postsensor")
	@CrossOrigin(origins = "*") // cors우회
	public void postSensor(HttpServletRequest request, Model model, @RequestBody SensorReadings sensorReadings) throws Exception {
		wtSensorService.insertSensorReadings(sensorReadings);
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/getcharthour")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtChart> getChartHour(HttpServletRequest request, Model model) throws Exception {
		WtChart wtChart = new WtChart();
		
		List<WtChart> result = wtSensorService.readChartHour(wtChart);
		
		System.out.println(result);
		return result;
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/getchartday")
	@CrossOrigin(origins = "*") // cors우회
	public List<WtChart> getChartDay(HttpServletRequest request, Model model) throws Exception {
		WtChart wtChart = new WtChart();
		
		List<WtChart> result = wtSensorService.readChartDay(wtChart);
		
		System.out.println(result);
		return result;
	}
	
	
	//***********************************************************
	 
	@RequestMapping(method = RequestMethod.GET, path = "/sensorGet")
	public Map getSensor(HttpServletRequest request, Model model) throws Exception {
		DeviceSensor deviceSensor = new DeviceSensor();
		deviceSensor.setSensorId(10);
		Map<String, Object> rMap = new HashMap<String, Object>();
		System.out.println("12");
		List<DeviceSensor> result = deviceSensorService.readALLDeviceSensor(deviceSensor);

//		List<Object> result1 = new ArrayList<Object>();
//		List<Object> Time = new ArrayList<Object>();
		
//		JSONObject jsonob = new JSONObject();
//	    JSONArray jsonarr = new JSONArray();
//		
//		for(DeviceSensor obj : result) {
//			result1.add(obj.getSensorVal());
//			Time.add(obj.getCreatedAt());
//			
//			JSONObject data = new JSONObject();
//
//	        data.put("SensorVal", obj.getSensorVal());
//	        data.put("CreatedAt",obj.getCreatedAt());
//	        jsonarr.add(data);
//		}
		
//		jsonob.put("values", jsonarr);
//		
//		System.out.println(result1);
//		System.out.println(Time);
		
		rMap.put("getValue", result);
		
		System.out.println(rMap);
		return rMap;
	}
	
	
	/* POST로 sensorId를 받아서 해당 센서 측정값 리턴 */
	@RequestMapping(method = RequestMethod.POST, path = "/sensorPost")
	public Map Test(HttpServletRequest request, Model model, @RequestBody DeviceSensor deviceSensor) throws Exception {
		System.out.println(deviceSensor.getSensorId());
		
		Map<String, Object> rMap = new HashMap<String, Object>();
		List<DeviceSensor> result = deviceSensorService.senosorLogPageNation(deviceSensor);
		
		System.out.println(result.get(0).getCreatedAt());

		rMap.put("getValue", result);
		
		System.out.println(rMap);
		return rMap;
	}

	@RequestMapping(method = RequestMethod.POST, path = "/devicePost")
	@ResponseBody
	public Map postDevice(@RequestBody Device device) throws Exception {
		// portId 검색후 실행
		Map<String, Object> rMap = new HashMap<String, Object>();
		List<Device> result = deviceService.createDevice(device);

		rMap.put("postResult", result);
		return rMap;
	}

	@RequestMapping(method = RequestMethod.PUT, path = "/deviceUpdate")
	@ResponseBody
	public Map updateDevice(@RequestBody Device device) throws Exception {
		// portId 검색후 실행
		Map<String, Object> rMap = new HashMap<String, Object>();
		List<Device> result = deviceService.updateDevice(device);

		rMap.put("postResult", result);
		return rMap;
	}

	@RequestMapping(method = RequestMethod.DELETE, path = "/deviceDelete")
	@ResponseBody
	public Map deleteDevice(@RequestBody Device device) throws Exception {
		// portId 검색후 실행
		Map<String, Object> rMap = new HashMap<String, Object>();
		List<Device> result = deviceService.deleteDevice(device);

		rMap.put("postResult", result);
		return rMap;
	}
}
