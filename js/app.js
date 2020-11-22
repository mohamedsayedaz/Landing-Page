//My Section Container
const my_sections = document.querySelectorAll("section");
let docFarg = document.createDocumentFragment();
//Generate The Links Of Navbar
for(let i=0;i<my_sections.length;i++){
    let nav_li = document.createElement("li");
    let nav_link = document.createElement("a");
    let link_txt = document.createTextNode(my_sections[i].getAttribute("data-nav"));
    nav_link.href = "#" + my_sections[i].id;
    nav_link.className = "nav-link";
    nav_link.appendChild(link_txt);
    nav_link.scrollIntoView({behavior: "smooth"});
    nav_li.appendChild(nav_link);
    docFarg.appendChild(nav_li);
}
document.getElementById("navbar__list").appendChild(docFarg);
