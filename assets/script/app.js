$( "#theSubmit" ).click(function() {
    var zipCode = document.getElementById('zipCode').value;
    var cityName = document.getElementById('cityName').value;

    if (cityName != null) {
        localStorage.setItem("zipz", zipCode);
        var zipz = localStorage.getItem("zipz");
    } else {
        localStorage.setItem("zipz", zipCode);
        var zipz = localStorage.getItem("zipz");
    };

    
    console.log(zipz);
    console.log(cityName);
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