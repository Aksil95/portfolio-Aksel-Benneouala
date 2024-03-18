window.addEventListener("scroll", function(){
const header = document.querySelector("header");
header.classList.toggle('sticky', window.scrollY > 0);
});
 
//respNavBar
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")
 
menuBtn.addEventListener("click",() => {
menuBtn.classList.toggle("active");
navigation.classList.toggle("active");
});
 
navigationItems.forEach((navigationItem) => {
navigationItem.addEventListener("click", () => {
menuBtn.classList.remove("active");
navigation.classList.remove("active");
});
});
 
//scroll2top
const scrollBtn = document.querySelector(".scrollToTop-btn");
 
window.addEventListener("scroll", function(){
scrollBtn.classList.toggle("active", window.scrollY > 500);
});
 
//scroll2topOnClick
scrollBtn.addEventListener("click", () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});
 
//revealOnScroll
window.addEventListener("scroll", reveal);
 
function reveal(){
var reveals = document.querySelectorAll(".reveal");
 
for(var i = 0; i < reveals.length; i++){
var windowHeight = window.innerHeight;
var revealTop = reveals[i].getBoundingClientRect().top;
var revealPoint = 50;
 
if(revealTop < windowHeight - revealPoint){
reveals[i].classList.add("active");
}
}
}
function dhcp() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'dhcp.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'dhcp.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function rprt2stage() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'rprt2stage.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'rprt2stage.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function cv() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'cv.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'cv.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function synth() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'synth.xlsx';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'synth.xlsx'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function arpdns() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'arpdns.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'arpdns.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function mv() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'mv.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'mv.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function pxe() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'pxe.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'pxe.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function rprt2stagesdan2024() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'rprt2stagesdan2024.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'rprt2stagesdan2024.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function dhcp() {

    // Emplacement de ton fichier PDF
    var pdfURL = 'dhcp.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'dhcp.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function ameliopc(){
    // Emplacement de ton fichier PDF
    var pdfURL = 'ameliopc.pdf';
    
    // Créer un élément <a> pour déclencher le téléchargement
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'ameliopc.pdf'; // Nom du fichier à télécharger
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}