const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}

if(pageName === "about.html"){
    document.querySelector(".about").classList.add("activeLink");
}

if(pageName === "contact.html"){
    document.querySelector(".contact1").classList.add("activeLink");
}



