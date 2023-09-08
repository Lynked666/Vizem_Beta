// Global
let menuCont = document.getElementById('menu-content');
let genreCont = document.getElementById('genre-cont');
let categoriesCont = document.getElementById('categories-cont');

// Menu Side Bar
function showMenu(){
menuCont.classList.toggle('show-menu-content')
categoriesCont.classList.remove('show-categories-cont');
genreCont.classList.remove('show-genre-cont');
}

// Show Genre
function showGenre(){
genreCont.classList.toggle('show-genre-cont');
categoriesCont.classList.remove('show-categories-cont');
}

// Show Categories
function showCategories(){
categoriesCont.classList.toggle('show-categories-cont');
genreCont.classList.remove('show-genre-cont');
    }
