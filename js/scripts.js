// Utility Logic



// Business Logic
function Cinemagic() {
  this.tickets = {};
  this.currentId = 0;
}

// function Movie (title1, title2) {
//   this.title1= title1
//   this.title2= title2
// }

// function Time (film, matinee, evening) {
//   this.chosenTitle= film 
//   this.matinee= matinee
//   this.evening= evening
// }

// function Age (showTime, adult, senior) {
//   this.time= showTime
//   this.adult= adult
//   this.senior= senior
// }
function ticket (film, showTime, age) {
  this.chosenTitle= film;
  this.time= showTime;
  this.age= age;
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
  this.cost = 8;
  if (this.chosenTitle === "title2") {
    this.cost += 5;
  }
  if (this.time === "matinee") {
    this.cost -= 3;
  }
  if (this.age === "senior") {
    this.age -= 2;
  }
};


// UI Logic
// let Cinemagic = new Cinemagic();
// let movieTicket = $("div#show-ticket");
// let htmlForTicketInfo = "";
// function displayTicketDetails(cinemagicTicketsOutput){
//   Object.keys(cinemagicTicketsOutput.tickets).forEach(function (key) {
//     const ticket = cinemagicTicketsOutput.findTicket(key);
//     htmlForTicketInfo += "<div id=" + show-ticket + ">" + ticket.chosenTitle + " " + ticket.time + ticket.age +"</div>";
//   });

//   movieTicket.html(htmlForTicketInfo);
// }

// $("#show-ticket").hide();
// $(".movie-title").hide();
// $(".showtime").hide();
// $(".age").hide();
// $(".cost").hide();

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
let film = new Film();

$(document).ready(function() {
  // attachTicketListeners();
  $(".btn-warning").submit(function(event){
    event.preventDefault();

//    const baseCost= 10;
//    let finalTicketCost = 0; 
    let movieTitle = $("#film").val();
    let time = $("input:radio[name=show-time]:checked").val();
    let age = $("#age").val();
    let newTickets = new Tickets(movieTitle, time, age, finalTicketCost);

    newTickets.ticketCost();
    film.addTicket(newTickets);
    $(".movie-title").text(movieTitle);
    $(".showtime").text(time);
    $(".age").text(age);
    $(".cost").text(newTicket.cost);
    // if (movieTitle === "title1" && time === "matinee" && age === "adult"){
    //   finalTicketCost += baseCost -3;
    // }else if (movieTitle === "title1" && time === "matinee" && age === "senior"){
    //   finalTicketCost += baseCost -5;
    // }else if (movieTitle === "title1" && time === "evening" && age === "adult"){
    //   finalTicketCost += baseCost;
    // }else if (movieTitle === "title1" && time === "evening" && age === "senior"){
    //   finalTicketCost += baseCost -2;
    // }else if (movieTitle === "title2" && time === "matinee" && age === "adult"){
    //   finalTicketCost += baseCost +2;
    // }else if (movieTitle === "title2" && time === "matinee" && age === "senior"){
    //   finalTicketCost += baseCost;
    // }else if (movieTitle === "title2" && time === "evening" && age === "adult"){
    //   finalTicketCost = baseCost +5;
    // }else if (movieTitle === "title2" && time === "evening" && age === "senior"){
    //   finalTicketCost = baseCost +3;
  

    // Cinemagic.addTicket(newTickets);
    // displayTicketDetails(cinemagic);
  });
});
