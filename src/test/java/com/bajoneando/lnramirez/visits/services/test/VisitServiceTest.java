package com.bajoneando.lnramirez.visits.services.test;

import com.bajoneando.lnramirez.MappedEntry;
import com.bajoneando.lnramirez.visits.Visit;
import com.bajoneando.lnramirez.visits.services.VisitRepository;
import com.bajoneando.lnramirez.visits.services.VisitService;
import java.util.ArrayList;
import java.util.List;
import org.junit.Test;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapreduce.MapReduceResults;
import org.springframework.test.util.ReflectionTestUtils;

/**
 *
 * @author lrmonterosa
 */
public class VisitServiceTest {
    
    @Test
    public void testLastVisitReturnsOneObject() {
        VisitService visitService = mock(VisitService.class);
        Visit lastVisit = new Visit();
        MongoTemplate mongoTemplate = mock(MongoTemplate.class);
        MapReduceResults<MappedEntry> mapReduceResults = mock(MapReduceResults.class);
        List mappedEntryList = new ArrayList<MappedEntry<Visit>>(1);
        MappedEntry<Visit> mappedEntry = new MappedEntry<Visit>();
        mappedEntry.setValue(lastVisit);
        mappedEntryList.add(mappedEntry);
        when(mapReduceResults.iterator()).thenReturn(mappedEntryList.iterator());
        when(mongoTemplate.mapReduce("visit", "classpath:mongo/mapallvisits.js" , 
                "classpath:mongo/reducelatestvisit.js",MappedEntry.class)).thenReturn(mapReduceResults);
        ReflectionTestUtils.setField(visitService,"mongoTemplate",mongoTemplate);
        when(visitService.getLastVisit()).thenCallRealMethod();
        assertEquals(lastVisit,visitService.getLastVisit());
    }
    
    @Test
    public void addVisit() {
        VisitService visitService = mock(VisitService.class);
        Visit visit = new Visit();
        visit.setLatitude(1F);
        visit.setLongitude(1F);        
        VisitRepository visitRepository = mock(VisitRepository.class);
        when(visitRepository.save(visit)).thenReturn(visit);
        ReflectionTestUtils.setField(visitService,"visitRepository",visitRepository);
        visitService.addVisit(visit);        
    }
    
    @Test
    public void testHits() {
        VisitService visitService = mock(VisitService.class);
        VisitRepository visitRepository = mock(VisitRepository.class);
        List<Visit> expectedHits = new ArrayList<Visit>(0);
        for (int i=0; i<5; i++) {
            expectedHits.add(new Visit());
        }
        when(visitRepository.findAll()).thenReturn(expectedHits);
        ReflectionTestUtils.setField(visitService, "visitRepository", visitRepository);
        when(visitService.hits()).thenCallRealMethod();
        Long hits = visitService.hits();
        assertEquals(expectedHits.size(), hits.intValue());
    }
    
}
