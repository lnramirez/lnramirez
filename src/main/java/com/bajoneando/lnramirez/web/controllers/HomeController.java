package com.bajoneando.lnramirez.web.controllers;

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
        return new ModelAndView("home");
    }

}
