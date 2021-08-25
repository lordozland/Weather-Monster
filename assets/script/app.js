var rightText = $("#rightText");
var theSub = $("#theSubmit");

var now = moment().format('LT');
var latty;
var lonny;

console.log(now)

var key = `7a274d9b8710b60aed4aaa210b1e6dd1`



var latlonUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

// Submit Button
theSub.click(function (event) {
    event.preventDefault();
    console.log("here");

    localStorage.clear("cityName");


    var cityName = document.getElementById('cityName').value;
    localStorage.setItem("cityName", cityName)
    var cn1 = localStorage.getItem("cityName")
    console.log(cn1)


    var saveNew = {
        city: cn1
    };

    localStorage.setItem("saveNew", JSON.stringify(saveNew)); 

    var Als = JSON.parse(localStorage.getItem('saveNew'));
    var AlsUse = Als.city;

    console.log(AlsUse)

    var citySearchUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + AlsUse + '&appid=' + key
    console.log(citySearchUrl)
    fetch(citySearchUrl)
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                response.json().then(function (data) {
                    latty = data.coord.lat;
                    lonny = data.coord.lon;
                    callEm(latty, lonny);
                    return { lonny, latty };
                });
                
            };
        });
})

function callEm(latty, lonny) {
    if (lonny && latty) {
        const getEm = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latty + '&lon=' + lonny '&exclude=minutely,alerts&appid=' + key + '&units=imperial';
        fetch(getEm)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data)
                        return data;
                    })
            })

            
        }
    }
}

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

//  New Things





