<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/resources" var="res" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Visits Statistics</title>      
    </head>
    <body>
    <div class="row">
        <div class="col-md-12">
            <h1>Visits Statistics</h1>
        </div>
    </div>
    <div id="summary"></div>
        <div id="map" style="width:750px; height:300px;"></div>
                <script src="http://fb.me/react-0.8.0.js"></script>
                <script src="${res}/js/out/goog/base.js" type="text/javascript"></script>
                <script src="${res}/js/bajoneando.js" type="text/javascript"></script>
                <script type="text/javascript">goog.require("bajoneando.summary");</script>
    
    </body>
</html>
