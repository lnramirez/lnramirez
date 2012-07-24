package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.files.MongoStoredFile;
import com.bajoneando.lnramirez.files.services.FileService;
import java.io.File;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author lrmonterosa
 */
@Controller
@RequestMapping("/images")
public class ImagesController {
    
    @RequestMapping("/startupload")
    public ModelAndView startupload() {
        ModelAndView modelAndView = new ModelAndView("/images/upload");
        modelAndView.addObject("mongoStoredFile", new MongoStoredFile());
        return modelAndView;
    }
    
    @RequestMapping(value="/upload", method=RequestMethod.POST, headers="Accept=application/json")
    @ResponseStatus(HttpStatus.OK)
    public void upload(@RequestParam("file") MultipartFile multipartFile, final HttpServletResponse response) throws IOException {
        if (multipartFile == null) {
            throw new RuntimeException("file null");
        }
        MongoStoredFile image = new MongoStoredFile();
        image.setName(multipartFile.getOriginalFilename());
        image.setContentType(multipartFile.getContentType());
        image.setData(multipartFile.getBytes());
        fileService.save(image);
    }
    
    @Autowired private FileService fileService;
    
}
