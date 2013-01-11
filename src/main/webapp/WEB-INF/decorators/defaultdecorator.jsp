<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="decorator"uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<c:url value="/" var="home" />
<c:url value="/blog/" var="blogUrl" />
<c:url value="/images/startupload" var="images" />
<c:url value="/visit/statistics" var="visits" />
<c:url value="/about/" var="about" />
<c:url value="/spring_security_login" var="login" />
<c:url value="/j_spring_security_logout" var="logout" />
<spring:url value="/resources/icons/favicon.ico" var="favicon" />
<spring:url value="/resources/css/lnramirez.css" var="css" />
<spring:url value="/resources/js/dojo-1.7.2/dojo/dojo.js" var="dojo" />
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>lnramirez - <decorator:title /></title>
        <link href="${css}" rel="stylesheet" type="text/css">
        <link href="${favicon}" rel="icon" type="image/vnd.microsoft.icon">
        <script src="${dojo}" data-dojo-config="parseOnLoad: true, isDebug: true"></script>
        <script>
            function addVisit(position) {
                var payload = dojo.toJson({'latitude': position.coords.latitude, 'longitude':  position.coords.longitude});
                var xhrArgs = {
                    url: "${pageContext.request.contextPath}/visit/add",
                    headers: { "Content-Type": "application/json"},
                    postData: payload
                }
                var deferred = dojo.xhrPost(xhrArgs);
                deferred.then (function(success) {
                    
                }, function(error) {
                    
                });
            }
            function noGeoLocation() {
                
            }
            dojo.ready(function() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(addVisit, noGeoLocation);
                } 
            });
        </script>
        <decorator:head />
    </head>
    <body>
        <header>
            <h1>lnramirez website</h1>
        </header>
        <nav>
            <ul>
                <li><a href="${home}">Home</a></li>
                <li><a href="${blogUrl}" >Blog</a></li>    
                <li><a href="${visits}" >Visits</a></li>
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
        </nav>
        <div id="rounded_box">
            <decorator:body />
        </div>
        <footer>
            <p>
                <small>
                    Copyright to Bajoneando
                </small> | 
                <small>
                    <a href="https://www.iubenda.com/privacy-policy/923467" title="Privacy Policy">Privacy Policy</a>
                </small> |
                <small>
                    ver 1.6-SNAPSHOT
                </small>
            </p>
        </footer>
    </body>
</html>
