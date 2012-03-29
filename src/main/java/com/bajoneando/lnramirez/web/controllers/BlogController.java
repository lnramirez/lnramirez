package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.blog.BlogEntry;
import com.bajoneando.lnramirez.blog.services.BlogEntryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author lrmonterosa
 */
@Controller
public class BlogController {
    
    @RequestMapping(method=RequestMethod.GET, value="/blog.htm")
    public ModelAndView init() {
        List<BlogEntry> blogEntries = blogEntryRepository.findAll(new Sort("date"));
        ModelAndView modelAndView = new ModelAndView("/blog/list");
        modelAndView.addObject(blogEntries);
        return modelAndView;
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/blog.htm", headers="Accept:application/json")
    public void addEntry(@RequestBody BlogEntry blogEntry) {
        blogEntryRepository.save(blogEntry);
    }
        
    @Autowired
    private BlogEntryRepository blogEntryRepository;

}
