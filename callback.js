//32-7 (Optional) Callback Function And Pass Different Functions

function greeting(functionName,name){
    functionName(name);

}

function getMorning(name){
    console.log("good morning ",name);
}
function getEvening(name){
    console.log('good evening ',name);
}

greeting(getMorning,'humayun');
greeting(getMorning,'juyel');
greeting(getEvening,'humayun');
greeting(getEvening,'juyel');


