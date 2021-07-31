//canvas
let example = document.getElementById("example"),
    ctx = example.getContext('2d'),
    point = 0,
    point_next = 0,
    Axys_y = 150;

const drawer = {
    yellow: (array) => {
        ctx.strokeStyle = "yellow";
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 100)
                array[i] = 60;
            else if (array[i] < -100)
                array[i] = -60;
            point = Axys_y - (array[i]);
            point_next = Axys_y - (array[i + 1]);
            ctx.beginPath();
            ctx.moveTo(25 + (i * 25), point);
            ctx.lineTo(25 + ((i + 1) * 25), point_next);
            ctx.stroke()
            ctx.closePath();
        }
    },
    red: (canvas_end) => {
        point = 0;
        point_next = 0;
        ctx.strokeStyle = "red";
        for (let i = 0; i < 6; i++) {
            if (canvas_end[i] > 100)
                canvas_end[i] = 60;
            else if (canvas_end[i] < -100)
                canvas_end[i] = -60;
            point = Axys_y - (canvas_end[i]);
            point_next = Axys_y - (canvas_end[i + 1]);
            ctx.beginPath();
            ctx.moveTo(170 + (i * 25), point);
            ctx.lineTo(170 + ((i + 1) * 25), point_next);
            ctx.stroke()
            ctx.closePath();
        }
    },
    draw: (color) => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                ctx.strokeStyle = color;
                ctx.strokeRect(10 + i * 32, 10 + j * 32, 32, 32);
            }
        }
    },
}

export const draw = drawer.draw;
export const draw_red = drawer.red;
export const draw_yellow = drawer.yellow;