'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

// start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', "");
        let b = prompt('На сколько вы его оценете?', "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        }else {
            console.log('aror');
            i--;
        }   
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();

function showMeDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMeDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
