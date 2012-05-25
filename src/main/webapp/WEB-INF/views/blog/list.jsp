<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<spring:url value="/resources/js/dojo-1.7.2/dojo/dojo.js" var="dojo" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Blog</title>
        <script src="${dojo}" data-dojo-config="parseOnLoad: true, isDebug: true"></script>
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
                        require(["dojo/query", "dojo/dom-construct", "dojo/NodeList-traverse", "dojo/NodeList-manipulate","dojo/dom-attr","dojo/date/locale"], 
                        function(query,domConstruct,domAttr,locale){
                            var nodeArticle = query("a#" + blogEntry.id).parents("article").first()[0];
                            var floatingDiv = query("div#_floatingForm")[0];
                            var floatingForm = query("#blogEntryForm")[0];
                            dojo.attr("subject","value",blogEntry.subject);
                            dojo.attr("article","value",blogEntry.article);
                            var pubDate = new Date();
                            pubDate.setTime(blogEntry.publishDate);
                            var formattedPubDate = dojo.date.locale.format(pubDate, {selector:'date', datePattern:'yyyy-MM-dd'});
                            dojo.attr("publishDate","value",formattedPubDate);
                            var idNode = dojo.create("input",{"type":"hidden","value":blogEntry.id,"id":"id","name":"id"});
                            domConstruct.place(idNode,"article");
                            dojo.connect(floatingForm,"onsubmit",function(event) {
                                dojo.stopEvent(event);
                                var xhrUpdateArgs = {
                                    url: "${pageContext.request.contextPath}/blog/update",
                                    headers: { "Content-Type": "application/json"},
                                    putData: dojo.formToJson(floatingForm)
                                }
                                var def = dojo.xhrPut(xhrUpdateArgs);
                                def.then(function(data) {
                                    dojo.disconnect(floatingForm);
                                });
                            });

                            domConstruct.place(floatingDiv, nodeArticle);
                    });
                    },
                    function (error) {
                        alert(error);
                    }
                );
            }
            dojo.ready(function () {
                dojo.query("article a.editanchor").forEach(function(node) {
                    dojo.connect(node,"onclick",function(event) {
                        dojo.stopEvent(event);
                        loadEntry(node.id);
                    });
                });
            }); 
        </script>
    </head>
    <body>
            <header>
                <h2>Latest entries</h2>
            </header>
            <c:forEach items="${blogEntryPage.content}" var="blogEntry">
                <article>
                    <header>
                        <h1>${blogEntry.subject}</h1>
                        <p>
                            Published on 
                            <time datetime="<fmt:formatDate value="${blogEntry.publishDate}" pattern="yyyy-MM-dd"/>">
                                    <fmt:formatDate value="${blogEntry.publishDate}" pattern="dd-MMM-yyyy"/>
                                </time>: 
                                <a href="#blogEntryForm" id="${blogEntry.id}" class="editanchor">Edit</a>
                        </p>
                    </header>
                    ${blogEntry.printableHtml}
                    <c:if test="${not empty blogEntry.lastUpdateDate}">
                        <p>
                            <small>
                                Last update 
                                <time datetime="<fmt:formatDate value="${blogEntry.lastUpdateDate}" pattern="yyyy-MM-dd"/>">
                                    <fmt:formatDate value="${blogEntry.lastUpdateDate}" pattern="dd-MMM-yyyy HH:mm"/>
                                </time>
                            </small>
                        </p>
                    </c:if>
                </article>
            </c:forEach>
            <nav class="pagination">
                <c:if test="${not blogEntryPage.firstPage}">
                    <spring:url value="/blog" var="newer">
                        <spring:param name="page.page" value="${blogEntryPage.number}" />
                    </spring:url>
                    <a href="${newer}" class="later">Later Entries</a>
                </c:if>
                <c:if test="${not blogEntryPage.lastPage}">
                    <spring:url value="/blog" var="older">
                        <spring:param name="page.page" value="${blogEntryPage.number + 2}" />
                    </spring:url>
                    <a href="${older}" class="previous">Previous Entries</a>
                </c:if>
            </nav>
            <div id="_floatingForm">
            <article>
                <header>
                    <h2>Add a new entry</h2>
                </header>
                <form:form commandName="blogEntry" action="${blogUrl}" id="blogEntryForm" name="blogEntryForm">
                    <p>
                        <label>Subject:
                            <form:input path="subject" type="text" id="subject" 
                                        placeholder="Subject" required="required" />
                        </label>
                    </p>
                    <p>
                        <label>Publish Date:
                            <form:input path="publishDate" type="text" id="publishDate" 
                                        placeholder="Publish Date" required="required" />
                        </label>
                    </p>
                    <p>
                        <label>Article:
                            <form:textarea path="article" id="article" cols="100" rows="10"  
                                           placeholder="Main content of article" required="required" />
                        </label>
                    </p>
                    <p><input type="submit" value="Post" ></p>
                </form:form>
            </article>
            </div>
    </body>
</html>
