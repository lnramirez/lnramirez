<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<spring:url value="/resources/js/prettify.js" var="prettifyjs" />
<spring:url value="/resources/js/blogcustomized.js" var="blogcustomizedjs" />
<spring:url value="/resources/css/prettify.css" var="prettifycss" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${blogEntry.subject}</title>    
        <link href="${prettifycss}" rel="stylesheet" type="text/css">
        <script src="${prettifyjs}"></script>
        <script src="${blogcustomizedjs}"></script>        
        <script>
            dojo.ready(function () {
                prettifyCode();
                openAnchorsInTab();
            }); 
        </script>
    </head>
    <body>
        <article id="${blogEntry.id}" class="blogcontent">
            <header>
                <h2>${blogEntry.subject}</h2>
                <p>
                    Published on 
                    <time class="publishDate" datetime="<fmt:formatDate value="${blogEntry.publishDate}" pattern="yyyy-MM-dd"/>">
                        <fmt:formatDate value="${blogEntry.publishDate}" pattern="dd-MMM-yyyy" timeZone="GMT"/>
                    </time>
                </p>
            </header>
            <div class="printableHtml">${blogEntry.printableHtml}</div>
            <c:if test="${not empty blogEntry.lastUpdateDate}">
                <p>
                    <small>
                        Last update 
                        <time class="lastUpdateDate" datetime="<fmt:formatDate value="${blogEntry.lastUpdateDate}" pattern="yyyy-MM-dd"/>">
                            <fmt:formatDate value="${blogEntry.lastUpdateDate}" pattern="dd-MMM-yyyy HH:mm"/>
                        </time>
                    </small>
                </p>
            </c:if>
        </article>
    </body>
</html>