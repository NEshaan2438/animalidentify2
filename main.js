function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i_o_3P-gN/model.json", modelReady);
}

function modelReady() {
    classifer.classify(gotResults);
}

function gotResults(error, results) {
    console.log("got results!");
}