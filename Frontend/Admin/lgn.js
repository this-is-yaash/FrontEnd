$(document).ready(function(){
  $("#button").click(function(){
    if($("#exampleInputEmail1").val() == "y@gmail.com" && $("#exampleInputPassword1").val() == "123"){
      window.location.href='emp_dashboard.html';
    }
    else{
      alert("error");
    }
  });
});