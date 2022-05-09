var movie = function(mName, mRating) {
    this.name = mName;
    this.rating = parseInt(mRating);

    this.isValidData = function(){
        console.log("isValidData function ran!");
        console.log(this.rating);
        if ((this.name != "") && !(isNaN(this.rating)) ) return true;
        else return false;
    }

    this.getAll = function(){
        console.log("getAll 1 was called!");
        return this.name + " with a rating of: " + this.rating;
    }
};


movieArray = [];

function submitForm(){
    console.log("submit form was called!");
    let tName = document.getElementById("movieName").value;
    let tRating = document.getElementById("movieRating");
    let tValue = tRating.options[tRating.selectedIndex].value;
    let tMovie = new movie(tName, tValue);
    if (tMovie.isValidData()){
        console.log("isValidData for specific movie called");
        movieArray.push(tMovie);
        // document.getElementById("errorMessage").textContent = ("");
    }    else alert("Can't leave blank fields!");
    // else document.getElementById("errorMessage").textContent = ("Can't leave blank fields!");
    console.log(movieArray);
}

function clearFields(){
    document.getElementById("movieName").value = "";
    document.getElementById("movieRating").value = "";
}



function traverseArray(){
    console.log("traverseArray got called!");
    movieArray.sort(function(a, b){return b.rating - a.rating});
    let output = "";
    for (i = 0; i < movieArray.length; i++) {
        // if((document.getElementById("Movie").value == MovieArray[i].name) &&{
        // }        // if ((document.getElementById("movieName") !== "") && (document.getElementById("movieRating") !== "")){
        //     output = output + movieArray[i].name + " with a rating of " + movieArray[i].rating;
        // }
        output +=  "<li>" + movieArray[i].getAll() + "</li>";
        console.log("getAll2 was called!");
    }    document.getElementById("listMovies").innerHTML = output;
}