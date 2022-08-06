function calculateRelation(){
  var personOne=document.getElementsByClassName("person1")[0].value.toLowerCase();
  var personTwo=document.getElementsByClassName("person2")[0].value.toLowerCase();
  var str="flames";
  personOne=personOne.replaceAll(" ","");
  personTwo=personTwo.replaceAll(" ","");
  for (var i=0;i<personOne.length;i++){
    for(var j=0;j<personTwo.length;j++){
      if(personOne.charAt(i)===personTwo.charAt(j)){
        personOne=personOne.substring(0,i)+'*'+personOne.substring(i+1);
        personTwo=personTwo.substring(0,i)+'*'+personTwo.substring(i+1);
      }
    }
  }
  var n=0;
  for(var i=0;i<personOne.length;++i){
    if(personOne.charAt(i)!=='*'){
      n++;
    }
  }
  for(var i=0;i<personTwo.length;++i){
    if(personTwo.charAt(i)!=='*'){
      n++;
    }
  }
  if(n==1){
    document.querySelector("h1.result-image").innerHTML="Siblings";
    return;
  }
  if(n==0){
    alert("Please enter different Names");
    return;
  }
  var temp="";
  while(str.length!==1){
    var tmpLen=n%str.length;
    if(tmpLen!==0){
      temp= str.substr(tmpLen)+str.substr(0,tmpLen-1);
    }
    else{
      temp=str.substr(0,str.length-1);
    }
    str=temp;
  }
  if(str.charAt(0)==='f'){
    document.querySelector("h1.result-text").innerHTML="Friends";
  }
  else if(str.charAt(0)==='l'){
    document.querySelector("h1.result-text").innerHTML="Love";
  }
  else if(str.charAt(0)==='a'){
    document.querySelector("h1.result-text").innerHTML="Affection";
  }
  else if(str.charAt(0)==='m'){
    document.querySelector("h1.result-text").innerHTML="Marriage";
  }
  else if(str.charAt(0)==='e'){
    document.querySelector("h1.result-text").innerHTML="Enemies";
  }
  else{
    document.querySelector("h1.result-text").innerHTML="Siblings";
  }
}
