var Links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};
var Body = {
  setBGColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor : function(color){
    document.querySelector('body').style.color = color;
  }
}


function bodySetColor(color){
  document.querySelector('body').style.color = color;
}

function bodySetBGColor(color){
  document.querySelector('body').style.backgroundColor = color;
}

function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    //bodySetBGColor('black')
    Body.setBGColor('black');
    //bodySetColor('white')
    Body.setColor('white');
    self.value = 'day';
    //linkSetColor('powderblue')
    Links.setColor('powderblue');

  } else {
    //bodySetBGColor('white')
    Body.setBGColor('white');
    //bodySetColor('black')
    Body.setColor('black');
    self.value = 'night';
    //linkSetColor('blue')
    Links.setColor('blue');
  }
}
