var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event) {
    console.log(event);
 var content=event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML=content; 
 if(content=="take my selfie"){
     speak();

 }  
}
var cam=document.getElementById("camera");
function speak() {
    var synth=window.speechSynthesis;
var speak_data="taking your selfie in 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(cam);
setTimeout(function(){
take_selfie();
save_selfie();    
},5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
png_quality:90
});
function take_selfie(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'">';

});
}
function save_selfie(){
var anchor=document.getElementById("imglink");
var image=document.getElementById("picture").src;
anchor.href=image;
anchor.click();
}