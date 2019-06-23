var selectHotel = document.getElementById('selector');
var getName = document.getElementById('firstName');
var getLstName = document.getElementById('lastName');
var numberOfRooms = document.getElementById('roomsAmount');
var randomNum = Math.floor((Math.random() * 50) + 1);
var slideIndex = 0;

showSlides();

numberOfRooms.textContent = randomNum;

selectHotel.onchange = getHotelName;
getName.onchange = getFirstName;
getLstName.onchange = getLastName;

function showSlides(){
    var i;
    var slides = document.getElementsByClassName('imgs');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 7000);
}

function getHotelName(){
    var hotelName = selectHotel.value;
    document.getElementById('hotelName').textContent = hotelName;
}

function getFirstName(){
    var guestName = getName.value;
    document.getElementById('myGuest').textContent = guestName;
}

function getLastName(){
    var guestLstName = getLstName.value;
    document.getElementById('myGuestName').textContent = guestLstName;
}