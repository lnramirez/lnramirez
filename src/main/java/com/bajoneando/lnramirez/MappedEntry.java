package com.bajoneando.lnramirez;

/**
 *
 * @author lrmonterosa
 */
public class MappedEntry<T> {
    
    private String id;
    private T value;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
    
}
