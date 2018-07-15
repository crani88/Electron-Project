const fs = require("fs");
const mainWindow = document.getElementById("MainWindow");

const MAIN_MENU = {
    "home" : '<a onclick=changeContent("home") href="javascript:void(0);">Home</a>',
    "profile" : '<a onclick=changeContent("profile") href="javascript:void(0);">Profile</a>',
    "friends" : '<li><a onclick=changeContent("friends") href="javascript:void(0);">Friends</a>',
    "logout" : '<a onclick=changeContent("logout") href="javascript:void(0);">Logout</a>'
};

create_main_menu = function() {
    let user_image = document.createElement("img");
    user_image.src = './img/ranks/Gold/rank018.png';
    let link = document.getElementById("nav_menu");
    link.appendChild(user_image);

    Object.keys(MAIN_MENU).forEach(function(key) {
        let link = document.getElementById("nav_menu");
        let child = document.createElement("li");
        child.innerHTML = MAIN_MENU[key];
        child.id = key;
        link.appendChild(child);
    });
    mainWindow.innerHTML = fs.readFileSync('./app/html/login.html');

    /*
    let myNotification = new Notification('Superspelet', {
        body: 'Started new session'
      })
    */
}

changeContent = function(view) {
    console.log(view);
    switch(view) {
        case "home":
            mainWindow.innerHTML = fs.readFileSync('./app/html/welcome.html');
            break;
        case "profile":
            mainWindow.innerHTML = fs.readFileSync('./app/html/profile.html');
            break;
        case "friends":
            mainWindow.innerHTML = fs.readFileSync('./app/html/friends.html');
            break;
        case "logout":
            mainWindow.innerHTML = fs.readFileSync('./app/html/logout.html');
            //Electron.app.quit()
            break;
        default:
            mainWindow.innerHTML = fs.readFileSync('./app/html/welcome.html');
            break;
    }
}

create_main_menu();

/*
MenuItem(id, text, link)
*/