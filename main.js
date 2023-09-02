function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mI95_HIu4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){

    if(error){
        console.error(error)
    } else {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

    

    img=document.getElementById("animal_image");

    if(results[0].label == "Class 2")
    {
        img.src='Dog.png';
    }else if(results[0].label == "Class 3")
    {
        img.src='Cat.png';
    }else if(results[0].label == "Class 4")
    {
        img.src='Cow.png';
    }else  if(results[0].label == "Class 5"){
        img.src='Lion.png';
    }

}
}