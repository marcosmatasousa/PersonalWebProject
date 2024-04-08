var audioPlayer = document.getElementById('audioPlayer');

function updateSong(song){
    currentSong = song;
}

function forward(){
    console.log("Forward clicked")
    var playlist = document.getElementById('playlist');
    var itens = playlist.children;

    for(var i = 0; i < itens.length; i++){
        if(itens[i].innerHTML === currentSong && i !== (itens.length - 1)){
            next = i + 1;
            var musicSrc = "/static/" + itens[next].innerHTML + ".mp3";
            updateSong(itens[next].innerHTML);
            playSong(musicSrc);
            break;
        }
    }
}

function backward(){
    console.log("Backward clicked")
    var playlist = document.getElementById('playlist');
    var itens = playlist.children;

    for(var i = 0; i < itens.length; i++){
        if(itens[i].innerHTML === currentSong && i !== 0){
            next = i - 1;
            var musicSrc = "/static/" + itens[next].innerHTML + ".mp3";
            updateSong(itens[next].innerHTML);
            playSong(musicSrc);
            break;
        }
    }
}

function clickOnTitle(item){
    var musicSrc = "/static/" + item;
    updateSong(item)
    musicSrc = musicSrc + '.mp3'
    playSong(musicSrc);
};

function playSong(src){
    audioPlayer.src = src;
    audioPlayer.play(src);
    console.log("Now playing: " + src);
}