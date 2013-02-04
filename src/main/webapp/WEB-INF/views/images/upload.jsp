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
        <title>Images</title>
        <script>
            function updateFiles() {
                require(["dojo/query", "dojo/dom-construct","dojo/_base/array","dojo/request/xhr","dojo/dom","dojo/dom-attr","dojo/json","dojo/dom-construct"],
                        function (query,domConstruct,array,xhr,dom,domAttr,json,construct) {
                    xhr.get("${pageContext.request.contextPath}/images/list/0",{headers: {"Content-Type": "application/json"}}).then(function(files) {
                        array.forEach(json.parse(files),function(file) {
                            var url_ = '${pageContext.request.contextPath}/images/download/' + file.id;
                            var idNode = construct.create("div",{
                                "id": file.id,
                                "class": '_image',
                                "innerHTML":
                                    "<p>" + url_ +
                                    "<img src='" + url_ + "' alt='" + file.name + "'>" +
                                    "</p>"
                            });
                            dom.byId("fileslist").appendChild(idNode);
                        });
                    }, function (error) {
                       domAttr.set(query("#fileslist"),"innerHTML","Ooops... " + error);
                    });
                });
            }
        </script>

        <script>

            require(["dojo/query","dojo/domReady!","dojo/on","dojo/_base/event","dojo/request/iframe"], function(query,ready,on,event,iframe) {
                updateFiles();
                on(query("#imageForm")[0],"submit",function(event_) {
                    event.stop(event_);
                    iframe("${imagesUpload}",{form: "imageForm",
                        handleAs: "json"
                    });
                });
            });
        </script>

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