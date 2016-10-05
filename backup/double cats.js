$(document).ready(function(){
  $('body').append('<div class="cat-container" id="c1" width="50%"></div>')
  $('body').append('<div class="cat-container" id="c2" width="50%"></div>')
  $('#c1').append('<h1>Captain</h1>')
  $('#c1').append('<img src="img/cat.jpg" alt="cat" class="cat" width=50%>');
  $('#c1').append('<h2 class="text"><span>You have clicked </span><span class="count">0</span><span> times.</span></h2>');
  $('#c2').append('<h1>Captain</h1>')
  $('#c2').append('<img src="img/cat.jpg" alt="cat" class="cat" width=50%>');
  $('#c2').append('<h2 class="text"><span>You have clicked </span><span class="count">0</span><span> times.</span></h2>');

  $('#c1').count = 0;
  $('#c2').count = 0;

  var text,count,countNumber;
  $('.cat').click(function(e){
    text = $(e.target).siblings('.text').get(0);
    count = text.childNodes[1].innerHTML;
    countNumber = parseInt(count);
    countNumber += 1;
    console.log('text',text);
    console.log('count',count);
    $(e.target).parent().find('.count').text(countNumber);
  });
})
