//Get The All Section In The Landing Page
const my_sections = document.querySelectorAll("section");
//Create The Document Fragment
const docFarg = document.createDocumentFragment();

// build the nav
for(let i=0;i<my_sections.length;i++){
    //Create List Item
    let nav_li = document.createElement("li");
    //Create Link
    let nav_link = document.createElement("a");
    //Create The Text Of the Link
    let link_txt = document.createTextNode(my_sections[i].getAttribute("data-nav"));
    //Link Every Link With It's Section
    nav_link.href = "#" + my_sections[i].id;
    //Add nav-link Class To Each Link
    nav_link.classList.add("nav-link");
    //Add The caption of each link
    nav_link.appendChild(link_txt);
    //Add The Scroll Smooth Event To The Link
    nav_li.addEventListener("click",function(){
        my_sections[i].scrollIntoView();
    });
    //Add the link in the list item
    nav_li.appendChild(nav_link);
    //Add Nav-item class to the list item
    nav_li.classList.add("nav-item");
    //Add the whole element In Document Fragment(docFrag)
    docFarg.appendChild(nav_li);
}
document.getElementById("navbar__list").appendChild(docFarg);

// Add class 'active' to section when near top of viewport
let my_links = document.querySelectorAll("#navbar__list li a");
document.addEventListener("scroll",function(){
    //set your-active-class to the current section in viewport
    my_sections.forEach((section) => {
        let my_rect = section.getBoundingClientRect();
        //console.log(my_rect);
        if(my_rect.top <= 0 && my_rect.bottom < window.innerHeight){
            section.classList.add("your-active-class");
            set_active_link(section);
        }else{
            section.classList.remove("your-active-class");
        }
    }) 
    
});

//TODO: set active link class
function set_active_link(section){
    let my_links = document.querySelectorAll("a");
    let section_title = section.getAttribute("data-nav");
    //clear active_class from all links
    my_links.forEach((link)=>{
        if(link.textContent == section_title){
            link.classList.add("active_link");
        }else{
            link.classList.remove("active_link");
        }
    });
}