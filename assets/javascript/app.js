// Onclick function
$(document).ready(function () {

    // Firebase 
    var config = {
        apiKey: "AIzaSyB8F-_8bWGkvF2ChjENcqsQj9cO-dM2ozQ",
        authDomain: "hyperloop-schedule.firebaseapp.com",
        databaseURL: "https://hyperloop-schedule.firebaseio.com",
        projectId: "hyperloop-schedule",
        storageBucket: "",
        messagingSenderId: "974143213357"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    var name = "";
    var destination = "";
    var frequency = "";
    var nextArrival = "";

    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var nextArrival = $("#firstFreightTime-input").val().trim();

    var initialName = "test";


    //Get snapshot of initial data at initial load
    //First time page loads, or anything changes, this code will run

    // database.ref().on("value", function(snapshot){
    //     console.log(snapshot.val());

    //     //change the HTML to reflect initial value

    //     $("#name-input").text(initialName);

    // })

    function fetch(cb) {
        var trainData = database.ref();
        return trainData.once("value").then(function (snapshot) {
            cb(snapshot);
        })
    }



    fetch(function (data) {
        var newRow = $("<tr>").append(
            $("<td class = 'name-div'>").text(nameData),
            $("<td class = 'destination-div'>").text(destinationData),
            $("<td class = 'frequency-div'>").text(frequencyData),
            $("<td class = 'nextArrival-div'>").text(nextArrivalData))

        var trainData = (data.val());
        var keys = Object.keys(trainData);
        console.log(keys);

        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var destinationData = trainData[k].destination;
            var frequencyData = trainData[k].frequency;
            var nameData = trainData[k].name;
            var nextArrivalData = trainData[k].nextArrival;
            console.log(destinationData, frequencyData, nameData, nextArrivalData);

            var newRow = $("<tr>").append(
                $("<td class = 'name-div'>").text(nameData),
                $("<td class = 'destination-div'>").text(destinationData),
                $("<td class = 'frequency-div'>").text(frequencyData),
                $("<td class = 'nextArrival-div'>").text(nextArrivalData),
    
            )
            $(".table > tbody").append(newRow);


        }

        // var ref = database.ref('destination');
        // ref.on('value', gotData, errData);

        // function gotData(data) {
        //     console.log(data.val());
        // }

        // function errData(err) {
        //     console.log('Error!');
        //     console.log(err);
        // }
    });





    //Onclick Function

    $("#submit-button").on("click", function (event) {
        event.preventDefault();

        name = $("#name-input").val().trim();
        destination = $("#destination-input").val().trim();
        frequency = $("#frequency-input").val().trim();
        nextArrival = $("#firstFreightTime-input").val().trim();

        var newRow = $("<tr>").append(
            $("<td class = 'name-div'>").text(name),
            $("<td class = 'destination-div'>").text(destination),
            $("<td class = 'frequency-div'>").text(frequency),
            $("<td class = 'nextArrival-div'>").text(nextArrival),

        )
        console.log(name, destination, frequency, nextArrival);

        database.ref().push({
            name: name,
            destination: destination,
            frequency: frequency,
            nextArrival: nextArrival,
        })

        //Appending newRow to the table under the tbody as <tr>, including the <td>
        $(".table > tbody").append(newRow);



    })

})