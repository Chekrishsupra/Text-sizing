
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,400);
canvas.position(560,150);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw() {
    background('#4d4949');
    textSize(difference);
    fill("#f00e0e");
    text('Chetan',50,350);
    document.getElementById("text_sides").innerHTML = "Font size of the text= " + difference + "pixels";
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results); 
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x:" + noseX + ",nose y:" + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left wrist x:" + leftWristX + ",Right wrist x:" + rightWristX + "and difference:" + difference);
    }
}