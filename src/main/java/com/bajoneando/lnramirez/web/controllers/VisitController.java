package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.visits.Visit;
import com.bajoneando.lnramirez.visits.services.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author lrmonterosa
 */
@Controller
@RequestMapping("/visit")
public class VisitController {
    
    @RequestMapping(value="/add", method= RequestMethod.POST, headers="Accept=application/json")
    @ResponseStatus(HttpStatus.OK)
    public void addVisit(@RequestBody Visit visit) {
        visitService.addVisit(visit);
    }
    
    @RequestMapping(value="/statistics")
    public ModelAndView summary() {
        ModelAndView modelAndView = new ModelAndView("visit/summary");
        modelAndView.addObject("hits", visitService.hits());
        modelAndView.addObject("lastVisit", visitService.getLastVisit());
        return modelAndView;
    }
    
    @RequestMapping(value="/last", method=RequestMethod.GET, headers="Accept=application/json")
    @ResponseBody
    public Visit getLastVisit() {
        return visitService.getLastVisit();
    }
    
    @Autowired
    private VisitService visitService;
    
}
