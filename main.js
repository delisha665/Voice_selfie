recognition=new window.webkitSpeechRecognition();
function listen() {
    recognition.start();
}
recognition.onresult=function(e){
    transcript=e.results[0][0].transcript;
    console.log(transcript);
document.getElementById("textbox").innerHTML=transcript.toLowerCase();
speak();
 }
function speak(){
    synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    console.log(speak_data);
    speak_object=new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_object);
} 