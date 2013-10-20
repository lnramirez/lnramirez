package com.bajoneando.lnramirez.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author lrmonterosa
 */
@Controller
@RequestMapping(value="/about/")
public class AboutController {
    
    @RequestMapping(method= RequestMethod.GET)
    public ModelAndView init() {
        return new ModelAndView("about");
    }

}
