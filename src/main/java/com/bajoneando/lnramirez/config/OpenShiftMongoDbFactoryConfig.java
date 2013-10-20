package com.bajoneando.lnramirez.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.authentication.UserCredentials;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.mongodb.Mongo;

@Configuration
@Profile("openshift")
public class OpenShiftMongoDbFactoryConfig implements MongoDbFactoryConfig
{

    @Override
    public MongoDbFactory mongoDbFactory() throws Exception {
        String openShiftMongoDbHost = System.getenv("OPENSHIFT_MONGODB_DB_HOST");
        int openShiftMongoDbPort = Integer.parseInt(System.getenv("OPENSHIFT_MONGODB_DB_PORT"));
        String username = System.getenv("OPENSHIFT_MONGODB_DB_USERNAME");
        String password = System.getenv("OPENSHIFT_MONGODB_DB_PASSWORD");
        Mongo mongo = new Mongo(openShiftMongoDbHost, openShiftMongoDbPort);
        UserCredentials userCredentials = new UserCredentials(username,password);
        String databaseName = System.getenv("OPENSHIFT_APP_NAME");
        MongoDbFactory mongoDbFactory = new SimpleMongoDbFactory(mongo, databaseName, userCredentials);
        return mongoDbFactory;
    }

}
