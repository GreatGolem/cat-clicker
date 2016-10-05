$(document).ready(function(){
  var model = {
    catlist:[
      {name:'cat1',url:'img/captain.jpg'},
      {name:'cat2',url:'img/captain-head.jpg'},
      {name:'cat3',url:'img/lying.jpg'},
      {name:'cat4',url:'img/undercover.jpg'},
    ],
    total:4,
    current:1,
    adminMode:false,
    init:function() {
      console.log(this);
      this.total = this.catlist.length;
      this.adminMode = false;
      for(i=0;i<this.total;i++) {
        this.catlist[i].count = 0;
      };
    }
  };

  var view = {
    init:function() {
      console.log('initialize view')
      total = octopus.getTotal();
      for(i=0;i<total;i++) {
        $('.cat-list').append('<li><button type="button" id="li'+i.toString()+'">'+octopus.getName(i)+'</button></li>')
      };
      octopus.setCurrent(0);
      octopus.setAdmin(false);
      this.render();
    },
    render:function() {
      console.log('render',model);
      //render cat-area first
      current = octopus.getCurrent();
      $('.cat-name').text(octopus.getName(current));
      $('.cat-img').attr('src',octopus.getURL(current));
      $('.cat-count').text(octopus.getCount(current));
      //render edit-area
      if(octopus.getAdmin()) {
        $('#edit-name').val(octopus.getName(current));
        $('#edit-url').val(octopus.getURL(current));
        $('#edit-count').val(octopus.getCount(current));
        $('.edit-area').show();
      } else {
        $('.edit-area').hide();
      };
    }
  };

  var octopus = {
    //addint event listeners to everything
    init:function() {
      total = model.total;
      for(i=0;i<total;i++) {
        $('#li'+i.toString()).bind('click',(function(_i){
          return function(){
            model.current = _i;
            view.render();
          }
        })(i))
      };
      $('.cat-img').click(function(){
        model.catlist[model.current].count++;
        view.render();
      });
      $('#admin-button').bind('click',function(){
        console.log('admin button clicked.');
        model.adminMode = true;
        view.render();
      })
      $('#cancel-button').bind('click',function(){
        model.adminMode = false;
        view.render();
      })
      $('#save-button').bind('click',function(){
        model.catlist[model.current].name = $('#edit-name').val();
        model.catlist[model.current].url = $('#edit-url').val();
        model.catlist[model.current].count = parseInt($('#edit-count').val());
        model.adminMode = false;
        console.log('save',$('#edit-name').text());
        view.render();
      })
    },
    getTotal:function() {
      return model.total;
    },
    getName:function(n) {
      return model.catlist[n].name;
    },
    setCurrent:function(n) {
      model.current = n;
    },
    getCurrent:function() {
      return model.current;
    },
    getURL:function(n) {
      return model.catlist[n].url;
    },
    getCount:function(n) {
      return model.catlist[n].count;
    },
    getAdmin:function() {
      return model.adminMode;
    },
    setAdmin:function(n) {
      model.adminMode = n;
    }
  };

  model.init();
  view.init();
  octopus.init();


  // var n = 5; //number of cats
  // var current = 0;
  // $('body').append('<ul class="cat-list"></ul>');
  // var cats = [];
  // for(i=0;i<n;i++) {
  //   cats.push({index:i,count:0});
  //   $('.cat-list').append('<li class="cat-button" id="' + i.toString() + '">cat' + i.toString() + '</li>');
  //   $('body').append('<div class="cat-container" id="c' + i.toString() + '" width="50%" ></div>');
  //   $('#c'+i.toString()).append('<h1>Captain</h1>');
  //   $('#c'+i.toString()).append('<img src="img/cat.jpg" alt="cat" class="cat" width=50%>');
  //   $('#c'+i.toString()).append('<h2 class="text"><span>You have clicked </span><span class="count">0</span><span> times.</span></h2>');
  // }
  //
  // var update = function(){
  //   for(i=0;i<n;i++) {
  //     if(i !== current) {
  //       $('#c'+i.toString()).hide();
  //     }
  //   }
  // }
  //
  // update();
  //
  // var text,count,countNumber;
  // $('.cat-button').click(function(e){
  //   current = parseInt($(e.target).get(0).id);
  //   $('#c'+current.toString()).show();
  //   update();
  // })
  // $('.cat').click(function(e){
  //   text = $(e.target).siblings('.text').get(0);
  //   count = text.childNodes[1].innerHTML;
  //   countNumber = parseInt(count);
  //   countNumber += 1;
  //   console.log('text',text);
  //   console.log('count',count);
  //   $(e.target).parent().find('.count').text(countNumber);
  // });
})
