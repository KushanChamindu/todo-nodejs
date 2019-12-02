$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var timer=$('#demo-datetime-expanded');
      var todo = {item: item.val(),time:timer.val()};
      // console.log(timer.val());
      $.ajax({
        type: 'POST',  
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;
  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      var item=item.split('-');
      // console.log(item[item.length-1]);
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + parseInt(item[item.length-1]),
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
