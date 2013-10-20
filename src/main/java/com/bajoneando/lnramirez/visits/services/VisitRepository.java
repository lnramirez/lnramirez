package com.bajoneando.lnramirez.visits.services;

import com.bajoneando.lnramirez.visits.Visit;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author lrmonterosa
 */
public interface VisitRepository extends MongoRepository<Visit,String> {
    
}
