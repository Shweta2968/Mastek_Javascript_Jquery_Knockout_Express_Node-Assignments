// Extenders=> required
ko.extenders.required =function(target,option){
    target.hasError=ko.observable();
    target.validationMessage=ko.observable();
    function validate(newValue){
        target.hasError(newValue?false:true);
        target.validationMessage(newValue?"":option||"This field is required");
    }
    validate(target());
    target.subscribe(validate)
    return target;
};

function ViewModel(){
    firstName=ko.observable();
    middleName=ko.observable();
    lastName=ko.observable();
    test1=ko.observable();
    test2=ko.observable();
    test3=ko.observable();
    selectedyear=ko.observable();
    // SSCYear=ko.observableArray(Year).extend({required:""});
  passingyear=ko.observableArray(['Select Year','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']);  
    // gender=ko.observable();
    MyDate=ko.observable();
    checkGender =  ko.observable()    
//    Year=ko.observable(Year).extend({required:"Please Select One"})
totalScore=ko.computed(function(){
       return (parseInt(test1())) + (parseInt(test2())) +  (parseInt(test3()));  
   },this);

   Grade=ko.computed(function(){
    return (parseInt(test1())) + (parseInt(test2())) +  (parseInt(test3()))/100*3  + "%";  
},this);


//    if(totalScore>10){
//     Grade=ko.computed(function(){
//   return (parseInt((test1()+test2()+test3())/3*100))

//     }) 
//    }
//    else{
//     Grade=ko.computed(function(){
//         return (parseInt("Grade:B"))
      
//           }) 
//    }
 

// function Grade(){
//     if(totalScore>150){
    
//     }
//     else{
//         submit.alert("Your Grade:B")
//     }
// }   

// if(totalScore>150){
//     onSubmit(alert("A"));
// }
// Grade=ko.computed(function(){
      
    //     Alert("A")
    // },this);
       
    
    
   }
  
// function formatCurrency(value){
//     return "$" + value.toFixed(2);

// }
const viewModel=new ViewModel();
ko.applyBindings(viewModel);


