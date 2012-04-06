<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url value="/" var="home" />
<c:url value="/blog/" var="blogUrl"/>
<c:url value="/resources/" var="resources" />
<c:url value="/about/" var="about" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Latest blog entries</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>    
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <link href="${resources}css/lnramirez.css" rel="stylesheet" type="text/css"/>
        <link rel="icon" type="image/vnd.microsoft.icon" href="${resources}icons/favicon.ico">
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
            <header>
                <h2>Latest entries</h2>
            </header>
            <c:forEach items="${blogEntryList}" var="blogEntry">
                <article>
                    <h1>${blogEntry.subject}</h1>
                    <p>Published on <time datetime="${blogEntry.date}">${blogEntry.date}</time></p>
                    <p>${blogEntry.article}</p>
                </article>
            </c:forEach>
            <article>
                <header>
                    <h2>Add a new entry</h2>
                </header>
                <form:form commandName="blogEntry" action="${blogUrl}" id="blogEntryForm" name="blogEntryForm">
                    <p>
                        <label>Subject:
                            <form:input path="subject" type="text" id="subject" 
                                        name="subject" placeholder="Subject" required="required" />
                        </label>
                    </p>
                    <p>
                        <label>Article:
                            <form:textarea path="article" id="article" name="article" cols="50" rows="7"  
                                           placeholder="Main content of article" required="required" />
                        </label>
                    </p>
                    <p><input type="submit" value="Post" ></p>
                    </form:form>
            </article>
        </section>
        <footer>
            <p>
                <small>Copyright to Bajoneando</small>
            </p>
        </footer>
    </body>
</html>