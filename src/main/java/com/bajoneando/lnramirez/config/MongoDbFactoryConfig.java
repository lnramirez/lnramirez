package com.bajoneando.lnramirez.config;

import org.springframework.data.mongodb.MongoDbFactory;

public interface MongoDbFactoryConfig
{

    MongoDbFactory mongoDbFactory() throws Exception;

}
