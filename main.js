document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOMContentLoaded ran!");
    document.getElementById("addMovie").addEventListener("click", function() {
        console.log("addMovie Button clicked!");
        submitForm(); //this function also validates the function, defined in movie.js but called in main.js
    });

    document.getElementById("showMovies").addEventListener("click", function() {
        console.log("showMovies Button clicked!");
        console.log(movieArray);
        traverseArray();
        clearFields();
    });

    
});