package com.bajoneando.lnramirez.blog.services;

import com.bajoneando.lnramirez.MappedEntry;
import com.bajoneando.lnramirez.blog.BlogEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapreduce.MapReduceOptions;
import org.springframework.data.mongodb.core.mapreduce.MapReduceResults;
import org.springframework.stereotype.Service;

/**
 *
 * @author lrmonterosa
 */
@Service
public class BlogEntryService {
    
    public BlogEntry getLastEntry() {
        MapReduceOptions options = new MapReduceOptions();
        MapReduceResults<MappedEntry> mapReduceResults = mongoTemplate.
                mapReduce("blogEntry", "classpath:mongo/mapallblogs.js" , 
                "classpath:mongo/reducelatestblog.js", MappedEntry.class);
        if (mapReduceResults.iterator().hasNext()) {
            BlogEntry blogEntry = (BlogEntry) mapReduceResults.iterator().next().getValue();
            return blogEntry;
        } else {
            throw new RuntimeException("No entries for blogEntry");
        }
    }
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
}
