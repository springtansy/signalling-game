class TrackNode {
  constructor(id,x,y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.connections = [];
  }
  connect(id,node,dir) {
    this.connections.push({id: id, node: node, dir: dir});
  }
}

class Track {
  constructor(id,nodeA,nodeB,speedLimit=15) {
    this.id = id;
    this.nodeA = nodeA;
    this.nodeB = nodeB;
    this.speedLimit = speedLimit;
    nodeA.connect(nodeB.id,nodeB,1);
    nodeB.connect(nodeA.id,nodeA,1);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.moveTo(this.nodeA.x,this.nodeA.y);
    ctx.lineTo(this.nodeB.x,this.nodeB.y);
    ctx.stroke();
  }
}
