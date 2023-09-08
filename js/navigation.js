// Global
let menuCont = document.getElementById('menu-content');
let genreCont = document.getElementById('genre-cont');
let categoriesCont = document.getElementById('categories-cont');

// Menu Side Bar
function showMenu(){
menuCont.classList.toggle('show-menu-content')

}
// Genre Show
function showGenre(){
genreCont.classList.toggle('show-genre-cont');
categoriesCont.classList.remove('show-categories-cont');
}

// Categories Show
function showCategories(){
categoriesCont.classList.toggle('show-categories-cont');
genreCont.classList.remove('show-genre-cont');
    }
