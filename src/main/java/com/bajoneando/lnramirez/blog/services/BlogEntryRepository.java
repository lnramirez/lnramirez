package com.bajoneando.lnramirez.blog.services;

import com.bajoneando.lnramirez.blog.BlogEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author lrmonterosa
 */
public interface BlogEntryRepository extends MongoRepository<BlogEntry, String> {
    
}
