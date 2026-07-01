"use strict";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let lastTime = null;
const input = {};

document.addEventListener("keydown", (event) => {
    const key = event.key;
    input[key] = true;
});

document.addEventListener("keyup", (event) => {
    input[event.key.toLowerCase()] = false;
});

window.addEventListener("blur", () => {
    for (const key in input) {
        input[key] = false;
    }
});

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

const trackNodes = [];
trackNodes.push(new TrackNode("N001",100,100}));
trackNodes.push(new TrackNode("N002",250,100}));

const tracks = [];
tracks.push(new Track("T001","N001","N002"));

function update(dt) {
    
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const track of tracks) {
        track.draw(ctx);
    }
}

function gameLoop(timestamp) {
    if (lastTime === null) {
        lastTime = timestamp;
    }

    let dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    dt = Math.min(dt, 0.05);

    update(dt);
    draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
