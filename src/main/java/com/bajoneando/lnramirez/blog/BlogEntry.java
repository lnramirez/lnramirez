package com.bajoneando.lnramirez.blog;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @author lrmonterosa
 */
public class BlogEntry implements Serializable {
    
    private String id;
    private String subject;
    private String article;
    private Date date;
    private String printableHtml;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getPrintableHtml() {
        return printableHtml;
    }

    public void setPrintableHtml(String printableHtml) {
        this.printableHtml = printableHtml;
    }

}
