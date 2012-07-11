package com.bajoneando.lnramirez.visits.services;

import com.bajoneando.lnramirez.MappedEntry;
import com.bajoneando.lnramirez.visits.Visit;
import java.util.Date;
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
public class VisitService {
    
    public void addVisit(Visit visit) {
        visit.setDate(new Date());
        visitRepository.save(visit);
    }
    
    public Long hits() {
        //we don't have that many visit as of today in the future a more complex
        //mongo operation can be called
        return new Long(visitRepository.findAll().size());
    }
    
    public Visit getLastVisit() {
        MapReduceOptions options = new MapReduceOptions();
        MapReduceResults<MappedEntry> mapReduceResults = mongoTemplate.
                mapReduce("visit", "classpath:mongo/mapallvisits.js" , 
                "classpath:mongo/reducelatestvisit.js",MappedEntry.class);
        if (mapReduceResults.iterator().hasNext()) {
            return (Visit) mapReduceResults.iterator().next().getValue();
        } else {
            throw new RuntimeException("No entries for visit");
        }
    }
    
    @Autowired
    private VisitRepository visitRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
}
