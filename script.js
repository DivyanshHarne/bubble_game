let hitrn = 0;

makeBubble=()=>{
    let clutter = "";

for(let i =1; i<=90; i++){
    hitrn = Math.floor(Math.random()*10)

    clutter += `<div class='bubble'>${hitrn}</div>`;
}
document.querySelector('#pbtm').innerHTML = clutter;
}
var timer = 60;
runTimer = ()=>{
    let timerInterval = setInterval(()=>{
        if(timer>0){
            timer--,
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Gamer Over! Score: ${score}</h1>`
        }
    }, 1000)
}
newHit=()=>{
    hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
var score = 0;
incrementScore = ()=>{
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}


makeBubble();
runTimer();
newHit();

document.querySelector("#pbtm").addEventListener("click",(dets)=>{
 let selectedNumber = Number(dets.target.textContent);

if(selectedNumber === hitrn){
    incrementScore();
    makeBubble();
    newHit();
}
})

