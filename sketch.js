var car, wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80);

  speed = random(55, 200);
  weight = random(400, 1500);
}

function draw() {
  background(0);  

  car.velocityX = speed;

  if(isTouching(car, wall)){
    car.velocityX = 0;

    if(0.5 * weight * speed * speed / 22500 < 100){
      car.shapeColor = "green"
    }

    else if(0.5 * weight * speed * speed / 22500 > 100 && 0.5 * weight * speed * speed / 22500 <= 180){
      car.shapeColor = "yellow"
    }

    else if(0.5 * weight * speed * speed / 22500 > 180){
      car.shapeColor = "red"
    }
  }

  drawSprites();
}

function isTouching(object1, object2){
   if(object1.y - object2.y < object1.height / 2 + object2.height / 2 &&
      object2.y - object1.y < object1.height / 2 + object2.height / 2 &&
      object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
      object2.x - object1.x < object1.width / 2 + object2.width / 2){
     return true;
   }

   else{
     return false;
   }
}