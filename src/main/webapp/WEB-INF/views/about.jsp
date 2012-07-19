<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/resources/css/socialflair.css" var="socialflaircss" />
<html lang="en">
    <head>
        <title>About</title>
        <link href="${socialflaircss}" rel="stylesheet" type="text/css">
        <script>
            function truncateName(a){return a.length>28?a.substring(0,28)+"...":a}
            require(["dojo/query","dojo/domReady!"], function(query) {
                var xhrArgs = {
                    url : 'https://api.github.com/users/lnramirez',
                    handleAs: "json",
                    load: function(data) {return data;},
                    error: function(error) {return error;}
                }
                var deferred = dojo.xhrGet(xhrArgs);
                deferred.then(function(data) {
                    var followers = data.followers;
                    var public_repos = data.public_repos;
                    query("#githubFlair").attr("innerHTML","<a class='sfLink' href='" + data.html_url +"'><div class='sfTable sfGithub'><div class='sfRow'>"
                        +" <div class='sfCell1'>"
                        +"  <img class='sfProfilePic' src='" + data.avatar_url + "' width='48px' height='48px' />"
                        +" </div>"
                        +" <div class='sfCell2'>"
                        +"  <div class='sfHandle'>" + truncateName(data.name) + "</div>"
                        +"  <div class='sfFans'>"
                        +"	 <span class='public_repos' alt='Public Repositories' title='Public Repositories'>" + public_repos + "</span>"
                        +" 	 <span class='followers' alt='Followers' title='Followers'>" + followers + "</span>"
                        + ( data.hireable === true ? "<span class='hireable'>Hire Me!</span>" : '' ) 
                        +"  </div>"
                        +"</div>"
                        +"</div></div>​</a>");
                });
            });
        </script>
    </head>
    <body>
        <section>
            <div id='twitterFlair'></div>
            <div id='githubFlair'></div>
            <a href="http://stackoverflow.com/users/542413/luis-ramirez-monterosa">
                <img src="http://stackoverflow.com/users/flair/542413.png" width="208" height="58" alt="profile for Luis Ramirez-Monterosa at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Luis Ramirez-Monterosa at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
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
    </body>
</html>