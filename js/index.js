function calculateRelation(){
  var personOne=document.getElementsByClassName("person1")[0].value;
  var personTwo=document.getElementsByClassName("person2")[0].value;
  var uniqueValues= new Set();
  var str="flames";
  for(var i=0;i<personOne.length;++i){
    if(personOne.charAt(i)===' '){
      continue;
    }
    uniqueValues.add(personOne.charAt(i));
  }
  console.log(uniqueValues.size);
  for(var i=0;i<personTwo.length;++i){
      if(personTwo.charAt(i)===' '){
        continue;
      }
    uniqueValues.add(personTwo.charAt(i));
  }
  console.log(uniqueValues.size);
  var n=uniqueValues.size;
  var temp="";
  while(str.length!==1){
    console.log(str);
    var tmpLen=n%str.length;
    if(tmpLen!==0){
      temp= str.substr(tmpLen)+str.substr(0,tmpLen-1);
    }
    else{
      temp=str.substr(0,str.length-1);
    }
    str=temp;
  }
  console.log(str);
  if(str.charAt(0)==='f'){
    document.querySelector("h1.result-image").innerHTML="Friends";
  }
  else if(str.charAt(0)==='l'){
    document.querySelector("h1.result-image").innerHTML="Love";
  }
  else if(str.charAt(0)==='a'){
    document.querySelector("h1.result-image").innerHTML="Affection";
  }
  else if(str.charAt(0)==='m'){
    document.querySelector("h1.result-image").innerHTML="Marriage";
  }
  else if(str.charAt(0)==='e'){
    document.querySelector("h1.result-image").innerHTML="Enemies";
  }
  else{
    document.querySelector("h1.result-image").innerHTML="Siblings";
  }
}
