<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<c:url value="/" var="home" />
<c:url value="/blog/" var="blogUrl" />
<c:url value="/resources/" var="resources" />
<c:url value="/about/" var="about" />
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>lnramirez</title>
        <link rel="icon" type="image/vnd.microsoft.icon" href="${resources}icons/favicon.ico">
        <link href="${resources}css/lnramirez.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <header>
            <h1>lnramirez website</h1>
        </header>
        <nav>
            <ul>
                <li><a href="${home}">Home</a></li>
                <li><a href="${blogUrl}">Blog</a></li>                
                <li><a href="${about}">About</a></li>
            </ul>
        </nav>
        <section id="rounded_box">
            <header>
                <h2>Bajoneando</h2>
            </header>
            <article>
                <strong>Bajoneando meaning</strong>
                <p>
                    Bajonear is a salvadorean-spanish verb that you use to refer
                    to the action of eating after hours, probably after a party or 
                    a long day at work. 
                    You can use it when you are famished and heading towards to
                    grab a bite, something like <em>I am going to bajonear</em></p>
                <p>
                    I am Bajoneando as you can see in the footer because I usually 
                    program at work only but nowadays I have been feeling like 
                    programming after hours with a cup of joe, nuts, dried fruit 
                    or any paleo snack that I can eat
                </p>
            </article>
        </section>
        <footer>
            <p>
                <small>Copyright to Bajoneando</small>
            </p>
        </footer>
    </body>

</html>