$("#firstName").text("firstName");
$("#lastName").text("lastName");
$(document).ready(function(){
  $('#onSubmit').click(function(){
    const person={firstName:firstName.value,lastName:lastName.value}
    console.log(person);
    const jsoString=JSON.stringify(person);   
    $("#root").text("root")
    $("#root").text("The Json data is");
    const h3=document.createElement("h3");
    h3.id="h3"
    h3.innerHTML=jsoString;
    root.appendChild(h3)
     })
})

$(document).ready(function(){
  $('#onJSObject').click(function(){
    const h3=document.getElementById("h3");
    const jsonString=h3.innerText;
    console.log("The Javascript data is\n"+jsonString);
    const PERSON=JSON.parse(jsonString);
    firstName.$val=PERSON.firstName;
    lastName.$val=PERSON.lastName;
    h3.innerText="";
  })
})




