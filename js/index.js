'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gender: {},
    privat: false
};

let queshen1 = prompt('Один из последних просмотренных фильмов?', "");
let queshen2 = +prompt('На сколько цренете его?', "");
let queshen3 = prompt('Один из последних просмотренных фильмов?', "");
let queshen4 = +prompt('На сколько цренете его?', "");
personalMovieDB.movies[queshen1] = queshen2;
personalMovieDB.movies[queshen3] = queshen4;
console.log(personalMovieDB);