<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url value="/blog/" var="blogUrl"/>
<c:url value="/resources/" var="resources" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Latest blog entries</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>    
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <script>
            function addEntry() {
                var beForm = $('form#blogEntryForm').serialize();
                $.ajax({
                    type: "POST",
                    url: '${blogUrl}',
                    data: beForm,
                    contentType: "application/json",
                    dataType: "json"
                });
                return false;
            }
        </script>
        <link rel="icon" type="image/vnd.microsoft.icon" href="${resources}icons/favicon.ico">
    </head>
    <body>
        <c:forEach items="${blogEntryList}" var="blogEntry">
            <article>
                <h1><c:out value="${blogEntry.subject}"/></h1>
                <p><c:out value="${blogEntry.text}"/></p>
            </article>
        </c:forEach>
        <form:form action="${blogUrl}" id="blogEntryForm" name="blogEntryForm">
            <p>
                <label>Subject:
                    <input type="text" id="subject" name="subject" placeholder="Subject" required>
                </label>
            </p>
            <p>
                <label>Article:
                    <textarea id="article" name="article" placeholder="Main content of article" required></textarea>
                </label>
            </p>
            <p><input type="button" value="Post via JSON" onclick="addEntry()"></p>
            <p><input type="submit" value="Post" ></p>
        </form:form>
    </body>
</html>