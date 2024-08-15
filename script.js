
var score = 0;
document.querySelector('.scorebox').textContent = score;
var hittingNumber2 = 0;

function makeBubble(){


    //making all the bubbles present of the screen
    var temp =""
    
    for(let i = 0 ; i<=269;i++){
            var randomNumber = 0
            randomNumber = Math.floor(Math.random()*10)

            //this is where we want to insert the bubbles 
            temp+= `<div class="bubble">${randomNumber}</div>`;
    }
    document.querySelector(".bubbles").innerHTML=temp
}

function runTimer(){
//creating the timer function 
    var timer =60
    //setting the timer value to 60
    var timerbox = document.querySelector('.timerbox');
        timerbox.textContent = timer;

        //setting interval to the timer function 
       const countDown = setInterval(()=>{
            if (timer<=0) {
                //breaking the interval if time is 
                clearInterval(countDown)
                timerbox.textContent = '0'
            }

            else{
                //showing the left time
                timerbox.textContent = timer;
                timer--;
            }
       },1000) 

}
    //generating the random number to hit
    function hittingNumberFunction(){
    hittingNumber = Math.floor(Math.random()*10)
    document.querySelector(".hitbox").textContent = hittingNumber;
    return hittingNumber;
    }

  
////the is score incrementer function
function scoreCounter(){
    score+=10;
    document.querySelector('.scorebox').textContent = score
}

//this is event bubbling 
document.querySelector('.bubbles').addEventListener("click",function(dets){
    //getting the number we clicked on 
    let temp = dets.target.textContent;
    let hittednumber = parseInt(temp,10)
   // console.log(hittednumber);

   //cheking if hitted number is equal to the given hitting number
    if (hittednumber == hittingNumber2) {
        console.log("true");
        //incrementing the score
        scoreCounter();
        makeBubble();

        //generationg the new randon hitting number
       hittingNumber2 = hittingNumberFunction()
       
      
    }
    
})


runTimer()

var hittingNumber2 = hittingNumberFunction()


makeBubble()