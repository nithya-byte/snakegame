class car
{
    constructor(y,weight,speed,color)
    {
     this.car=createSprite(50,y,50,50);
     this.car.shapeColor=color;
     this.car.velocityX=speed;
     this.weight=weight;
     this.speed=speed;
    }
   
    bounceoff(wall,car)
    {
      console.log(car);  
        if(wall.x-this.car.x<this.car.width/2+wall.width/2 )
                       {
                           
                var deformation=Math.round((0.5*this.weight*this.speed*this.speed)/22500);
              console.log(deformation);
                if(deformation==181)
               {
                this.car.velocityX=0;
                this.car.shapeColor="blue";
               }
               else
               {
                this.car.velocityX=0;
                   this.car.shapeColor="yellow";
               }
            }
    }

}