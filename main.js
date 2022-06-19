status="";
video="";
object=[];
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        cos.detect(video,gotResults);
         for(i=0; i<=object.length;i++){
            document.getElementById("status").innerHTML="Status:Objects Detected";
            document.getElementById("no").innerHTML="Number of Objects:"+objects.length;
            
            fill("red");
            stroke("red");
            percentage=floor(object[i].confidence*100);
            text(objects[i].label + " "+percentage+"%",object,objects[i].x+15,objects[i].y+15);
            nofill();
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
         }
    }

}
function start(){
    cos=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelloaded(){
    console.log("Model Loaded");
    status="true";
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    object=results;
    
}