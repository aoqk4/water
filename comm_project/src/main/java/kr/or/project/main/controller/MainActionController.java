package kr.or.project.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import kr.or.project.main.model.NoticeInfo;
import kr.or.project.main.service.MainService;

@Controller
public class MainActionController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainActionController.class);
	
	@Autowired
	MainService mainService;
	
	@RequestMapping(value = {"/" , "/mainContentView.do"})
	public ModelAndView mainContentView(HttpSession session, Locale locale, Model model) throws Exception{

		System.out.println("mainpage call!");
		
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName( "/main/mainList");
		
		return mv;
	}
	
	@RequestMapping(value = "/main/getMainInfos.do")
	@ResponseBody
	public Map getMainInfos(HttpServletRequest request, Model model, @RequestBody NoticeInfo noticeParam) throws Exception{
		
		System.out.println(noticeParam.getNoticeSj());
		
		Map<String, Object> rMap = new HashMap<String, Object>();
		
		List<NoticeInfo> mainResult = mainService.selectMainInfo(noticeParam);
		
		rMap.put("mainResult", mainResult);
		
		return rMap;
	}
	

	
	@RequestMapping(value = "/main/createdlwhdtjr")
	public Map createdlwhdtjr(HttpServletRequest request, Model model) throws Exception {

		System.out.println("123");
		
		Map<String, Object> resultsen1 = new HashMap<String, Object>();
		
		System.out.println("delete call!");
		
//		mainService.insertMainInfo();
		
//		List<NoticeInfo> resultsen1 = mainService.insertMainInfo();
		
		System.out.println("delete call!");

		return resultsen1;
	}
	
}
