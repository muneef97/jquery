$(window).bind('beforeunload', function(){
  var c = confirm("leaving??");
  if(c){
    return true;
  }
  else{
  return false
  }
});