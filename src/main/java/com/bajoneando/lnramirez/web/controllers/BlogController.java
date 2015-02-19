package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.blog.BlogEntry;
import com.bajoneando.lnramirez.blog.services.BlogEntryRepository;
import com.petebevin.markdown.MarkdownProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

/**
 *
 * @author lrmonterosa
 */
@Controller
@RequestMapping("/blog")
public class BlogController {
    
    @RequestMapping(method=RequestMethod.GET)
    public ModelAndView list(@PageableDefaults(pageNumber=0, value=5) Pageable pageableRequest) {
        Pageable pageable = new PageRequest(pageableRequest.getPageNumber(), pageableRequest.getPageSize(), Sort.Direction.DESC, "publishDate");
        Page<BlogEntry> blogEntriesPage = blogEntryRepository.findAll(pageable);
        ModelAndView modelAndView = new ModelAndView("/blog/list");
        modelAndView.addObject("blogEntryPage", blogEntriesPage);
        modelAndView.addObject("blogEntry", new BlogEntry());
        return modelAndView;
    }

    @RequestMapping(method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE, value = "/entries")
    @ResponseBody
    public Page<BlogEntry> blogEntriesPage(@PageableDefaults(pageNumber=0, value=5) Pageable pageableRequest)
    {
        Pageable pageable = new PageRequest(pageableRequest.getPageNumber(), pageableRequest.getPageSize(), Sort.Direction.DESC, "publishDate");
        Page<BlogEntry> blogEntriesPage = blogEntryRepository.findAll(pageable);
        return blogEntriesPage;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/can-edit")
    @ResponseBody
    public String canEdit()
    {
        return "Editable";
    }

    @RequestMapping(value="/{id}/{subject}", method= RequestMethod.GET)
    public ModelAndView blogpost(@PathVariable("id") String id,@PathVariable("subject") String subject) {
        BlogEntry blogEntry = blogEntryRepository.findOne(id);
        ModelAndView modelAndView = new ModelAndView("/blog/blogpost");
        modelAndView.addObject("blogEntry", blogEntry);
        return modelAndView;
    }
    
    @RequestMapping(method=RequestMethod.POST)
    public String addEntry(@ModelAttribute(value="blogEntry") BlogEntry blogEntry) {
        if (blogEntry.getPublishDate() == null) {
            blogEntry.setPublishDate(new Date());
        }
        blogEntry.setLastUpdateDate(new Date());
        blogEntry.setPrintableHtml(markdownProcessor.markdown(blogEntry.getArticle()));
        blogEntryRepository.save(blogEntry);
        return "redirect:/blog";
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.PUT, headers="Accept=application/json")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public BlogEntry updateEntry(@PathVariable("id") String blogId,
            @RequestBody BlogEntry blogEntry) {
        BlogEntry entry = blogEntryRepository.findOne(blogId);
        entry.setArticle(blogEntry.getArticle());
        entry.setSubject(blogEntry.getSubject());
        entry.setLastUpdateDate(new Date());
        entry.setPrintableHtml(markdownProcessor.markdown(blogEntry.getArticle()));
        return blogEntryRepository.save(entry);
    }
    
    @RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE, headers="Accept=application/json")
    @ResponseStatus(HttpStatus.OK)
    public void deleteEntry(@PathVariable("id") String id) {
        blogEntryRepository.delete(id);
    }
    
    @RequestMapping(value="/single/{id}", method=RequestMethod.GET, headers="Accept=application/json")
    @ResponseBody
    public BlogEntry getEntry(@PathVariable("id") String id) {
        return blogEntryRepository.findOne(id);
    }
    
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(true);
        dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }
        
    @Autowired
    private BlogEntryRepository blogEntryRepository;
    
    @Autowired
    private MarkdownProcessor markdownProcessor;
    
}
