/**
 * Created by jtrevag on 4/23/14.
 */
function controlMusic(){
    var song = document.getElementById("fightSong");
    song.muted = !(song.muted);

    if(song.muted){
        $('#audioImage').attr("src","style/img/nosound.png");

    }else{
        $('#audioImage').attr("src","style/img/sound.png");
    }
}
