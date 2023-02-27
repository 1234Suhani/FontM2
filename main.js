function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    canvas.position(800,100);

    video=createCapture(VIDEO);
    video.size(600,500);
    video.position(90,100)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FFEBCD');
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
   if(results.length>0){
    console.log(results);}
}