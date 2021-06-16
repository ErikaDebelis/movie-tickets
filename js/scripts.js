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
  $("").submit(function(event){
    event.preventDefault();

  });
});