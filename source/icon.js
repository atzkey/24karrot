import {week} from './weeklee';
const emptyCalendar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAQElEQVQoz2P4jwQWLVr0HwOgCbKcZWRkgINFi1C42AQZzzCQBlgOkqiB8dmzZyRpYCLRglENQ1UDy969e0nSAAAH9Dkwdj7YwgAAAABJRU5ErkJggg==';

export const drawIcon = () => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();

    canvas.width = 16;
    canvas.height = 16;

    img.onload = () => {
        ctx.drawImage(img, 0, 0);

        ctx.fillStyle = '#000000';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center'
        ctx.fillText(week(), 8, 13);

        browser.browserAction.setIcon({
            imageData: ctx.getImageData(0, 0, 16, 16)
        });
    }
    img.src = emptyCalendar;
}
