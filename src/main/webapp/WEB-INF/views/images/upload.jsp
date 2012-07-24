<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<c:url value="/images/upload" var="imagesUpload" />
<html lang="en">
    <head>
        <script>
            dojo.require("dojo.io.iframe");
            require(["dojo/query","dojo/domReady!"], function(query) {
                dojo.connect(query("#imageForm")[0],"onsubmit",function(event) {
                    dojo.stop(event);
                    dojo.io.iframe.send({
                        form: "imageForm",
                        handleAs: "json"
                    });
                });
            });
        </script>
    </head>
    <body>
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
    </body>
</html>