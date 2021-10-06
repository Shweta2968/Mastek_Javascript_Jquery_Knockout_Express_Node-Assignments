function MyViewModel() {
    fname = ko.observable("");
    lname = ko.observable("");


    self.onSubmit = function () {
        const firstName = fname();
        const lastName = lname();
        console.log(firstName);
        const person = { firstName: firstName, lastName: lastName };
        console.log(person);
        const jsoString = JSON.stringify(person);
        const root = $("#root");
        root.html("The JSON Data is ");
        root.append("<h3 id='h3'</h3>");
        const h3 = $("#h3");
        h3.html(jsoString);
        fname("");
        lname("");
    }
    self.onJSObject = function () {
        const h3 = $("#h3");
        const jsonString = h3.text();
        console.log(jsonString);
        const PERSON = JSON.parse(jsonString);
        fname(PERSON.firstName);
        lname(PERSON.lastName);
        h3.text("");
    }
}

const vm = new MyViewModel();
ko.applyBindings(vm);