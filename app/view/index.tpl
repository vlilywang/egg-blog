<html>
  <head>
    <title>Egg Demo</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.css" rel="stylesheet">
  </head>
  <body class="container">
    <input class="form-control" type="text"><br />
    <button class="btn btn-success">上传到数据库</button>
    <button class="btn btn-success">删除</button>
    <button class="btn btn-success">查询对应</button>
    <button class="btn btn-success">更新对应</button>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
    <script>
      $("button:eq(0)").click(function(){
        var data= $("input").val();
        if(data){
          $.ajax({
          type:'get',
          url:'/add/'+data,
          success:function(data){
              if(data == 'success'){
                  alert('上传成功！');
              }
            }
          });
        }
      });

      $('button:eq(1)').on('click',function(){
        var data= $("input").val();
         if(data){
          $.ajax({
          type:'get',
          url:'/del/'+data,
          success:function(data){
              if(data == 'success'){
                  alert('删除成功！');
              }
            }
          });
        }
      })

      //reach
      $('button:eq(2)').on('click',function(){
        var data= $("input").val();
         if(data){
          $.ajax({
          type:'get',
          url:'/get/'+data,
          success:function(data){
              if(data == 'success'){
                  alert('查询成功！');
              }
            }
          });
        }
      })

      $('button:eq(3)').on('click',function(){
        var data= $("input").val();
         if(data){
          $.ajax({
          type:'get',
          url:'/update/'+data,
          success:function(data){
              if(data == 'success'){
                  alert('更新成功！');
              }
            }
          });
        }
      })
    </script>
  </body>
</html>