package com.bajoneando.lnramirez.blog.services.test;

import com.bajoneando.lnramirez.MappedEntry;
import com.bajoneando.lnramirez.blog.BlogEntry;
import com.bajoneando.lnramirez.blog.services.BlogEntryService;
import com.bajoneando.lnramirez.visits.Visit;
import java.util.ArrayList;
import java.util.List;
import org.mockito.Mock;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapreduce.MapReduceResults;
import org.springframework.test.util.ReflectionTestUtils;

/**
 *
 * @author lrmonterosa
 */
public class BlogEntryServiceTest {
    
    @Mock
    private BlogEntryService blogEntryService;
    
    @Mock
    private MongoTemplate mongoTemplate;
    
    @Before
    public void init() {
        blogEntryService = mock(BlogEntryService.class);
        mongoTemplate = mock(MongoTemplate.class);
        ReflectionTestUtils.setField(blogEntryService,"mongoTemplate",mongoTemplate);
    }
    
    @Test
    public void testGetLastEntry() {
        BlogEntry lastBlogEntry = new BlogEntry();
        MapReduceResults<MappedEntry> mapReduceResults = mock(MapReduceResults.class);
        List mappedEntryList = new ArrayList<MappedEntry<Visit>>(1);
        MappedEntry<BlogEntry> mappedEntry = new MappedEntry<BlogEntry>();
        mappedEntry.setValue(lastBlogEntry);
        mappedEntryList.add(mappedEntry);
        when(mapReduceResults.iterator()).thenReturn(mappedEntryList.iterator());
        when(mongoTemplate.mapReduce("blogEntry", "classpath:mongo/mapallblogs.js" , 
                "classpath:mongo/reducelatestblog.js", MappedEntry.class)).thenReturn(mapReduceResults);
        when(blogEntryService.getLastEntry()).thenCallRealMethod();
        assertEquals(lastBlogEntry, blogEntryService.getLastEntry());
    }
    
}
