<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib prefix="bajoneando"    uri="http://www.bajoneando.com/tags"%>
<spring:url value="/resources/js/dojo-1.7.2/dojo/dojo.js" var="dojo" />
<spring:url value="/resources/js/prettify.js" var="prettifyjs" />
<spring:url value="/resources/js/blogcustomized.js" var="blogcustomizedjs" />
<spring:url value="/resources/js/yadateutil.js" var="yadateutil" />
<spring:url value="/resources/css/prettify.css" var="prettifycss" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Blog</title>
        <link href="${prettifycss}" rel="stylesheet" type="text/css">
        <script src="${prettifyjs}"></script>
        <script src="${blogcustomizedjs}"></script>
        <script src="${yadateutil}"></script>
        <script>
            function updateArticle(_id) {
                var xhrArgs = {
                        url: "${pageContext.request.contextPath}/blog/single/" + _id,
                        handleAs: "json",
                        load: function(data) {return data;},
                        error: function(error) {return error;}
                }
                var deferred = dojo.xhrGet(xhrArgs);
                deferred.then (
                    function (blogEntry) {
                        require(["dojo/query", "dojo/dom-construct", "dojo/NodeList-traverse", "dojo/NodeList-manipulate",
                            "dojo/dom-attr", "dojo/dom","dojo/date/locale"], 
                        function(query,domConstruct,domAttr,locale){
                            var nodeArticle = query("article#" + blogEntry.id)[0];
                            query("h1",nodeArticle).attr("innerHTML",blogEntry.subject);
                            var articleNodeList = query("div",nodeArticle);
                            articleNodeList.attr("innerHTML",blogEntry.printableHtml);
                            var lastDate = new Date();
                            lastDate.setTime(blogEntry.lastUpdateDate);
                            var fLastDate = dojo.date.locale.format(lastDate, {selector:'date', datePattern:'dd-MMM-yyyy HH:mm'}); 
                            var nodeLastUpdate = query("time.lastUpdateDate",nodeArticle);
                            nodeLastUpdate.attr("datetime",fLastDate);
                            nodeLastUpdate.attr("innerHTML",fLastDate + " ");
                            var fPubDate = toUTCAndFormatted(blogEntry.publishDate,"dd-MMM-yyyy");
                            var nodePublishDate = query("time.publishDate",nodeArticle);
                            nodePublishDate.attr("datetime",fPubDate);
                            nodePublishDate.attr("innerHTML",fPubDate + " ");
                            prettifyCode(prettyPrint);
                            openAnchorsInTab();
                        });
                    },
                    function (error_) {
                        console.error(error_);
                    }
                );
            }
            function cleanAndMoveForm(/*optional move to id after deleting*/someid) {
                require(["dojo/query","dojo/dom-construct"],function(query,domConstruct) {
                    var floatingDiv = query("div#_floatingForm")[0];
                    var navPagination = query("nav.pagination")[0];
                    dojo.attr("subject","value","");
                    dojo.attr("article","value","");
                    dojo.attr("publishDate","value","");
                    dojo.attr("formButton","value","Add new entry");
                    query("h2",floatingDiv).attr("innerHTML","Add a new entry");
                    var floatingForm = query("#blogEntryForm")[0];
                    query("#id",floatingForm).forEach(function(node_){
                        node_.parentNode.removeChild(node_);
                    });
                    domConstruct.place(floatingDiv, navPagination,"after");
                    query("#cancelBtn",floatingForm).forEach(function(node_){
                        node_.parentNode.removeChild(node_);
                    });
                    if (someid) {
                        require(["dojo/window"], function(win){
                            win.scrollIntoView(someid);
                        });
                    }
                });
            }
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
                            var nodeArticle = query("article#" + blogEntry.id)[0];
                            var floatingDiv = query("div#_floatingForm")[0];
                            var floatingForm = query("#blogEntryForm")[0];
                            query("h2",floatingDiv).attr("innerHTML","Update '" + blogEntry.subject + "' entry");
                            dojo.attr("subject","value",blogEntry.subject);
                            dojo.attr("article","value",blogEntry.article);
                            var formattedPubDate = toUTCAndFormatted(blogEntry.publishDate);
                            dojo.attr("publishDate","value",formattedPubDate);
                            dojo.attr("formButton","value","Update entry");
                            query("#id",floatingForm).forEach(function(node_){
                                node_.parentNode.removeChild(node_);
                            });
                            query("#cancelBtn").forEach(function(node_){
                                node_.parentNode.removeChild(node_);
                            });
                            var idNode = dojo.create("input",{"type":"hidden","value":blogEntry.id,"id":"id","name":"id"});
                            domConstruct.place(idNode,"blogEntryForm");
                            var cancelNode = dojo.create("input",
                                {"type":"reset","value":"Cancel",
                                 "id":"cancelBtn","name":"cancelBtn",
                                 "onclick":function(e) {cleanAndMoveForm(blogEntry.id)}});
                            domConstruct.place(cancelNode,"formButton","after");
                            var handle = dojo.connect(floatingForm,"onsubmit",function(event) {
                                dojo.stopEvent(event);
                                var xhrUpdateArgs = {
                                    url: "${pageContext.request.contextPath}/blog/update",
                                    headers: { "Content-Type": "application/json"},
                                    putData: dojo.formToJson(floatingForm)
                                }
                                var def = dojo.xhrPut(xhrUpdateArgs);
                                def.then(function(res) {
                                    cleanAndMoveForm();
                                    updateArticle(blogEntry.id);
                                    require(["dojo/window"], function(win){
                                        win.scrollIntoView(blogEntry.id);
                                    });
                                    dojo.disconnect(handle);
                                },function (error_) {
                                    console.error(error_);
                                });
                            });
                            domConstruct.place(floatingDiv, nodeArticle);
                            require(["dojo/window"], function(win){
                                win.scrollIntoView("_floatingForm");
                            });
                    });
                    },
                    function (error) {
                        console.error(error);
                    }
                );
            }
            function deleteEntry(_id) {
                var xhrArgs = {
                    url: "${pageContext.request.contextPath}/blog/delete/" + _id,
                    handleAs: "json",
                    load: function(data) {return data;},
                    error: function(error) {return error;}
                }
                if (confirm("Are you sure you want to delete this entry?")) {
                    var deferred = dojo.xhrDelete(xhrArgs);
                    deferred.then (function(response){
                        require(["dojo/query","dojo/dom-construct"], function(query,domConstruct) {
                            query("article#" + _id).orphan();
                        });
                    }, function (error_) {
                        console.error(error_);
                    });
                }
            }
            require(["dojo/dom", "dojo/domReady!"], function(dom){
                prettifyCode(prettyPrint);
                openAnchorsInTab();
                dojo.query("article.blogcontent").forEach(function(blogEntry) {
                    dojo.query("a.editanchor",blogEntry).forEach(function(node) {
                        dojo.connect(node,"onclick",function(event) {
                            dojo.stopEvent(event);
                            loadEntry(blogEntry.id);
                        });
                    });
                    dojo.query("a.deleteanchor",blogEntry).forEach(function(node) {
                        dojo.connect(node,"onclick",function(event) {
                            dojo.stopEvent(event);
                            deleteEntry(blogEntry.id);
                        });
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
                <article id="${blogEntry.id}" class="blogcontent">
                    <header>
                        <c:set var="subject">
                            <bajoneando:htmlencode value="${blogEntry.subject}"/>
                        </c:set>
                        <h1><a href="<c:url value="/blog/${blogEntry.id}/${subject}" />">${blogEntry.subject}</a></h1>
                        <p>
                            Published on 
                            <time class="publishDate" datetime="<fmt:formatDate value="${blogEntry.publishDate}" pattern="yyyy-MM-dd"/>">
                                <fmt:formatDate value="${blogEntry.publishDate}" pattern="dd-MMM-yyyy" timeZone="GMT"/>
                            </time> 
                            <sec:authorize access="hasRole('ROLE_ADMIN')">
                            :
                            <a href="#blogEntryForm" class="editanchor">Edit</a>
                            <a href="#blogEntryForm" class="deleteanchor">Delete</a>
                            </sec:authorize>
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
            <sec:authorize access="hasRole('ROLE_ADMIN')">
                <div id="_floatingForm">
                <article>
                    <header>
                        <h2>Add a new entry</h2>
                    </header>
                    <form:form commandName="blogEntry" action="${blogUrl}" id="blogEntryForm" name="blogEntryForm">
                        <fieldset>
                            <p>
                                <label for="subject">Subject:</label>
                                <form:input path="subject" type="text" id="subject" 
                                            placeholder="Subject" required="required" />
                            </p>
                            <p>
                                <label for="publishDate">Publish Date (UTC):</label>
                                <form:input path="publishDate" type="text" id="publishDate" 
                                            placeholder="Publish Date" required="required" />
                            </p>
                            <p>
                                <label for="article">Article:</label>
                                <form:textarea path="article" id="article" cols="100" rows="10"  
                                            placeholder="Main content of article" required="required" />
                            </p>
                            <p>
                                <input type="submit" id="formButton" value="Add new entry" >
                            </p>
                        </fieldset>
                    </form:form>
                </article>
                </div>
            </sec:authorize>
    </body>
</html>
