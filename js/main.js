var elForm = document.querySelector('.js-form');
var elInp = document.querySelector('.js-inp');
var elSelect = document.querySelector('.js-select');
var elBtn = document.querySelector('.js-btn');
var elResult = document.querySelector('.js-result');

var UZS_TO_USD = 11225;
var UZS_TO_RUBL = 182;
var UZS_TO_EURO = 11630;

elForm.addEventListener('submit', function(evt) {
   evt.preventDefault();
   


   var elMoney = elInp.value;
   var elUsd = elInp.value / UZS_TO_USD;
   var elRubl = elInp.value / UZS_TO_RUBL;
   var elEuro = elInp.value / UZS_TO_EURO;


   if (elSelect.value == 'USD') {
      elResult.textContent = `${elUsd.toFixed(3)} USD`;
   }else if (elSelect.value == 'RUBL') {
    elResult.textContent = `${elRubl.toFixed(3)} RUBL`;
 }else if (elSelect.value == 'EURO') {
      elResult.textContent = `${elEuro.toFixed(3)} EURO`;
   }else {
      elResult.textContent = `Iltimos valyuta tanlang`;
   }
})