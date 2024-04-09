var audioPlayer = document.getElementById('audioPlayer');

var playPause = document.getElementById('play-pause');
playPause.src = "/static/play.png"

// Waiting for the end of a song
audioPlayer.addEventListener('ended', forward);

audioPlayer.addEventListener('start', function(){
    playPause.src = '/static/pause.png'
})

audioPlayer.addEventListener('ended', function(){
    playPause.src = '/static/play.png'
})

audioPlayer.addEventListener('pause', function(){
    playPause.src = '/static/play.png'
})

function updateSong(song){
    currentSong = song;
}

function forward(){
    console.log("Forward clicked")
    
    var playlist = document.getElementById('playlist');
    var itens = playlist.children;

    // Search for the current song on the playlist and updates it
    for(var i = 0; i < itens.length; i++){
        if(itens[i].innerHTML === currentSong && i !== (itens.length - 1)){
            next = i + 1;
            var musicSrc = `/static/${itens[next].innerHTML}.mp3`
            updateSong(itens[next].innerHTML);
            playSong(musicSrc);
            break;
        }
    }
}

function backward(){
    console.log("Backward clicked")

    // Search for the current song on the playlist and updates it
    if (audioPlayer.currentTime <= 3){
        var playlist = document.getElementById('playlist');
        var itens = playlist.children;

        for(var i = 0; i < itens.length; i++){
            if(itens[i].innerHTML === currentSong && i !== 0){
                next = i - 1;
                var musicSrc = `/static/${itens[next].innerHTML}.mp3`;
                updateSong(itens[next].innerHTML);
                playSong(musicSrc);
                break;
            }
        }
    }
    else{
        var musicSrc = `/static/${currentSong}.mp3`
        playSong(musicSrc)
    }
}

function clickOnTitle(item){
    var musicSrc = `/static/${item}.mp3`;
    updateSong(item)
    playSong(musicSrc);
};

function playSong(src){
    audioPlayer.src = src;
    audioPlayer.play(src);
    playPause.src = "static/pause.png"
    console.log("Now playing: " + src);
}