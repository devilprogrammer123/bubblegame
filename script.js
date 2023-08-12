var timer = 60;
var score=0;
var hit=0;
function makebubble() {



    let clutter = "";
    for (let i = 1; i <= 230; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`
    }
    document.querySelector(".pbottom").innerHTML = clutter;
}
function runtimer() {
    var timerint = setInterval(function () {

        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else {
            document.querySelector(".pbottom").innerHTML=`<h1>Game Over</h1>`
            clearInterval(timerint);
        }

    }, 1000)
}

function getnewhit(){
     hit =Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=hit;
}

function scoreincr() {
    score+=10;
    document.querySelector(".scoreval").textContent=score;

}


document.querySelector(".pbottom").addEventListener("click",function(dets){

    var clicknum=Number(dets.target.textContent);
    if(hit==clicknum){
        scoreincr();
        makebubble();
        getnewhit();
    }
})


getnewhit();
runtimer();
makebubble();
