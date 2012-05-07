<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<spring:url value="/" var="home" />
<spring:url value="/blog/" var="blogUrl"/>
<spring:url value="/resources/icons/favicon.ico" var="favicon" />
<spring:url value="/resources/css/lnramirez.css" var="css" />
<spring:url value="/resources/js/dojo-1.7.2/dojo/dojo.js" var="dojo" />
<spring:url value="/about/" var="about" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Latest blog entries</title>
        <script src="${dojo}"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <script>
            function loadEntry(_id) {
                var xhrArgs = {
                    url: "${pageContext.request.contextPath}/blog/single/" + _id,
                    handleAs: "json",
                    load: function(data) {return data;},
                    error: function(error) {return error;}
                }
                var deferred = dojo.xhrGet(xhrArgs);
                deferred.then (
                    function (blogEntry) {
                        require(["dojo/query", "dojo/NodeList-traverse"], function(query){
                            require(["dojo/dom-construct"], function(domConstruct){
                                var nodeArticle = query("a#" + blogEntry.id).parents("article").first();
                                var floatingForm = query("div#_floatingForm");
                                domConstruct.place(floatingForm[0], nodeArticle[0]);
                            });
                        });
                    },
                    function (error) {
                        alert(error);
                    }
                );
            }
            dojo.ready(function () {
                dojo.query("article a").forEach(function(node) {
                    dojo.connect(node,"onclick",function(event) {
                        dojo.stopEvent(event);
                        loadEntry(node.id);
                    });
                });
            }); 
        </script>
        <link href="${css}" rel="stylesheet" type="text/css">
        <link href="${favicon}" rel="icon" type="image/vnd.microsoft.icon">
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
                    <p>
                        Published on <time datetime="${blogEntry.date}">${blogEntry.date}</time>: 
                        <a href="#" id="${blogEntry.id}">Edit</a>
                    </p>
                    <p>${blogEntry.article}</p>
                </article>
            </c:forEach>
            <div id="_floatingForm">
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
            </div>
        </section>
        <footer>
            <p>
                <small>Copyright to Bajoneando</small>
            </p>
        </footer>
    </body>
</html>