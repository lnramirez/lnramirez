package com.bajoneando.lnramirez.visits.services;

import com.bajoneando.lnramirez.visits.Visit;
import org.springframework.beans.factory.annotation.Autowired;
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
    
    @Autowired
    private VisitRepository visitRepository;
    
}
