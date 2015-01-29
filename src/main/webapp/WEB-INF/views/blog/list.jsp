<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib prefix="bajoneando"    uri="http://www.bajoneando.com/tags"%>
<spring:url value="/resources/js/prettify.js" var="prettifyjs" />
<spring:url value="/resources/js/blogcustomized.js" var="blogcustomizedjs" />
<spring:url value="/resources/js/yadateutil.js" var="yadateutil" />
<spring:url value="/resources/css/prettify.css" var="prettifycss" />
<spring:url value="/resources" var="res" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Blog</title>
        <link href="${prettifycss}" rel="stylesheet" type="text/css">
        <script src="${prettifyjs}"></script>
        <script src="${blogcustomizedjs}"></script>
        <script src="${yadateutil}"></script>
        <%--<script>
            function updateArticle(_id) {require(["dojo/json","dojo/request/xhr","dojo/query", "dojo/dom-construct",
                         "dojo/NodeList-traverse", "dojo/NodeList-manipulate","dojo/dom-attr",
                         "dojo/dom","dojo/date/locale"],function(json,xhr,query,domConstruct,traverse,manipulate,domAttr,dom,locale) {
                    xhr.get("${pageContext.request.contextPath}/blog/single/" + _id,{handleAs: "json"}).then (function (blogEntry) {
                        var nodeArticle = query("article#" + blogEntry.id)[0];
                        query("h1",nodeArticle).attr("innerHTML",blogEntry.subject);
                        var articleNodeList = query("div",nodeArticle)[0];
                        domAttr.set(articleNodeList,"innerHTML",blogEntry.printableHtml);
                        var lastDate = new Date();
                        lastDate.setTime(blogEntry.lastUpdateDate);
                        var fLastDate = locale.format(lastDate, {selector:'date', datePattern:'dd-MMM-yyyy HH:mm'});
                        var nodeLastUpdate = query("time.lastUpdateDate",nodeArticle)[0];
                        domAttr.set(nodeLastUpdate,"datetime",fLastDate);
                        domAttr.set(nodeLastUpdate,"innerHTML",fLastDate + " ");
                        var fPubDate = toUTCAndFormatted(blogEntry.publishDate,locale,"dd-MMM-yyyy");
                        var nodePublishDate = query("time.publishDate",nodeArticle)[0];
                        domAttr.set(nodePublishDate,"datetime",fPubDate);
                        domAttr.set(nodePublishDate,"innerHTML",fPubDate + " ");
                    },
                    function (error_) {
                        console.error(error_);
                    });
                });
            }
            function cleanAndMoveForm(/*optional move to id after deleting*/someid) {
                require(["dojo/query","dojo/dom-construct","dojo/dom-attr","dojo/window"],function(query,domConstruct,domAttr,win) {
                    var floatingDiv = query("div#_floatingForm")[0];
                    var navPagination = query("nav.pagination")[0];
                    domAttr.set("subject","value","");
                    domAttr.set("article","value","");
                    domAttr.set("publishDate","value","");
                    domAttr.set("formButton","value","Add new entry");
                    query("h2",floatingDiv).forEach(function(node_) {
                        domAttr.set(node_,"innerHTML","Add a new entry");
                    });
                    var floatingForm = query("#blogEntryForm")[0];
                    query("#id",floatingForm).forEach(function(node_){
                        node_.parentNode.removeChild(node_);
                    });
                    domConstruct.place(floatingDiv, navPagination,"after");
                    query("#cancelBtn",floatingForm).forEach(function(node_){
                        node_.parentNode.removeChild(node_);
                    });
                    if (someid) {
                        win.scrollIntoView(someid);
                    }
                });
            }
            function loadEntry(_id) {
                require(["dojo/json","dojo/request/xhr","dojo/dom-form","dojo/query", "dojo/dom-construct",
                         "dojo/NodeList-traverse", "dojo/NodeList-manipulate","dojo/dom-attr","dojo/date/locale",
                         "dojo/on","dojo/_base/event","dojo/window"],
                         function(json,xhr,form,query,domConstruct,traverse,manipulate,domAttr,locale,on,event,win) {
                    var deferred = xhr.get("${pageContext.request.contextPath}/blog/single/" + _id,{handleAs: "json"});
                    deferred.then (function (blogEntry) {
                        var nodeArticle = query("article#" + blogEntry.id)[0];
                        var floatingDiv = query("div#_floatingForm")[0];
                        var floatingForm = query("#blogEntryForm")[0];
                        query("h2",floatingDiv).attr("innerHTML","Update '" + blogEntry.subject + "' entry");
                        domAttr.set("subject","value",blogEntry.subject);
                        domAttr.set("article","value",blogEntry.article);
                        var formattedPubDate = toUTCAndFormatted(blogEntry.publishDate,locale);
                        domAttr.set("publishDate","value",formattedPubDate);
                        domAttr.set("formButton","value","Update entry");
                        query("#id",floatingForm).forEach(function(node_){
                            node_.parentNode.removeChild(node_);
                        });
                        query("#cancelBtn").forEach(function(node_){
                            node_.parentNode.removeChild(node_);
                        });
                        var idNode = domConstruct.create("input",{"type":"hidden","value":blogEntry.id,"id":"id","name":"id"});
                        domConstruct.place(idNode,"blogEntryForm");
                        var cancelNode = domConstruct.create("input",
                            {"type":"reset","value":"Cancel",
                             "id":"cancelBtn","name":"cancelBtn",
                             "onclick":function(e) {cleanAndMoveForm(blogEntry.id)}});
                        domConstruct.place(cancelNode,"formButton","after");
                        var handle = on(floatingForm,"submit",function(event_) {
                            event.stop(event_);
                            var xhrUpdateArgs = {
                                headers: {"Content-Type": "application/json"},
                                data: form.toJson(floatingForm)
                            }
                            var def = xhr.put("${pageContext.request.contextPath}/blog/update",xhrUpdateArgs);
                            def.then(function(res) {
                                cleanAndMoveForm();
                                updateArticle(blogEntry.id);
                                win.scrollIntoView(blogEntry.id);
                                handle.remove();
                            },function (error_) {
                                console.error(error_);
                            });
                        });
                        domConstruct.place(floatingDiv, nodeArticle);
                        win.scrollIntoView("_floatingForm");
                    },
                    function (error) {
                        console.error(error);
                    });
                });
            }
            function deleteEntry(_id) {
                if (confirm("Are you sure you want to delete this entry?")) {
                    require(["dojo/json","dojo/request/xhr","dojo/query","dojo/dom-construct"],
                            function(json,xhr,query,domConstruct) {
                        var deferred = xhr.del("${pageContext.request.contextPath}/blog/delete/" + _id,{headers: {"Content-Type": "application/json"}});
                        deferred.then (function(response){
                            query("article#" + _id).forEach(function(node_) {
                                node_.parentNode.removeChild(node_);
                            });
                        }, function (error_) {
                            console.error(error_);
                        });
                    });
                }
            }
            require(["dojo/dom", "dojo/domReady!","dojo/query","dojo/on","dojo/_base/event"], function(dom,ready,query,on,event){
                query("article.blogcontent").forEach(function(blogEntry) {
                    query("a.editanchor",blogEntry).forEach(function(node) {
                        on(node,"click",function(event_) {
                            event.stop(event_);
                            loadEntry(blogEntry.id);
                        });
                    });
                    query("a.deleteanchor",blogEntry).forEach(function(node) {
                        on(node,"click",function(event_) {
                            event.stop(event_);
                            deleteEntry(blogEntry.id);
                        });
                    });
                });
            }); 
        </script>--%>
    </head>
    <body>
        <div class="row">
            <div class="col-md-12">
                <header>
                    <h2>Latest entries</h2>
                </header>
                <div id="articles"></div>
                <script src="http://fb.me/react-0.8.0.js"></script>
                <script src="${res}/js/out/goog/base.js" type="text/javascript"></script>
                <script src="${res}/js/bajoneando.js" type="text/javascript"></script>
                <script type="text/javascript">goog.require("bajoneando.editor");</script>
                <%--<ul class="pager">
                    <c:if test="${not blogEntryPage.lastPage}">
                        <spring:url value="/blog" var="older">
                            <spring:param name="page.page" value="${blogEntryPage.number + 2}" />
                        </spring:url>
                        <li class="previous">
                        <a href="${older}" class="previous">Previous Entries</a>
                        </li>
                    </c:if>
                    <c:if test="${not blogEntryPage.firstPage}">
                        <spring:url value="/blog" var="newer">
                            <spring:param name="page.page" value="${blogEntryPage.number}" />
                        </spring:url>
                        <li class="next">
                            <a href="${newer}" class="later">Later Entries</a>
                        </li>
                    </c:if>
                </ul>--%>
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
            </div>
        </div>
    </body>
</html>
