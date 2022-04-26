var PLAY = 1;
var END = 0;
let timer = 30;
//let timer2 = 5;
var gameState = PLAY;
var button1;
function preload(){
    Dirt1 = loadImage("Dirt.jpg");
    target = loadAnimation("Project 999-0.png", "Project 999-1.png","Project 999-2.png",
    "Project 999-3.png","Project 999-4.png","Project 999-5.png", "Project 999-6.png","Project 999-7.png",
    "Project 999-8.png","Project 999-9.png");
    target1 = loadAnimation("Project 999-3.png","Project 999-4.png","Project 999-5.png", "Project 999-6.png","Project 999-7.png");
    Play = loadImage("Play Button.png");
    StartAni = loadAnimation("PressStart-0.png","PressStart-1.png", "PressStart-2.png", "PressStart-3.png","PressStart-4.png", "PressStart-5.png");
    backgroundv11 = loadImage("backgroundv1.jpg");
    restart12 = loadImage("Restart.png");
    rainbow1 = loadImage("Rain.png");
    click = loadImage("Click.png");
    click2 = loadImage("Click2.png");

}

function setup(){
    createCanvas(1000,700);
    a = random(0, 1000);
    b = random(0, 480);
    n = 1000;
    training = createSprite(a, b, 10,10);
    training.visible = false;
    training.addAnimation("targeting", target);
    training.scale = 0.1;
    training.shapeColor = "white";
    y = circle(30,30,20);
    score = 0;
    Start = createSprite(500, 350, 25,25);
    Start.addAnimation("Animation", StartAni);
    Start.scale = 0.4;
    Start.shapeColor = "white";
    Start1 = createSprite(500, 450, 20,20);
    Start1.addImage(Play);
    Start1.scale = 0.04;
    Timerz = 0;
    ScoreCounter = 0;
    Yax = 480;
    backgroundv1 = createSprite(500, 350, 1000, 700);
    backgroundv1.addImage(backgroundv11);
    button1 = createSprite(500, 500, 10, 10);
    button1.scale = 0.25;
    button1.addImage(restart12);
    cursor1 = createSprite(10,600, 10,10);
    cursor1.addImage(rainbow1);
    cursor1.scale = 0.05;
    autroch1 = createSprite(152, 530, 10,10);
    autroch1.addAnimation("goingout", target1);
    autroch1.scale = 0.2;
    autroch1.rotation = -3;
    autroch2 = createSprite(848, 530, 10,10);
    autroch2.addAnimation("goingout", target1);
    autroch2.scale = 0.2;
    autroch2.rotation = -3;

    option1 = createSprite(91, 625, 10,10);
    option1.addImage(click);
    option1.scale = 0.15;

    option2 = createSprite(143, 625, 10,10);
    option2.addImage(click2);
    option2.scale = 0.25;
    optionset = 0;
}

function draw(){
    background(Dirt1);
    if(gameState === PLAY){
        if(mousePressedOver(option1)){
            cursor1.visible = false;
        }
        if(mousePressedOver(option2)){
            cursor1.visible = true;
        }
        autroch1.visible = false;
        autroch2.visible = false;
        backgroundv1.visible = false;
        button1.x = 2000;
        cursor1.x = mouseX;
        //cursor1.visible = true;
        if(mousePressedOver(Start1)){
            training.x = 500;
            training.y = 400;
            training.visible = true;
            Timerz = Timerz+1;
            Start.visible = false;
            Start.x = 2000;
            Start1.visible = false;
            Start1.x = 2000;
            option1.x = 2000;
            option2.x = 2000;
        }
        if(mousePressedOver(training)){
            training.x = random(20, 980);
            training.y = random(60,480);
            training.rotation = n;
            n = n -50;
            score = score+1;
        }
        if(Timerz == 1){
            //stroke("blue");
            //strokeWeight(3);
            fill("white");
            textSize(16);
            text(timer, 876, 46);
            if (frameCount % 30 == 0 && timer > 0) { 
                timer --;
            }
        }
         
        if (timer == 0) {
            timer = 30;
            //if (frameCount % 180 === 0) { 
                gameState = END;
            //}
        }
    }else if(gameState === END){
        background(backgroundv11);
        reset();
        text("Press R to Restart again OR Click the button!", 500,285);

        button1.x = 500;
        if(keyDown("R") || mousePressedOver(button1)){
            gameState = PLAY;
            Start.visible = true;
            Start.x = 500;
            Start1.visible = true;
            Start1.x = 500;
            score = 0;
            option1.x = 91;
            option2.x = 143;
        }
    }
    
    
    fill("white");
    textSize(10);
    text("X: "+mouseX, 100,80);
    text("Y: "+mouseY, 100,100);
    drawSprites();
    fill("white");
    circle(mouseX, mouseY, 10);
}



function reset(){
    fill("black");
    //stroke("White");
    //strokeWeight(3);
    autroch1.visible = true;
    autroch2.visible = true;
    mathz = score/30;
    textAlign(CENTER, CENTER);
    textFont("Pixel Rand");
    stroke("blue");
    textSize(60);
    text("# of Targets hit: "+score, 500,130);
    textSize(30);
    stroke("yellow")
    if(score>30){
        text("   You Clicked "+mathz+"x faster than the timer", 480, 220);
    }else if(score<30){
        text("You Clicked "+mathz+"x slower than the timer", 480, 331);
    }else{
        text("You Clicked the same speed at the timer", 480, 331);
    }
    Timerz = 0;
    training.visible = false;
    training.x = 2000;
    cursor1.visible = false;
    
}