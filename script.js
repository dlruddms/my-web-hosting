
const score =parseInt(prompt("성적을 입력하세요"));

if(isNaN(score) || score <0){
	console.log("please write a real positive number");
}
else if (score>=90){
 console.log ("A");
}
else if(score>=80 && score<90){
	console.log("B");
}
else if(score>=70 && score <80){
	console.log("C");
}
else (score <70)
  {console.log("D")
}