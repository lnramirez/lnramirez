package com.bajoneando.lnramirez.config;

import javax.inject.Inject;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
@ImportResource("classpath:com/bajoneando/lnramirez/application-context.xml")
public class MongoDbConfig
{

    @Inject
    private MongoDbFactoryConfig mongoDbFactoryConfig;

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactoryConfig.mongoDbFactory());
        return mongoTemplate;
    }

}
