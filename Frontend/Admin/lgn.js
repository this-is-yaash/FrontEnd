$(document).ready(function(){
  $("#button").click(function(){
    var myemail=$("#exampleInputEmail1").val();
    var mypass=$("#exampleInputPassword1").val();

    if(myemail == "y@gmail.com" && mypass == "123"){
      window.location.href='emp_dashboard.html';
    }
    else{
      alert("error");
    }
  });
});