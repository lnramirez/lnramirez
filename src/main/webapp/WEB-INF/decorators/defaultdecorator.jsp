<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<c:url value="/" var="home"/>
<c:url value="/blog/" var="blogUrl"/>
<c:url value="/images/" var="images"/>
<c:url value="/visit/statistics" var="visits"/>
<c:url value="/about/" var="about"/>
<c:url value="/spring_security_login" var="login"/>
<c:url value="/j_spring_security_logout" var="logout"/>
<spring:url value="/resources" var="res" />
<spring:url value="/resources/icons/favicon.ico" var="favicon"/>
<spring:url value="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" var="bootcss"/>
<spring:url value="/resources/css/lnramirez.css" var="css"/>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lnramirez - <decorator:title/></title>
    <link href="${bootcss}" rel="stylesheet" type="text/css">
    <link href="${css}" rel="stylesheet" type="text/css">
    <link href="${favicon}" rel="icon" type="image/vnd.microsoft.icon">
    <decorator:head/>
</head>
<body>

<div id="wrap">
    <header>

        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">

                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="${home}">Bajoneando</a></li>
                        <li><a href="${blogUrl}">Blog</a></li>
                        <li><a href="${visits}">Visits</a></li>
                        <sec:authorize access="hasRole('ROLE_ADMIN')">
                            <li><a href="${images}">Images</a></li>
                        </sec:authorize>
                        <li><a href="${about}">About</a></li>
                        <sec:authorize access="isAnonymous()">
                            <li><a href="${login}">Log In</a></li>
                        </sec:authorize>
                        <sec:authorize access="hasRole('ROLE_ADMIN')">
                            <li><a href="${logout}">Log Out</a></li>
                        </sec:authorize>
                    </ul>
                </div>
            </div>
        </nav>


    </header>

    <div class="container">

        <div id="rounded_box">
            <decorator:body/>
            <script src="${res}/js/out/goog/base.js" type="text/javascript"></script>
            <script src="${res}/js/bajoneando.js" type="text/javascript"></script>
            <script type="text/javascript">goog.require("bajoneando.visits");</script>
        </div>
    </div>
</div>
<div id="footer">
    <div class="container">
        <p class="text-muted credit">
            Copyright to Bajoneando
            |
            <a href="https://www.iubenda.com/privacy-policy/923467" title="Privacy Policy">
                Privacy Policy
            </a>
            |
            ver 0.1.7-SNAPSHOT
        </p>
    </div>
</div>
</body>
</html>
