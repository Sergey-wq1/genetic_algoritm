import {
    draw,
    draw_red,
    draw_yellow
} from './canvas.js';

function get_schedule(canvas_end, array_for_canvas) {
    draw("white");
    draw_red(canvas_end);
    draw_yellow(array_for_canvas);
}

export default get_schedule;