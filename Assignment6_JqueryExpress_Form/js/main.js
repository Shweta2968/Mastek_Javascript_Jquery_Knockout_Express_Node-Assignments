$(document).ready(function () {
   
   
    $("#submit").click(function () {
     
        var firstName = $("#fname").val();
        var lastName = $("#lname").val();
        if (firstName == "") {
            alert("please enter your first name");
            return false;
        }
        if (lastName == "") {
            alert("Please enter your last name");
            return false;
        }


    })
});



