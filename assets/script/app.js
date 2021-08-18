var document1 = $("rightText");
var zipCode = $('#zipCode');
var cityName = $('cityName');
var theSub = $("#theSubmit");


var key = `7a274d9b8710b60aed4aaa210b1e6dd1`

// Submit Button
theSub.click(function (event) {
    event.preventDefault();
    console.log("here");

    localStorage.clear("A");

    var A = {
        zip: '12345',
        city: 'here',
        lon: 'long',
        lat: 'lat'
    }

    localStorage.setItem('A', A);

    var Als = localStorage.getItem("A");

    console.log(Als.zip)
    console.log(Als.city)
    console.log(Als.lon)
    console.log(Als.lat)
    




})

// .click(function(event) {
//     event.preventDefault();

//     localStorage.clear("zipz");
//     localStorage.clear("citz");



//     localStorage.setItem("zipz", zipCode);
//     var zipz = localStorage.getItem("zipz");

//     // localStorage.setItem("citz", cityName);
//     // var citz = localStorage.getItem("citz");

    
//     console.log(zipz);
//     console.log(citz);


//     //   API from https://stackoverflow.com/questions/54600060/how-to-call-rest-api-in-html/54600143

// });

$( "#buttOne" ).click(function() {
    console.log("duck");
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
    userAction();
    console.log("falcon");
});


// // API Stufflings

// const userAction = async () => {
//     const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat={35.7418}&lon={78.7136}&appid={283b766352816900dd7bdc94dd0d4456}');
//     const myJson = await response.json(); //extract JSON from the http response
//     var action1 = document.createElement("DIV");
//     var text1 = document.createTextNode(myJson);
    
//     action1.appendChild(text1);
//     document1.appendChild(action1);

// }





