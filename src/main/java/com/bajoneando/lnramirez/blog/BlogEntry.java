package com.bajoneando.lnramirez.blog;

import java.io.Serializable;
import java.util.Date;
import org.springframework.data.annotation.Id;

/**
 *
 * @author lrmonterosa
 */
public class BlogEntry implements Serializable {
    
    @Id
    private Long id;
    private String subject;
    private String article;
    private Date date;

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

}
