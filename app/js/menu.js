const MAIN_MENU = {
    "home" : "<a href='#home'>Home</a>",
    "profile" : "<a href='#profile'>Profile</a>",
    "friends" : "<li><a href='#friends'>Friends</a>",
    "logout" : "<a href='#logout'>Logout</a>"
};

create_main_menu = function() {
    let user_image = document.createElement("img");
    let link = document.getElementById("nav_menu");
    link.appendChild(user_image);

    Object.keys(MAIN_MENU).forEach(function(key) {
        let link = document.getElementById("nav_menu");
        let child = document.createElement("li");
        child.innerHTML = MAIN_MENU[key];
        child.id = key;
        link.appendChild(child);
    });
}
create_main_menu();

/*
MenuItem(id, text, link)
*/