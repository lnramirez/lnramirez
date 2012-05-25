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
        <title>lnramirez - <sitemesh:write property="title"></sitemesh:write></title>
        <link href="${css}" rel="stylesheet" type="text/css">
        <link href="${favicon}" rel="icon" type="image/vnd.microsoft.icon">
    </head>
    <body>
        <header>
            <h1>lnramirez website</h1>
        </header>
        <nav>
            <ul>
                <li><a href="${home}">Home</a></li>
                <li><a href="${blogUrl}" >Blog</a></li>                
                <li><a href="${about}">About</a></li>
            </ul>
        </nav>
        <section id="rounded_box">
            <sitemesh:write property="body">Body goes here</sitemesh:write>
        </section>
        <footer>
            <p>
                <small>Copyright to Bajoneando</small>
            </p>
        </footer>
    </body>
</html>