package com.bajoneando.lnramirez.blog.services;

import com.bajoneando.lnramirez.blog.BlogEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapreduce.MapReduceResults;
import org.springframework.stereotype.Service;

/**
 *
 * @author lrmonterosa
 */
@Service
public class BlogEntryService {
    
    public BlogEntry getLastEntry() {
        MapReduceResults<BlogEntry> mapReduceResults = mongoTemplate.
                mapReduce("blogEntry", "classpath:mongo/mapallblogs.js" , 
                "classpath:mongo/reducelatestblog.js", BlogEntry.class);
        return mapReduceResults.iterator().next();
    }
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
}
