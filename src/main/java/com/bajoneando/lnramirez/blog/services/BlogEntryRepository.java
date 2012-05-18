package com.bajoneando.lnramirez.blog.services;

import com.bajoneando.lnramirez.blog.BlogEntry;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author lrmonterosa
 */
public interface BlogEntryRepository extends PagingAndSortingRepository<BlogEntry, String> {
    
}
