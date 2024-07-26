$(document).ready(function () {
    //Active menu
    const url = window.location + '';
    const pathname = window.location.pathname;
    const home_url = url.split('/', 3)[2];
    const admin = url.split('/')[3];
    const base = url.split('/', 2)[0] + '//' + home_url + '/' + admin;
    const active_url = pathname.split('/')[2];
    const sidebar = $('.nav-sidebar');
    const active_link = active_url ? sidebar.find('a[href="' + base + '/' + active_url + '"]') : sidebar.find('a[href="' + base + '"]');
    const parent = active_link.parent().parent();
    active_link.addClass('active');
    if (parent.hasClass('nav-treeview')) {
        parent.prev().addClass('active');
        parent.parent().addClass('menu-open');
    }

    //Initialize Select2 Elements
    $('.select2').select2({
        theme: 'bootstrap4'
    })
});

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*
Dark Mode
 */

// Detect system dark mode
let systemDarkMode = window.matchMedia('(prefers-color-scheme)').media !== 'not all';
let userDarkModeActive = window.matchMedia("(prefers-color-scheme:dark)").matches;

let default_mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
let display_cookie = '';
const display_mode = document.getElementById('display-mode');
const display_mode_icon = display_mode.querySelector('i');

// Auto change dark/light mode if user change dark/light theme in your device
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
    const darkModeOn = e.matches;
    if(darkModeOn){
        setDarkMode();
    }else{
        setLightMode();
    }
});

if(getCookie('display_mode')){
    display_cookie = getCookie('display_mode');
}else {
    // Check if browser support dark mode and if user is using dark mode
    if(systemDarkMode && userDarkModeActive){
        toggleDisplayMode('dark');
    }else{
        toggleDisplayMode(default_mode);
    }
}

if(display_cookie === 'dark'){
    if(display_mode_icon.classList.contains('fa-moon')){
        if(!display_mode_icon.classList.contains('fa-sun')){
            display_mode_icon.classList.add('fa-sun');
        }
        display_mode_icon.classList.remove('fa-moon');
    }
    if(!document.body.classList.contains('dark-mode')){
        document.body.classList.add('dark-mode');
    }
}else{
    if(display_mode_icon.classList.contains('fa-sun')){
        if(!display_mode_icon.classList.contains('fa-moon')){
            display_mode_icon.classList.add('fa-moon');
        }
        display_mode_icon.classList.remove('fa-sun');
    }
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
    }
}

function toggleDisplayMode(forceMode){
    if(forceMode !== undefined){
        if(forceMode === 'light'){
            return setDarkMode();
        }
        if(forceMode === 'dark'){
            return setLightMode();
        }
    }else{
        if(display_cookie === 'light'){
            return setDarkMode();
        }
        if(display_cookie === 'dark'){
            return setLightMode();
        }
    }
}
function setLightMode()
{
    document.body.classList.toggle('dark-mode');
    setCookie('display_mode', 'light', 365);
    display_mode_icon.classList.remove('fa-sun');
    display_mode_icon.classList.add('fa-moon');
    display_cookie = 'light';
}
function setDarkMode()
{
    document.body.classList.toggle('dark-mode');
    setCookie('display_mode', 'dark', 365);
    display_mode_icon.classList.remove('fa-moon');
    display_mode_icon.classList.add('fa-sun');
    display_cookie = 'dark';
}
