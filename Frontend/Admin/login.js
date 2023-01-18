function login() {
    if ($("#exampleInputEmail1").val() == "y@gmail.com" && $("#exampleInputPassword1").val() == "12345") {
        window.location.replace("emp_attendance.html");
    } else {
      alert("You are not a valid user");
    }
  }