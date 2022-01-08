class Rain{
   constructor(x,y){
    this.x = x
    this.y = y
    var options ={
      friction: 0.1
    }
    this.rain = Bodies.circle(x,y,5,options)
 
   }



show(){
  ellipseMode(RADIUS)
  ellipse(this.rain.position.x,this.rain.position.y,5,5)
 
   }

update(){
  if(frameCount%30===0){
    Matter.Body.setPosition(this.rain, {x:random(0,400), y: random(0,400)})
  }
 }
}