// ------------------------------
// CHANGEMENT DE DIV (PLAN, I, II, III, IV)
// ------------------------------

// Différentes div à changer
const pDiv = document.getElementById('plan');
const div1 = document.getElementById('I');
const div2 = document.getElementById('II');
const div3 = document.getElementById('III');
const div4 = document.getElementById('IV');

const divs = [pDiv, div1, div2, div3, div4];

// Index de la div actuelle
let currentDivIndex = 0;

// Fonction pour afficher une div
function showDiv(index) {
    divs.forEach(div => {
        div.style.display = 'none';
    });

    divs[index].style.display = 'block';
}

// Suivant
function showNextDiv() {
    currentDivIndex = (currentDivIndex + 1) % divs.length;
    showDiv(currentDivIndex);
}

// Précédent
function showPrevDiv() {
    currentDivIndex = (currentDivIndex - 1 + divs.length) % divs.length;
    showDiv(currentDivIndex);
}

// Afficher la première div au chargement
showDiv(currentDivIndex);


// ------------------------------
// CHANGEMENT DE PAGE (ACCUEIL -> DEV -> CONCLUSION)
// ------------------------------

// Les pages
const pageAccueil = document.getElementById('intro');
const pageDev = document.getElementById('dev');
const pageConclusion = document.getElementById('cln');
const pageSavoir = document.getElementById('savoir')

// Tableau des pages
const pages = [pageAccueil, pageDev, pageConclusion, pageSavoir];

// Index de page
let currentPageIndex = 0;

// Fonction pour afficher une page
function showPage(index) {
    pages.forEach(page => {
        page.style.display = 'none';
    });

    pages[index].style.display = 'block';
}

// Navigation manuelle
function goToAccueil() {
    currentPageIndex = 0;
    showPage(0);
}

function goToDev() {
    currentPageIndex = 1;
    showPage(1);
}

function goToConclusion() {
    currentPageIndex = 2;
    showPage(2);
}

function goToSavoir() {
    currentPageIndex = 2;
    showPage(3);
}

// Afficher la première page au chargement
showPage(currentPageIndex);