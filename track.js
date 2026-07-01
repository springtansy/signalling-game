class TrackNode {
  constructor(id,x,y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
}

class Track {
  constructor(id,startNode,endNode,speedLimit=15) {
    this.id = id;
    this.startNode = startNode;
    this.endNode = endNode;
    this.speedLimit = speedLimit;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.moveTo(this.startNode.x,this.startNode.y);
    ctx.lineTo(this.endNode.x,this.endNode.y);
    ctx.stroke();
  }
}
