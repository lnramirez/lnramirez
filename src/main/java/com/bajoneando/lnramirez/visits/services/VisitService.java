package com.bajoneando.lnramirez.visits.services;

import com.bajoneando.lnramirez.visits.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

/**
 *
 * @author lrmonterosa
 */
@Service
public class VisitService {
    
    public void addVisit(Visit visit) {
        visitRepository.save(visit);
    }
    
    public Long hits() {
        //we don't have that many visit as of today in the future a more complex
        //mongo operation can be called
        return new Long(visitRepository.findAll().size());
    }
    
    @Autowired
    private VisitRepository visitRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
}
