package com.bajoneando.lnramirez.config;

import com.mongodb.Mongo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

@Configuration
@Profile("dev")
public class DevMongoDbFactoryConfig implements MongoDbFactoryConfig
{

    @Override
    @Bean
    public MongoDbFactory mongoDbFactory() throws Exception
    {
        Mongo mongo = new Mongo("localhost", 27017);
        String databaseName = "lnramirez";
        MongoDbFactory mongoDbFactory = new SimpleMongoDbFactory(mongo,
            databaseName);
        return mongoDbFactory;
    }
}
