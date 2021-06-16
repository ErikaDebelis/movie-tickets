// Utility Logic



// Business Logic
function Movie (title1, title2) {
  this.title1= title1
  this.title2= title2
}

function Time (film, matinee, evening) {
  this.chosenTitle= film 
  this.matinee= matinee
  this.evening= evening
}

function Age (showTime, adult, senior) {
  this.time= showTime
  this.adult= adult
  this.senior= senior
}

function Ticket (adult, senior, cost) {
  this.adult= adult
  this.senior= senior
  this.cost= cost
}







// UI Logic




$(document).ready(function() {
  $("button.btn-warning").click(function(event){
    event.preventDefault();


    const baseCost= 10;
    let finalTicketCost = 0 //unsure of value to list initially
    let movieTitle = $("#film").val();
    let time = $("input:radio[name=show-time]:checked").val();
    let age = $("ageId").val();

    if (movieTitle === title1) && (time === matinee) && age === adult){
      finalTicketCost = baseCost -3;
    }else if (movieTitle === title1) && (time === matinee) && age === senior){
      finalTicketCost = baseCost -5;
    }else if (movieTitle === title1) && (time === evening) && age === adult){
      finalTicketCost = baseCost;
    {else if (movieTitle === title1) && (time === evening) && age === senior){
      finalTicketCost = baseCost -2;
    }else if (movieTitle === title2) && (time === matinee) && age === adult){
      finalTicketCost = baseCost +2;
    }else if (movieTitle === title2) && (time === matinee) && age === senior){
      finalTicketCost = baseCost;
    }else if (movieTitle === title2) && (time === evening) && age === adult){
      finalTicketCost = baseCost +5;
    }else if (movieTitle === title2) && (time === evening) && age === senior){
      finalTicketCost = baseCost +3;
    

    }
  });
});