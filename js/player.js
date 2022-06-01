class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

var jbox = new Jukebox();
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

// BIND ALBUMS TO DROP DOWN MENU
let albumDropDown = document.getElementById('albumsDropDown');
for(let album of jbox.albums){
    albumDropDown.innerHTML += `<option value='${album.artist} : ${album.title}'>${album.artist} : ${album.title}</option>`;
}

// GET SELECTED VALUE FROM DROPDOWN AND PLAY THAT ALBUM
let playAlbum = document.getElementById('play');
playAlbum.addEventListener('click', (e) => {
    let dropDownOption = document.getElementById('albumsDropDown');
    let value = dropDownOption.options[dropDownOption.selectedIndex].value;
    console.log(value);

});

// album1.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album3.play();

// SHOW FAVORITE ALBUM
let showFav = document.getElementById('showFav');
showFav.addEventListener('click', (e) => 
{ 
    let fav = document.getElementById('favoriteAlbum');
    fav.innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`;
    console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);
});

