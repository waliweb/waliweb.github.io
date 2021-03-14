let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    const myHeading = document.querySelector('h1');
    if(mySrc === '../projects/TestProject/images/spotifylogo.png') {
        myImage.setAttribute('src','../projects/TestProject/images/applemusic.png');
        myHeading.textContent = 'Apple Music'
    } else {
        myImage.setAttribute('src','../projects/TestProject/images/spotifylogo.png')
        myHeading.textContent = 'Spotify'
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('please enter your name.')
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
     let storedName = localStorage.getItem('name');
     myHeading.textContent = 'Welcome ' + storedName
}
myButton.onclick = function(){
    setUserName();
}
