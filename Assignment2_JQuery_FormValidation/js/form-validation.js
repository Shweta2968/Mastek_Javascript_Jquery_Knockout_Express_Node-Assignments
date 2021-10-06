
const mailFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
$(function() {
    
    $("form[name='registration']").validate({
      rules: {
      
        firstName: "required",
        lastName: "required",
        email: {
          required: true,
          email: true
        },
        city:"required",
        gender:"required",
        mobile: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10
        }
      },
     
      messages: {
        firstName: " Please enter your firstname",
        lastName: " Please enter your lastname",
      
        email: " Please enter a valid email address",
        mobile:" Please Enter your Contact Number",
           
      },
       // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });