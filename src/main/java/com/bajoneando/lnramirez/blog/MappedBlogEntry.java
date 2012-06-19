package com.bajoneando.lnramirez.blog;

/**
 *
 * @author lrmonterosa
 */
public class MappedBlogEntry {
    
    private String id;
    private BlogEntry value;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public BlogEntry getValue() {
        return value;
    }

    public void setValue(BlogEntry value) {
        this.value = value;
    }
    
}
