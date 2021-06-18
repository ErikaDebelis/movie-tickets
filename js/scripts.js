// Utility Logic



// Business Logic
function Cinemagic() {
  this.tickets = {};
  this.currentId = 0;
}

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


//business logic for tickets
Cinemagic.prototype.addTicket = function (ticket) {
  ticket.id = this.assignTicketId();
  this.tickets[ticket.id] = ticket;
};

Cinemagic.prototype.assignTicketId = function () {
  this.currentId += 1;
  return this.currentId;
};
Cinemagic.prototype.findTicket = function (id) {
  if (this.tickets[id] != undefined) {
    return this.tickets[id];
  }
  return false;
};
Cinemagic.prototype.movieTicket = function () {
  return this.chosenTitle + " " + this.time + " " + this.age;
};


// UI Logic
let Cinemagic = new Cinemagic();
let movieTicket = $("ul#printedTicket");
let htmlForTicketInfo = "";
function displayTicketDetails(cinemagicTicketsOutput){
  Object.keys(cinemagicTicketsOutput.tickets).forEach(function (key) {
    const ticket = cinemagicTicketsOutput.findTicket(key);
    htmlForTicketInfo += "<ul id=" + ticket.output + ">" + ticket.chosenTitle + " " + ticket.time + ticket.age +"</ul>";
  });

  movieTicket.html(htmlForTicketInfo);
}

$("#show-ticket").hide();
$(".movie-title").hide();
$(".showtime").hide();
$(".age").hide();
$(".cost").hide();

// function showTicket(TicketId) {
//   const ticket = addressBook.findTicket(TicketId);
//   $("#show-ticket").show();
//   $(".movie-title").html(ticket.movieTitle);
//   $(".showtime").html(ticket.time);
//   $(".age").html(ticket.age);
//   $(".cost").html(Ticket.finalTicketCost);
//   $(".ticket").html(displayTicketDetails(cinemagic.tickets));
// }
// function attachTicketListeners() {
//   $("ul#ticket-output").on("click", "li", function () {
//     showTicket(this.id);
//     displayTicketDetails(cinemagic);
//   });
// }
$(document).ready(function() {
  // attachTicketListeners();
  $("button.btn-warning").click(function(event){
    event.preventDefault();

    const baseCost= 10;
    let finalTicketCost = 0; 
    let movieTitle = $("#film").val();
    let time = $("input:radio[name=show-time]:checked").val();
    let age = $("ageId").val();

    if (movieTitle === title1 && time === matinee && age === adult){
      finalTicketCost += baseCost -3;
    }else if (movieTitle === title1 && time === matinee && age === senior){
      finalTicketCost += baseCost -5;
    }else if (movieTitle === title1 && time === evening && age === adult){
      finalTicketCost += baseCost;
    }else if (movieTitle === title1 && time === evening && age === senior){
      finalTicketCost += baseCost -2;
    }else if (movieTitle === title2 && time === matinee && age === adult){
      finalTicketCost += baseCost +2;
    }else if (movieTitle === title2 && time === matinee && age === senior){
      finalTicketCost += baseCost;
    }else if (movieTitle === title2 && time === evening && age === adult){
      finalTicketCost = baseCost +5;
    }else if (movieTitle === title2 && time === evening && age === senior){
      finalTicketCost = baseCost +3;
  
    let newTickets = new Tickets(movieTitle, time, age, finalTicketCost);
    Cinemagic.addTicket(newTickets);
    displayTicketDetails(cinemagic);
    }
  });
});