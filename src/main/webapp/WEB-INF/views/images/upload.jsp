<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="sec"    uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<c:url value="/images/upload" var="imagesUpload" />
<html lang="en">
    <head>
        <sec:authorize access="hasRole('ROLE_ADMIN')">
        <script>
            dojo.require("dojo.io.iframe");
            function updateFiles() {
                var xhrArgs = {
                    url: "${pageContext.request.contextPath}/images/list/1",
                    handleAs: "json",
                    load: function(data) {return data;},
                    error: function(error) {return error;}
                }
                dojo.xhrGet(xhrArgs).then(function(files) {
                    require(["dojo/query", "dojo/dom-construct","dojo/_base/array"], function (query,domConstruct,array) {
                        array.forEach(files,function(file) {
                            var url_ = '${pageContext.request.contextPath}/images/download/' + file.id + "/jpeg";
                            var idNode = dojo.create("div",{
                                "id": file.id, 
                                "class": '_image',
                                "innerHTML": 
                                    "<p>" + url_ + 
                                    "<img src='" + url_ + "' alt='" + file.name + "'>" +
                                    "</p>"
                            });
                            dojo.byId("fileslist").appendChild(idNode);
                        });
                    });
                }, function (error) {
                    require(["dojo/query"], function(query) {
                       query("#fileslist").attr("innerHTML","Ooops... " + error);
                    });
                });
            }
            require(["dojo/query","dojo/domReady!"], function(query) {
                updateFiles();            
                dojo.connect(query("#imageForm")[0],"onsubmit",function(event) {
                    dojo.stop(event);
                    dojo.io.iframe.send({
                        form: "imageForm",
                        handleAs: "json"
                    });
                });
            });
        </script>
        </sec:authorize>
    </head>
    <body>
        <section>
            <sec:authorize access="hasRole('ROLE_ADMIN')">
            <form:form action="${imagesUpload}" enctype="multipart/form-data" id="imageForm" commandName="mongoStoredFile" name="imageForm" method="POST">
                <fieldset>
                    <p>
                        <label for="subject">File:</label>
                        <form:input path="file" type="file" id="file" 
                                    placeholder="File:" required="required" />
                    </p>
                    <p>
                        <input type="submit" id="formButton" value="Upload File" >
                    </p>
                </fieldset>
            </form:form>
            </sec:authorize>
        </section>
        <section>
            <div id="fileslist">
                
            </div>
        </section>
    </body>
</html>