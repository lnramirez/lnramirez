package com.bajoneando.lnramirez.visits;

import java.util.Date;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author lrmonterosa
 */
@Document
public class Visit {
    
    private String id;
    private Boolean locationPermit;
    private String sessionHash;
    private Float latitude;
    private Float longitude;
    private Date date;

    public String getSessionHash() {
        return sessionHash;
    }

    public void setSessionHash(String sessionHash) {
        this.sessionHash = sessionHash;
    }

    public Boolean getLocationPermit() {
        return locationPermit;
    }

    public void setLocationPermit(Boolean locationPermit) {
        this.locationPermit = locationPermit;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
}