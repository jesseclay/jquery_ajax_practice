$(document).ready(function(){
  $('#get_color').on('click', function(e) {
      e.preventDefault();
      $.ajax({
        url: '/color',
        method: 'post'
      })
      .done(function(response) {
        $('#color_me li:nth-child(response.cell)').css("background", response.color);
      });

  });
});












      
      // $.post(this.action, data, function(data) {
      //   $("#color_me").after('<p>This is working!!</p>');
      // });