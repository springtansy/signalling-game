class Track {
  constructor(id,start,end,speedLimit=15) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.speedLimit = speedLimit;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.moveTo(this.start.x,this.start.y);
    ctx.lineTo(this.end.x,this.end.y);
    ctx.stroke();
  }
}
