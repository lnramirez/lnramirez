package com.bajoneando.lnramirez.files;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

/**
 *
 * @author lrmonterosa
 */
public class MongoStoredFile {
    
    private String id;
    private File file;
    private String name;
    private String contentType;
    private String encodedContentType;
    private byte[] data;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        try {
            this.contentType = contentType;
            setEncodedContentType(URLEncoder.encode(contentType, "UTF-8"));
        } catch (UnsupportedEncodingException ex) {
            //SRSLY
        }
    }
    
    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getEncodedContentType() {
        return encodedContentType;
    }

    public void setEncodedContentType(String encodedContentType) {
        this.encodedContentType = encodedContentType;
    }
    
}