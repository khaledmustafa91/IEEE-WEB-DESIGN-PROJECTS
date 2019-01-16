//var spans= document.getElementsByTagName('li');
$(document).ready(function()
{
  $("#add").click(function(){

      var x = $('input[name=ADD]').val();
    $("ol").append("<li>" + "<div class='do'>" + "<input type='checkbox' class='checkbox-primary check'" +"<span class='x'>" + x +"</span>"
 + "<button id='remove' class='btn btn-danger bt' name='re'>Remove</button>" +"</div>" + "</li>");

  $('input[name=ADD]').val("");
  });
  $("ol").sortable({cursor:"move"});
  /* checkbox remove the li*/
  /*$(document).on('click' , '.check' , function () {
    $(this).parent().toggleClass('strike').fadeOut('slow');
  });*/
    $(document).on('click' , '#remove' , function () {
      $(this).parent().toggleClass('strike').fadeOut('slow');
      });



});
