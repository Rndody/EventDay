// let menu;
// let menuIcon;
// let closeIcon;

$("#menuIcon").click(function () { 
   $("#menu").css("left","0");
    // e.preventDefault();
});


$("#closeIcon").click(function(){
    $("#menu").css("left","-25%");
});

$("#details h3").click(function(){
    $(this).next().slideToggle();
    $("#details q").not($(this).next()).slideUp()
})


let eventDate = new Date(2024, 0, 12, 0, 0);
let endTime = eventDate.getTime();

let dayBox = document.getElementById("days");
let hrBox = document.getElementById("hours");
let minBox = document.getElementById("minutes");
let secBox = document.getElementById("seconds");

  //!##################=================== CountDown for event date function ============###################

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    //!Function to format number if it is single digit
    let addZeroes = (num) => (num < 10 ? `0${num}` : num);
    //!If end date is before today date
    if (endTime < todayTime) {
      clearInterval(i);
      document.querySelector(
        ".countdown"
      ).innerHTML = `<h1>Countdown had expired!</h1>`;
    }
    //If end date is not before today date
    else {
      //Calculating remaining days, hrs,mins ,secs
      let daysLeft = Math.floor(remainingTime / oneDay);
      let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
      let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
      let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
      //Displaying Values

      dayBox.textContent = addZeroes(daysLeft);
      hrBox.textContent = addZeroes(hrsLeft);
      minBox.textContent = addZeroes(minsLeft);
      secBox.textContent = addZeroes(secsLeft);
    }
  }
  let i = setInterval(countdown, 1000);
  countdown();


  //!##################=================== Event for counting characters============###################

  $("textarea").keyup(function () { 
   let charLength=100-($(this).val().length);
if(charLength==0){
  $("#textAreaCounter").text("no")
}
else{
  $("#textAreaCounter").text(charLength)
}
  });

