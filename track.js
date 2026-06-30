class Track {
  constructor(id,startX,startY,endX,endY,speedLimit=15) {
    this.id = id;
    this.start = {
      x = startX,
      y = startY,
    }
    this.end = {
      x = endX,
      y = endY,
    }
    this.speedLimit = speedLimit;
  }
}
