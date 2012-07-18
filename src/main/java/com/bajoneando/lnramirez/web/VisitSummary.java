package com.bajoneando.lnramirez.web;

import com.bajoneando.lnramirez.visits.Visit;

/**
 *
 * @author lrmonterosa
 */
public class VisitSummary {
    
    public Long hits;
    public Visit lastVisit;

    public Long getHits() {
        return hits;
    }

    public void setHits(Long hits) {
        this.hits = hits;
    }

    public Visit getLastVisit() {
        return lastVisit;
    }

    public void setLastVisit(Visit lastVisit) {
        this.lastVisit = lastVisit;
    }
    
}
