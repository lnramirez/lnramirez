package com.bajoneando.lnramirez.visits.services;

import com.bajoneando.lnramirez.MappedEntry;
import com.bajoneando.lnramirez.visits.Visit;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.data.mongodb.core.mapreduce.MapReduceOptions;
import org.springframework.data.mongodb.core.mapreduce.MapReduceResults;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Order;
import org.springframework.data.mongodb.core.query.Query;
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
                mapReduce("visit", "classpath:mongo/mapalltrackablevisits.js" ,
                "classpath:mongo/reducelatestvisit.js",MappedEntry.class);
        if (mapReduceResults.iterator().hasNext()) {
            return (Visit) mapReduceResults.iterator().next().getValue();
        } else {
            throw new RuntimeException("No entries for visit");
        }
    }

    public Visit getPreviousVisit(Date date) {
        mongoTemplate.indexOps(Visit.class).ensureIndex(new Index().on("date", Order.DESCENDING));
        final Query query = Query.query(Criteria.where("date").lt(date).and("locationPermit").nin(Boolean.FALSE));
        return mongoTemplate.findOne(query,Visit.class);
    }
    
    @Autowired
    private VisitRepository visitRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
}
