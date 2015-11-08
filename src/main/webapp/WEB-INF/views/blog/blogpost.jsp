<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="bajoneando"    uri="http://www.bajoneando.com/tags"%>
<spring:url value="/resources/js/prettify.js" var="prettifyjs" />
<spring:url value="/resources/css/prettify.css" var="prettifycss" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${blogEntry.subject}</title>
    </head>
    <body>
        <article id="${blogEntry.id}" class="blogcontent">
            <header>
                <c:set var="subject">
                    <bajoneando:htmlencode value="${blogEntry.subject}"/>
                </c:set>
                <h1><a href="<c:url value="/blog/${blogEntry.id}/${subject}" />">${blogEntry.subject}</a></h1>
                <p class="text-muted">
                    Published on 
                    <time class="publishDate" datetime="<fmt:formatDate value="${blogEntry.publishDate}" pattern="yyyy-MM-dd"/>">
                        <fmt:formatDate value="${blogEntry.publishDate}" pattern="dd-MMM-yyyy" timeZone="GMT"/>
                    </time>
                </p>
            </header>
            <div class="printableHtml">${blogEntry.printableHtml}</div>
            <c:if test="${not empty blogEntry.lastUpdateDate}">
                <p class="text-muted">
                    Last update
                    <time class="lastUpdateDate" datetime="<fmt:formatDate value="${blogEntry.lastUpdateDate}" pattern="yyyy-MM-dd"/>">
                        <fmt:formatDate value="${blogEntry.lastUpdateDate}" pattern="dd-MMM-yyyy HH:mm"/>
                    </time>
                </p>
            </c:if>
        </article>
    </body>
</html>