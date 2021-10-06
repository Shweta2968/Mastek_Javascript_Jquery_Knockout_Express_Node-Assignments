$(document).ready(function(){

    const root=$("#root");
    
    root.append("<ul id='list'></ul>");
    
    $("#getJsonArray").click(function(){
    
        const xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onload = function () {
    
          const people = JSON.parse(this.responseText);
          const list=people.people;
    
          for(i in list ){
    
              $("#list").append("<li>"+list[i].firstName+" "+list[i].lastName+"</li>");
   }
}    
        xmlhttp.open("GET", "people.json");
    
        xmlhttp.send();
    
      })
    
    });