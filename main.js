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

const trackNodes = new Map();

trackNodes.set("N001", new TrackNode("N001", 25, 100));
trackNodes.set("N002", new TrackNode("N002", 175, 100));
trackNodes.set("N003", new TrackNode("N003", 275, 140));
trackNodes.set("N004", new TrackNode("N004", 525, 140));
trackNodes.set("N005", new TrackNode("N005", 625, 100));
trackNodes.set("N006", new TrackNode("N006", 775, 100));



const tracks = [];

tracks.push(new Track("T001",trackNodes.get("N001"),trackNodes.get("N002")));
tracks.push(new Track("T002",trackNodes.get("N002"),trackNodes.get("N003")));
tracks.push(new Track("T003",trackNodes.get("N003"),trackNodes.get("N004")));
tracks.push(new Track("T004",trackNodes.get("N004"),trackNodes.get("N005")));
tracks.push(new Track("T005",trackNodes.get("N005"),trackNodes.get("N006")));
tracks.push(new Track("T006",trackNodes.get("N002"),trackNodes.get("N005")));

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
