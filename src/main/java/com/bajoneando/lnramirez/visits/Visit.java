package com.bajoneando.lnramirez.visits;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author lrmonterosa
 */
@Document
public class Visit {
    
    private String id;
    private Long latitude;
    private Long longitude;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getLatitude() {
        return latitude;
    }

    public void setLatitude(Long latitude) {
        this.latitude = latitude;
    }

    public Long getLongitude() {
        return longitude;
    }

    public void setLongitude(Long longitude) {
        this.longitude = longitude;
    }
    
}
