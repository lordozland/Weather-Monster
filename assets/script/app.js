var zipCode = document.getElementById('zipCode').text;
var city = document.getElementById('city');



$( "#theSubmit" ).click(function() {
    localStorage.setItem("zipz", zipCode)

    var zipz = localStorage.getItem("zipz")
    
    console.log(zipz);
});

$( "#buttOne" ).click(function() {
    console.log(city);
});

$( "#buttTwo" ).click(function() {
    console.log("lizard");
});

$( "#buttThree" ).click(function() {
    console.log("bass");
});

$( "#buttFour" ).click(function() {
    console.log("dog");
});

$( "#buttFive" ).click(function() {
    console.log("falcon");
});