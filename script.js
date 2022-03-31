"use srict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};


for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('You have watched a few films');

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are common viewer');

} else if (personalMovieDB.count > 30) {
    console.log('You are cinephile');
} else {
    console.log('Error');
}

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


console.log(personalMovieDB);