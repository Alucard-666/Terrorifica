window.addEventListener('DOMContentLoaded', () => {

    const audio_file = document.getElementById('audio_file')

    audio_file.onchange = function() {
        var files = this.files;
        var file = URL.createObjectURL(files[0]);
        audio_player.src = file;
        audio_player.play();
    };

    /******/
    //     video_file.onchange = function() {
    //         var files = this.files;
    //         var file = URL.createObjectURL(files[0]);
    //         video_player.src = file;
    //         video_player.play();
    //     };
})