/*

**truthy হবে ঃঃ
1. true
2. Any number (positive or negative ) will be truthy other than zero
3. Any string other than empty string
4. '0' , 'false'
5. {}
6. []

**falsy হবে ঃঃ 
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
6. 

*/


let x=[];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy')
}

//optional 
//check falsy

const y=null;
if(!y){
    console.log('value is falsy');
}

//check truthy

const z=' ';
if(!!z){
    console.log('value is truthy');
}