(function(e,n){
  "use strict";
  var t = function(){ 
      var t=document.getElementsByTagName('html')[0].clientWidth;
      return t?void(n.documentElement.style.fontSize=20*t/640+"px"):!1
  };
  t()
  e.addEventListener("resize",t,!1)
  e.addEventListener("load",t,!1)
})(window,document)