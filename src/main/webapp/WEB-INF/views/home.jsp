<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<c:url value="/blog/" var="blogUrl" />
<c:url value="/resources/" var="resources" />
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>lnramirez</title>
        <link rel="icon" type="image/vnd.microsoft.icon" href="${resources}icons/favicon.ico">
    </head>
    <body>
        <header>
        </header>
        <nav>
            <ul>
                <li><a href="${blogUrl}">Blog</a></li>
            </ul>
        </nav>
        <footer>
            <p>
                <small>Copyright to bajoneando</small>
            </p>
        </footer>
    </body>

</html>