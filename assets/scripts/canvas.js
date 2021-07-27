//canvas
let example = document.getElementById("example"),
    ctx = example.getContext('2d'),
    Axys_x = 0,
    point = 0,
    point_next = 0,
    Axys_y = 150;

//=====================================
console.log(array_for_canvas)
ctx.strokeStyle = "yellow";
for (let i = 0; i < array_for_canvas.length; i++) {
    if (array_for_canvas[i] > 100)
        array_for_canvas[i] = 60;
    else if (array_for_canvas[i] < -100)
        array_for_canvas[i] = -60;
    point = Axys_y - (array_for_canvas[i]);
    point_next = Axys_y - (array_for_canvas[i + 1]);
    ctx.beginPath();
    ctx.moveTo(25 + (i * 25), point);
    ctx.lineTo(25 + ((i + 1) * 25), point_next);
    ctx.stroke()
    ctx.closePath();
}
//=====================================

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        ctx.strokeStyle = "white";
        ctx.strokeRect(10 + i * 32, 10 + j * 32, 32, 32);
    }
}
point = 0;
point_next = 0;
//=====================================
ctx.strokeStyle = "red";
canvas_end[arr_for_canvas4.length] = 0; //расширим массив
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
//=====================================