//DOCUMENT OBJECT MODEL

//ways to select id
const view1 = document.getElementById('view1'); //this is part of html -
// it is old way to select id

console.log(view1);

//more prefered way to get the id
const view2 = document.querySelector('#view2'); //here we have to use #

console.log(view2);

//changing the proprty from JS for CSS

view1.style.display = 'flex';
view2.style.display = 'none';

//to selects views by class

const views = document.getElementsByClassName('view');
console.log(views);

//to list all view class
const sameViews = document.querySelectorAll('.view'); //here we have to use .
console.log(sameViews); // similar to views

const divs = view1.querySelectorAll('div'); //selecting all divs inside view1
console.log(divs);

const sameDivs = view1.getElementsByTagName('div'); //similar to above line
console.log(sameDivs);

//selecting even divs inside view1
const evenDivs = view1.querySelectorAll('div:nth-of-type(2n)');
console.log(evenDivs);

//changing background color of even divs
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = 'lightblue';
    evenDivs[i].style.width = '200px';
    evenDivs[i].style.height = '200px';
}

const navText = document.querySelector('nav h1'); //selecting h1 inside nav
console.log(navText);

navText.textContent = 'Javascript DOM Manipulation'; //changing text of h1

//changing style of navText
navText.style.color = 'darkgreen';

const navbar = document.querySelector('nav'); //selecting nav
console.log(navbar);

navbar.innerHTML = `<h1>Hello!</h1> <p>Welcome to the site</p>`; //changing inner html of nav

console.log(navbar);

navbar.style.justifyContent = 'Space-between'; //changing style of nav

console.log(evenDivs[0].parentElement); //getting text content of first even div

console.log(evenDivs[0].parentElement.children); //getting children of parent element of first even div

console.log(evenDivs[0].parentElement.childNodes); //getting child nodes of parent element of first even div

console.log(evenDivs[0].parentElement.hasChildNodes()); //checking if parent element has child nodes

console.log(evenDivs[0].parentElement.firstChild); //getting first child of parent element

console.log(evenDivs[0].parentElement.lastChild); //getting last child of parent element
console.log(evenDivs[0].parentElement.firstElementChild); //getting first element child of parent element

console.log(evenDivs[0].parentElement.lastElementChild); //getting last element child of parent element
console.log(evenDivs[0].nextSibling); //getting next sibling of first even div

//adding and removing

view1.style.display = 'none';
view2.style.display = 'flex';
view2.style.flexDirection = 'row';
view2.style.flexWrap = 'wrap';
view2.style.margin = '10px';
//to toggle between view1 and view2

//removing

while (view2.lastChild) {
    view2.lastChild.remove();
}

//adding

const createDiv = (parent, iter) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = iter;
};
