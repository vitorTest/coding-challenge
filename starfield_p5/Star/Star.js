class Star{

  constructor(){
    this.widthSize = width/2;
    this.heightSize = height/2;
    
    this.x = random(-this.widthSize, this.widthSize);
    this.y = random(-this.heightSize, this.heightSize);
    this.z = random(width);
    
    this.previousZ = this.z;
  }
  
  update(){
    this.z = this.z - speed;
    if(this.z < 1){
      this.x = random(-this.widthSize, this.widthSize);
      this.y = random(-this.heightSize, this.heightSize);
      this.z = random(width);
      
      this.previousZ = this.z;
    }
  }
  
  show(){
    stroke(255);
    
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    
    let r = map(this.z, 0, width, 10, 0);
    
    let previousX = map(this.x / this.previousZ, 0, 1, 0, width);
    let previousY = map(this.y / this.previousZ, 0, 1, 0, height);
    
    this.previousZ = this.z;
    
    if(speed < 25){
      
      noStroke();
      ellipse(sx, sy, r, r);
      
    } else if(speed < 50){

      strokeWeight(3);
      line(previousX, previousY, sx, sy);
      
    } else if(speed < 80){
      
      strokeWeight(2);
      line(previousX, previousY, sx, sy);
      
    } else{
      
      strokeWeight(1);
      line(previousX, previousY, sx, sy);
    }

  }
  
}
