import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle((event) => {
  localStorage.setItem("videoplayer-current-time", event.seconds);
}, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
   }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
