package com.solrsearch.control;

import com.solrsearch.bean.Jsgs;
import com.solrsearch.service.MyService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping(value = "/EntSearchEngine")
public class MyController {

    @Resource
    MyService myService;

    @RequestMapping(value = "/EnterpriseInfo", method = RequestMethod.POST)
    @ResponseBody
    public List<Jsgs> SearchByKeyword(HttpServletRequest request){
        String solrkey = request.getParameter("solrkey");
        String solrvalue = request.getParameter("solrvalue");
        List<Jsgs> result = myService.searchByKey(solrkey, solrvalue);
        return result;
    }

    @RequestMapping(value = "/getEntList", method = RequestMethod.POST)
    @ResponseBody
    public List<Jsgs> SearchList(HttpServletRequest request){
        String solrkey = request.getParameter("solrkey");
        String solrvalue = request.getParameter("solrvalue");
        List<Jsgs> result = myService.searchHighLight(solrkey, solrvalue);
        return result;
    }
}
