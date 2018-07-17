<html>
  <head>
    <title>Egg Demo</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.css" rel="stylesheet">
  </head>
  <body class="container">
  <h2>user list page</h2>
  <ul class="news-view view">
      {% for item in list %}
        <li class="item">
         {{ item.name }}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>