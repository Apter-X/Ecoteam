document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var inputs = document.getElementById("form").getElementsByTagName("input");
    var minor, major, pron = 0;
    var fever, cough, throat, stiffness, diarrhea = new Boolean(false)
    var result = '';

    for (var i = 0; 1 < inputs.length; i++) {
        if(inputs[i].value == "oui"){
            result = ""
        }
    }

    document.getElementById("msg").innerHTML(result);
})