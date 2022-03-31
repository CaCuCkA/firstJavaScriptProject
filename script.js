"use srict";

let numberOfFilms;

start(); // asking question

const personalMovieDB = {   
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

//rememberMyFilms(); // remember what film do you watched 

//detectPersonalLevel(); // creating a level of you watching progress

showMyDB(personalMovieDB.private); // checking your private status

writeYourGenres();  // create an array of your favourite genres



// // let i = 0;

// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }
// }

// // let j = 0;

// do {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         j++;
//     }
// } while (j < 2);




function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You have watched a few films');

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are common viewer');

    } else if (personalMovieDB.count > 30) {
        console.log('You are cinephile');
    } else {
        console.log('Error');
    }
}

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Your favourite genre numbered ${i}`);

        personalMovieDB.genres.push(genre);
    }
}