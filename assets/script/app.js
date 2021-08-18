var document1 = document.getElementById("rightText");
var zipCode = document.getElementById('zipCode');
var cityName = document.getElementById('cityName');



// Submit Button


$( "#theSubmit" ).click(function(event) {
    event.preventDefault();

    localStorage.clear("zipz");
    localStorage.clear("citz");



    localStorage.setItem("zipz", zipCode);
    var zipz = localStorage.getItem("zipz");

    // localStorage.setItem("citz", cityName);
    // var citz = localStorage.getItem("citz");

    
    console.log(zipz);
    console.log(citz);


    //   API from https://stackoverflow.com/questions/54600060/how-to-call-rest-api-in-html/54600143

});

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


// API Stufflings

const userAction = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat={35.7418}&lon={78.7136}&appid={283b766352816900dd7bdc94dd0d4456}');
    const myJson = await response.json(); //extract JSON from the http response
    var action1 = document.createElement("DIV");
    var text1 = document.createTextNode(myJson);
    
    action1.appendChild(text1);
    document1.appendChild(action1);

  }





