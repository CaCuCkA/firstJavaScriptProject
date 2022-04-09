"use srict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (this.count == '' || this.count == null ||
            isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You have watched a few films');

        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are common viewer');

        } else if (personalMovieDB.count > 30) {
            console.log('You are cinephile');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {

        let genre = prompt('Введите ваши любимые жанры через запятую:', "").toLowerCase();
        while (genre == '' || genre == null) {
            genre = prompt('Введите ваши любимые жанры через запятую:', "").toLowerCase();
        }

        personalMovieDB.genres = genre.split(", ").sort();

        personalMovieDB.genres.forEach(function (item, index) {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.private) {
            this.private = true;
        } else {
            this.private = false;
        }
    }

};