<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<c:url value="/" var="home" />
<c:url value="/blog/" var="blogUrl" />
<c:url value="/resources/" var="resources" />
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
                <li><a href="${blogUrl}" >Blog</a></li>                
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <section>
            <header>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </header>
            <p>
                Donec vel ipsum eget odio tincidunt gravida. Nam vel sodales lorem. 
                Duis imperdiet auctor quam, sit amet facilisis nisi egestas a. 
                Ut tempus, ipsum nec elementum molestie, odio urna mattis tellus, 
                vel adipiscing diam lorem non lacus. Etiam faucibus ligula neque, 
                in ultricies velit. Proin ac justo quis nunc lacinia bibendum id sit amet enim. 
                Aenean sed orci sit amet enim porttitor aliquet. Ut semper laoreet leo et congue. 
                Ut adipiscing lectus mattis lectus consequat a convallis purus ornare. 
                Sed vehicula, nulla eu tristique vestibulum, nibh eros egestas elit, 
                vitae cursus risus ipsum non arcu. Morbi pharetra nibh eros. 
                Aliquam quis nulla in lacus aliquet posuere quis at ligula. 
                Nullam eu iaculis ligula.
            </p>
        </section>
        <footer>
            <p>
                <small>Copyright to bajoneando</small>
            </p>
        </footer>
    </body>

</html>