package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.blog.BlogEntry;
import com.bajoneando.lnramirez.blog.services.BlogEntryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author lrmonterosa
 */
@Controller
@RequestMapping("/blog/")
public class BlogController {
    
    @RequestMapping(method=RequestMethod.GET)
    public ModelAndView init() {
        List<BlogEntry> blogEntries = blogEntryRepository.findAll(new Sort("date"));
        ModelAndView modelAndView = new ModelAndView("/blog/list");
        modelAndView.addObject(blogEntries);
        return modelAndView;
    }
    
    @RequestMapping(method=RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void addEntry(@RequestBody BlogEntry blogEntry) {
        blogEntryRepository.save(blogEntry);
    }
        
    @Autowired
    private BlogEntryRepository blogEntryRepository;
    
}
