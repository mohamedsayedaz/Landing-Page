/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const my_sections = document.querySelectorAll("section");
let docFarg = document.createDocumentFragment();
for(let i=0;i<my_sections.length;i++){
    let nav_li = document.createElement("li");
    let nav_link = document.createElement("a");
    let link_txt = document.createTextNode(my_sections[i].getAttribute("data-nav"));
    nav_link.href = "#" + my_sections[i].id;
    nav_link.className = "nav-link";
    nav_link.appendChild(link_txt);
    nav_li.appendChild(nav_link);
    docFarg.appendChild(nav_li);
}
document.getElementById("navbar__list").appendChild(docFarg);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


