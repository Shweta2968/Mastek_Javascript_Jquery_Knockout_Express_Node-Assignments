function ViewModel(){

    this.color=ko.observable("");

    this.colors=ko.observableArray(["Red","White"]);

    this.addColorToList=function(){

        console.log(this.color());

        this.colors.push(this.color());

    }

}



const viewModel=new ViewModel();

ko.applyBindings(viewModel);