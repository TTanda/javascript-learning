var hotel = {
    name: "The Quay",
    totalRooms: 40,
    bookedRooms: 25,
    types: [
        "twin",
        "double",
        "suite"
    ],
    checkAvailability: function() {
        console.log ("Remaining available rooms: " +(this.totalRooms - this.bookedRooms));
    }
}
hotel.bookedRooms +=5; // Increased booked rooms to 30.
hotel.checkAvailability ();