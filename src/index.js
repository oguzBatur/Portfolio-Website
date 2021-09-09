const navbar = document.getElementById('nav-container');
const list = document.getElementsByTagName('li')[0];
const logo = document.getElementById('logo');
const logoText = document.getElementsByTagName('h2')[0];
window.onscroll = () =>{
    
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.style.height = '50px';
        logo.style.width = '50px';
        logoText.style.fontSize = '1em'
    }
    else{
        navbar.style.height = '100px';
        logo.style.width = '100px';
        logoText.style.fontSize = '1.5em'

    }
    
}


console.log(navbar);