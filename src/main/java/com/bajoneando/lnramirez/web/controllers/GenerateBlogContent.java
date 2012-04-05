package com.bajoneando.lnramirez.web.controllers;

import com.bajoneando.lnramirez.blog.BlogEntry;
import com.bajoneando.lnramirez.blog.services.BlogEntryRepository;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author lrmonterosa
 */
@Controller
@RequestMapping("/generateBlogContent")
public class GenerateBlogContent {
    
    @RequestMapping(method=RequestMethod.POST)
    public String generateBlogAndRedirect() {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setArticle(loremIpsum);
        blogEntry.setDate(new Date());
        blogEntry.setSubject(loremIpsum_subject);
        blogEntryRepository.save(blogEntry);
        return "redirect:/blog/";
    }

    @Autowired
    private BlogEntryRepository blogEntryRepository;
    
    private static final String loremIpsum_subject = "Lorem ipsum";
    
    private static final String loremIpsum = 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed felis ante, facilisis porta nunc. Donec venenatis sem arcu, quis imperdiet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras nec lorem a velit lacinia tempor quis eget lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare imperdiet luctus. Cras quis lacus nec justo vehicula vehicula quis id tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus felis quis lorem mollis mollis. Sed tincidunt aliquam nibh, nec rhoncus est pretium in. Nulla rutrum eros quam, et mollis felis. " +
            "Pellentesque commodo augue sit amet diam varius mattis quis quis eros. Nullam blandit sodales aliquet. Suspendisse eu sodales magna. Quisque odio augue, pellentesque eu dictum nec, fringilla et arcu. Etiam feugiat pharetra mi a ornare. Nam eget sapien vel lectus molestie porta. Vestibulum volutpat lectus eu tortor vestibulum faucibus. Donec sit amet rutrum nibh. Sed posuere neque et nibh pretium nec dapibus lectus pulvinar. Praesent id sem bibendum nisi iaculis ultrices. Etiam interdum mollis euismod. Fusce rhoncus nunc at metus ultricies convallis. Praesent gravida dui euismod nisl fermentum et tempus est suscipit. Suspendisse dolor mauris, porta eget eleifend a, pellentesque et arcu. Fusce placerat bibendum risus vitae vestibulum. Phasellus elementum ante quis nisl tincidunt condimentum. " +
            "Suspendisse in urna turpis, id luctus risus. Vestibulum velit risus, lobortis sed aliquet vitae, aliquet ut mauris. In a sem enim. Ut ut tellus quis mi pharetra faucibus a vitae sem. Sed ante dui, tristique sed tristique vel, tincidunt non diam. Donec dolor mi, mattis sed semper sit amet, congue vitae est. Ut vitae lorem quis ipsum aliquet ultricies in sed purus. Quisque a metus a diam molestie imperdiet. Fusce diam nunc, laoreet vel tincidunt non, ornare vitae metus. Nulla a arcu arcu, nec laoreet dolor. Vestibulum et scelerisque mauris. Donec semper, enim sit amet suscipit laoreet, tortor neque convallis arcu, vitae suscipit sem orci a erat. Duis hendrerit lectus posuere lectus eleifend auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Aenean vel lorem libero. Pellentesque nisl dolor, convallis at sagittis quis, mattis non quam. Nam diam eros, lobortis id commodo vel, tempus nec ante. Etiam fermentum sagittis leo, vitae interdum magna faucibus sed. Ut semper, eros in pretium vehicula, risus orci vulputate mauris, et faucibus risus quam id magna. Nam dictum commodo felis, et varius velit ornare nec. In eleifend massa vel lacus consequat placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac enim quis lacus volutpat ultrices suscipit non metus. Phasellus porttitor sagittis fermentum. Aliquam risus elit, tincidunt cursus adipiscing a, faucibus feugiat arcu. Nunc elementum quam quis mi condimentum et lacinia est tristique. Mauris at leo vitae nunc sodales blandit nec at nulla. Fusce dictum ipsum ac nibh sagittis non congue eros egestas. Sed nec neque lacus. Curabitur lacinia urna ac ipsum gravida non molestie nunc volutpat. " +
            "Aliquam erat volutpat. Cras pretium laoreet fermentum. Nam semper velit ut enim sodales iaculis. Praesent pulvinar, risus nec hendrerit dictum, ante arcu laoreet dui, vitae vehicula odio lectus at tellus. Sed aliquet massa nec arcu rutrum lobortis. Vivamus vitae sapien erat. Proin et mattis lorem. Donec tristique magna nec risus eleifend scelerisque sit amet a purus. Vestibulum vel odio laoreet est tincidunt mollis id molestie sem. Suspendisse eu libero mauris, id eleifend sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vulputate velit eget lorem lobortis dapibus. Vivamus quis ornare erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur venenatis tristique. Vivamus sit amet urna sit amet ligula feugiat auctor. ";


}
