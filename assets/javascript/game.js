/* kenzie academy sports game assessment */
let teamOneBtn = document.querySelector("#teamone-shoot-button");
let teamTwoBtn = document.querySelector("#teamtwo-shoot-button");
console.log(teamOneBtn);
let rstBtn = document.querySelector("#reset-button");
let shotTakenTeamOne = document.getElementById("teamone-numshots");
let goalsTeamOne = document.getElementById("teamone-numgoals");
let teamTwoShotsTaken = document.getElementById("teamtwo-numshots");
let teamTwoGoals = document.getElementById("teamtwo-numgoals");
let nTeamOneGoalCount = 0;
let nTeamOneShotsTakenCount = 0;
let nTeamTwoGoalCount = 0;
let nTeamTwoShotsTakenCount = 0;
let nResetCount = 0;
let nRandom = 0;
let resetCount = document.getElementById("num-resets");
/* event listeners */
teamOneBtn.addEventListener("click", function(){
    nTeamOneShotsTakenCount++; 
    nRandom = Math.random();
    if ( nRandom <.5 ) {
        nTeamOneGoalCount++;
        goalsTeamOne.innerHTML = nTeamOneGoalCount;
    }
    shotTakenTeamOne.innerHTML = nTeamOneShotsTakenCount;
    console.log(shotTakenTeamOne);
   console.log(goalsTeamOne);
   console.log(nRandom);
   console.log(teamOneBtn);
   console.log(nTeamOneGoalCount);
});

teamTwoBtn.addEventListener("click", function(){
    nTeamTwoShotsTakenCount++; 
    nRandom = Math.random();
    if ( nRandom <.5 ) {
        nTeamTwoGoalCount++;
        teamTwoGoals.innerHTML = nTeamTwoGoalCount;
    }
    teamTwoShotsTaken.innerHTML = nTeamTwoShotsTakenCount;
    console.log(teamTwoShotsTaken);
   console.log(teamTwoGoals);
   console.log(nRandom);
   console.log(teamTwoBtn);
   console.log(nTeamTwoGoalCount);
});

rstBtn.addEventListener("click", function(){
  if (nTeamOneGoalCount > nTeamTwoGoalCount ){
    alert ("TeamOne has won Score " + nTeamOneGoalCount + " to " + nTeamTwoGoalCount);  
  }
  else if (nTeamTwoGoalCount > nTeamOneGoalCount){
    alert ("TeamTwo has won Score " + nTeamTwoGoalCount  + " to " + nTeamOneGoalCount);  

  }
  else {alert ("Draw")}

nResetCount++; 
resetCount.innerHTML = nResetCount;

nTeamOneGoalCount = 0;
nTeamOneShotsTakenCount = 0;
nTeamTwoShotsTakenCount = 0;
nTeamTwoGoalCount = 0;
teamTwoGoals.innerHTML = nTeamTwoGoalCount;
teamTwoShotsTaken.innerHTML = nTeamTwoShotsTakenCount;
goalsTeamOne.innerHTML = nTeamOneGoalCount;
shotTakenTeamOne.innerHTML = nTeamOneShotsTakenCount;

    

}
);