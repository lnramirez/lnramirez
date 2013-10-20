package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.blog.services.BlogEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author lrmonterosa
 */
@Controller
public class HomeController {
    
    @RequestMapping("/")
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView("home");
        modelAndView.addObject("blogEntry", blogEntryService.getLastEntry());
        return modelAndView;
    }
    
    @Autowired
    private BlogEntryService blogEntryService;

}
