$(document).ready(function(){  


$("#jsonbtn").click(function(){
    const firstName=$("#firstName").val();
    const lastName=$("#lastName").val();
    console.log(firstName);
    const person={firstName:firstName,lastName:lastName};
    console.log(person);
    const jsoString=JSON.stringify(person);
    const root =$("#root");
    root.html("The JSON Data is ");
    root.append("<h3 id='h3'</h3>");  
    const h3 = $("#h3");
    h3.html(jsoString);  
    $("#firstName").val("");
    $("#lastName").val("");
});
$("#jsbtn").click(function(){
    const h3=$("#h3");
    const jsonString=h3.text();
    console.log(jsonString);
    const PERSON=JSON.parse(jsonString);
    firstName.value=PERSON.firstName;
    lastName.value=PERSON.lastName;
    h3.text("");
});
});