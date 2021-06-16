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

function Ticket (ageId, cost) {
  this.age= ageId
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
    
  });
});