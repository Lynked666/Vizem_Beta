let moviePop1 = document.getElementById('movie1');
let moviePop2 = document.getElementById('movie2');
let moviePop3 = document.getElementById('movie3');
let moviePop4 = document.getElementById('movie4');
let moviePop5 = document.getElementById('movie5');
let moviePop6 = document.getElementById('movie6');
let moviePop7 = document.getElementById('movie7');
let moviePop8 = document.getElementById('movie8');


function closePopup(){
    moviePop1.classList.remove('show-movie');
    // moviePop2.classList.remove('show-movie');
    // moviePop3.classList.remove('show-movie');
    // moviePop4.classList.remove('show-movie');
    // moviePop5.classList.remove('show-movie');
    // moviePop6.classList.remove('show-movie');
    // moviePop7.classList.remove('show-movie');
    // moviePop8.classList.remove('show-movie');
}


function movie1(){
    moviePop1.classList.add('show-movie');
}
function movie2(){
    moviePop2.classList.add('show-movie');
}
function movie3(){
    moviePop3.classList.add('show-movie');

}
function movie4(){
    moviePop4.classList.add('show-movie');
}
function movie5(){
    moviePop5.classList.add('show-movie');
}
function movie6(){
    moviePop6.classList.add('show-movie');
}
function movie7(){
    moviePop7.classList.add('show-movie');
}
function movie8(){
    moviePop8.classList.add('show-movie');
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        moviePop1.classList.remove('show-movie');
        moviePop2.classList.remove('show-movie');
        moviePop3.classList.remove('show-movie');
        moviePop4.classList.remove('show-movie');
        moviePop5.classList.remove('show-movie');
        moviePop6.classList.remove('show-movie');
        moviePop7.classList.remove('show-movie');
        moviePop8.classList.remove('show-movie');
    }
});
