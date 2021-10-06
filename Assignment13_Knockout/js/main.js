const jsonViewModel = function(){

  personName = ko.observable();

    this.getJsonData = function(){       

          const xmlhttp = new XMLHttpRequest();

          xmlhttp.onload = function(){

           

          const person = JSON.parse(this.responseText);

          personName(person.firstName+" "+person.lastName);

        }

          xmlhttp.open("GET", "person.json");

          xmlhttp.send();

        

    }

}

const vm =  new jsonViewModel();

ko.applyBindings(vm);