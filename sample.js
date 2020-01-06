var count = $('*').length;
$("#button").click(function(){
    var string=$("#string").val();
    $.get("reverse.html", {input : string}, function(data){
        $("#feedback").html(data);
    });
});