Gibberish.init();
var a = new Gibberish.Synth({ attack:44, decay:44100 }).connect();
 
a.waveform = "Triangle"; 


keyDesc.click( function() {
	a.note(880); 
}); 