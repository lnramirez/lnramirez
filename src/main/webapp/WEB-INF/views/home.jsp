<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<c:url value="/" var="home" />
<c:url value="/blog/" var="blogUrl" />
<c:url value="/about/" var="about" />
<spring:url value="/resources/icons/favicon.ico" var="favicon" />
<spring:url value="/resources/css/lnramirez.css" var="css" />
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>lnramirez</title>
        <link href="${css}" rel="stylesheet" type="text/css">
        <link href="${favicon}" rel="icon" type="image/vnd.microsoft.icon">
    </head>
    <body>
        <article>
            <p>
                I have been web programming for the last 10 years but I haven't 
                own a web site ever. Why would I like to work after
                hours?...  
            </p>
            <p>
                why not?
            </p>
        </article>
    </body>
</html>