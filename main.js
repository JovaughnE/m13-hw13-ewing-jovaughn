document.cookie = "new_cookie=yes";

var icecreamButton = document.getElementById('icecream');
var pizzaButton = document.getElementById('pizza');
var tacoButton = document.getElementById('tacos');
var message = document.getElementById('cookie-message');

function icecreamCookie() {
  document.cookie = "like_icecream=yes";
};

function pizzaCookie() {
  document.cookie = "like_pizza=yes";
};

function tacoCookie() {
  document.cookie = "like_tacos=yes";
};

icecreamButton.addEventListener('click', icecreamCookie);
pizzaButton.addEventListener('click', pizzaCookie);
tacoButton.addEventListener('click', tacoCookie);

if (document.cookie.split(';').filter((item) => item.includes('like_icecream=yes')).length) {
  message.innerHTML = "I like icecream too!";
}

if (document.cookie.split(';').filter((item) => item.includes('like_pizza=yes')).length) {
  message.innerHTML = "I like pizza too!";
}

if (document.cookie.split(';').filter((item) => item.includes('like_tacos=yes')).length) {
  message.innerHTML = "I like tacos too!";
}
