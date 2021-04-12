var form = document.getElementById('form');
var pound = document.getElementById('num');
var grams = document.getElementById('Grams');
var KiloGrams = document.getElementById('KiloGrams');
var Ounces = document.getElementById('Ounces');



pound.addEventListener('keyup',convertGrams)
pound.addEventListener('keyup',convertKiloGrams)
pound.addEventListener('keyup',convertOunce)

pound.addEventListener('click',convertGrams)
pound.addEventListener('click',convertKiloGrams)
pound.addEventListener('click',convertOunce)



function convertGrams()
{
    var g = pound.value * 453.592;
    grams.innerHTML = "Grams:<br> "+g
    grams.style.color ="white"
    
    
}

function convertKiloGrams()
{
    var k = pound.value * 0.453592;
    KiloGrams.innerHTML = "Kg:<br> "+k
    KiloGrams.style.color ="white";

}

function convertOunce()
{
    var o = pound.value * 16;
    Ounces.innerHTML = "Ounces:<br> "+o
    Ounces.style.color ="white"
}

