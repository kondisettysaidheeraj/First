console.log("Game rules every correct answer you will get one point and every worng answer you lose one point---")
console.log();
var score=0;
var a=require('readline-sync');
var b=a.question("enter your name : ");
console.log("Welcome "+b);
var ans=a.question("Do you konw Dheeraj : ");
function easy(question, ans)
  {
      answer=a.question(question);
    if(answer.toUpperCase()===ans.toUpperCase())
      score=score+1;
    else
      score=score-1;

    
}

if(ans==="yes")
{
console.log("Game started --------");
easy("Dheeraj fovorite color : ", "white");
easy("Dheeraj fovorite Hero : ", "allu arjun");
easy("Dheeraj fovorite Movie : ", "pagal"); 
easy("Dheeraj Studied School : ", "hindu school"); 
easy("Dheeraj current work : ", "student"); 
easy("Dheeraj current location ","narasaraopet");
easy("Dheeraj current collage ","nec");
  
  

  console.log(b+" your score is : "+score);
}
else
{
  console.log("your score is "+score);
console.log("And you was terminated form the game  --------");
  
}