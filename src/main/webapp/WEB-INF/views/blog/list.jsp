<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib prefix="bajoneando"    uri="http://www.bajoneando.com/tags"%>
<spring:url value="/resources/js/prettify.js" var="prettifyjs" />
<spring:url value="/resources/css/prettify.css" var="prettifycss" />
<spring:url value="/resources" var="res" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Blog</title>
        <link href="${prettifycss}" rel="stylesheet" type="text/css">
        <script src="${prettifyjs}"></script>
        <script src="${blogcustomizedjs}"></script>
    </head>
    <body>
        <div class="row">
            <div class="col-md-12">
                <header>
                    <h2>Latest entries</h2>
                </header>
                <div id="articles"></div>
                <script src="http://fb.me/react-0.8.0.js"></script>
                <script src="${res}/js/out/goog/base.js" type="text/javascript"></script>
                <script src="${res}/js/bajoneando.js" type="text/javascript"></script>
                <script type="text/javascript">goog.require("bajoneando.editor");</script>
            </div>
        </div>
    </body>
</html>
