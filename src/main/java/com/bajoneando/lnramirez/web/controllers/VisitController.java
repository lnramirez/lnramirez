package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.visits.Visit;
import com.bajoneando.lnramirez.visits.services.VisitService;
import com.bajoneando.lnramirez.web.VisitSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;

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
    public String summary() {
        return "visit/summary";
    }
    
    @RequestMapping(value="/update", method=RequestMethod.GET, headers="Accept=application/json")
    @ResponseBody
    public VisitSummary updateSummary() {
        VisitSummary visitSummary = new VisitSummary();
        visitSummary.setHits(visitService.hits());
        visitSummary.setLastVisit(visitService.getLastVisit());
        return visitSummary;
    }
    
    @RequestMapping(value="/last", method=RequestMethod.GET, headers="Accept=application/json")
    @ResponseBody
    public Visit getLastVisit() {
        return visitService.getLastVisit();
    }

    @RequestMapping(value="/previous/{date}", method = RequestMethod.GET, headers = "Accept=application/json")
    @ResponseBody
    public VisitSummary getPreviousVisit(@PathVariable("date") Long date) {
        VisitSummary visitSummary = new VisitSummary();
        visitSummary.setHits(visitService.hits());
        visitSummary.setLastVisit(visitService.getPreviousVisit(new Date(date)));
        return visitSummary;
    }
    
    @Autowired
    private VisitService visitService;
    
}
