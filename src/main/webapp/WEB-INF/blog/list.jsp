<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url value="/blog.htm" var="blogUrl"/>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Latest blog entries</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>    
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <script>
            function addEntry() {
                var beForm = $('blogEntryForm').serialize();
                alert
                $.post('${blogUrl}',beForm, function (data) {
                    alert('posted with data ' + data);
                }, 'json');
                return false;
            }
        </script>
    </head>
    <body>
        <c:forEach items="${blogEntryList}" var="blogEntry">
            <article>
                <h1><c:out value="${blogEntry.subject}"/></h1>
                <p><c:out value="${blogEntry.text}"/></p>
            </article>
        </c:forEach>
        <form:form action="blog.htm" id="blogEntryForm">
            <p>
                <label>Subject:
                    <input type="text" id="subject" placeholder="Subject" required>
                </label>
            </p>
            <p>
                <label>Article:
                    <textarea id="article" placeholder="Main content of article" required></textarea>
                </label>
            </p>
            <p><input type="button" value="Post via JSON" onclick="addEntry()"></p>
            <p><input type="submit" value="Post" ></p>
        </form:form>
    </body>
</html>