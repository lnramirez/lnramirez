<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/resources/css/socialflair.css" var="socialflaircss" />
<spring:url value="/resources" var="res" />
<html lang="en">
    <head>
        <title>About</title>
        <link href="${socialflaircss}" rel="stylesheet" type="text/css">
        <script src="http://fb.me/react-0.8.0.js"></script>
        <%--<script>
            function truncateName(a){return a.length>28?a.substring(0,28)+"...":a}
            var some;
            require(["dojo/query","dojo/domReady!","dojo/io/script","dojo/json","dojo/dom-attr"], function(query,ready,script,json,domAttr) {
                script.get({
                    url: 'http://api.twitter.com/1/followers/ids.json?screen_name=luisnramirez&cursor=-1',
                    callbackParamName: "callback"
                }).then(function(_data) {
                    var followers = _data.ids.length;
                    script.get({
                        url: 'http://api.twitter.com/1/friends/ids.json?screen_name=luisnramirez&cursor=-1',
                        callbackParamName: "callback"
                    }).then(function(data) {
                        var following = data.ids.length;
                        var handler = 'luisnramirez';
                        domAttr.set(query('#twitterFlair')[0],"innerHTML",
                             "<a class='sfLink' href='http://twitter.com/#!/" + handler +"'><div class='sfTable sfTwitter'><div class='sfRow'>"
                            +" <div class='sfCell1'>"
                            +"  <img class='sfProfilePic' src='https://api.twitter.com/1/users/profile_image?screen_name=" + handler + "&size=normal' width='48px' height='48px' />"
                            +" </div>"
                            +" <div class='sfCell2'>"
                            +"  <div class='sfHandle'>" + truncateName(handler) + "</div>"
                            +"  <div class='sfFans'>"
                            +"	 <span class='following' alt='Following' title='Following'>" + following + "</span>"
                            +" 	 <span class='followers' alt='Followers' title='Followers'>" + followers + "</span>"
                            +"  </div>"
                            +"</div>"
                            +"</div></div>​</a>"
                        );
                    }).then(function() {
                        query("a.sfLink").forEach(function(node_) {
                            domAttr.set(node_,"target","_BLANK");
                        });
                    })
                });
            });
        </script>--%>
    </head>
    <body>
        <section>            
            <div id='twitterFlair'></div>
            <div id='githubFlair'></div>
            <a href="http://stackoverflow.com/users/542413/luis-ramirez-monterosa" class="sfLink">
                <img src="http://stackoverflow.com/users/flair/542413.png" width="208" height="58" 
                     alt="profile for Luis Ramirez-Monterosa at Stack Overflow, Q&amp;A for professional and enthusiast programmers" 
                     title="profile for Luis Ramirez-Monterosa at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
            </a>
        </section>
        <section>
            <article>
                <header>
                    <h1>Bajoneando meaning</h1>
                </header>
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
        <script src="${res}/js/out/goog/base.js" type="text/javascript"></script>
        <script src="${res}/js/bajoneando.js" type="text/javascript"></script>
        <script type="text/javascript">goog.require("bajoneando.flairs");</script>
    </body>
</html>