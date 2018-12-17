// Onclick function
$(document).ready(function () {

    // Firebase 
    var config = {
        apiKey: "AIzaSyDzGzchKOhvrUGs-l5vtvR7nHIbQJ6XSUg",
        authDomain: "employee-database-463d3.firebaseapp.com",
        databaseURL: "https://employee-database-463d3.firebaseio.com",
        projectId: "employee-database-463d3",
        storageBucket: "",
        messagingSenderId: "1052391213244"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    var name = "";
    var role = "";
    var start = "";
    var monthlyRate = "";

    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var start = $("#start-input").val().trim();
    var monthlyRate = $("#rate-input").val().trim();


    //Onclick Function

    $("#submit-button").on("click", function (event) {
        event.preventDefault();

        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        start = $("#start-input").val().trim();
        monthlyRate = $("#rate-input").val().trim();

        var newRow = $("<tr>").append(
            $("<td class = 'name-div'>").text(name),
            $("<td class = 'role-div'>").text(role),
            $("<td class = 'start-div'>").text(start),
            $("<td class = 'rate-div'>").text(monthlyRate),

        )
        console.log(name, role, start, monthlyRate);

        database.ref().push({
            name: name,
            role: role,
            start: start,
            monthlyRate: monthlyRate,
        })

        //Appending newRow to the table under the tbody as <tr>, including the <td>
        $(".table > tbody").append(newRow);


        localStorage.clear();

      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      localStorage.setItem("start", start);
      localStorage.setItem("monthly rate", monthlyRate);

    })

})