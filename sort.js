document.getElementById('submit-btn').addEventListener('click', function() {
    const answers = ["GRYFFINDOR!!!", "RAVENCLAW!!!", "SLYTHERIN!!!", "HUFFLEPUFF!!!"];
    const ans = document.querySelectorAll('input[type="radio"]:checked');
    const randomIndex = Math.floor(Math.random() * 4);
    const randomString = answers[randomIndex];
    if (ans.length !== 7) {
        document.getElementById("result").innerHTML= "Please attempt all the questions";
    }
    else{
    document.getElementById("result").innerHTML= randomString;
        }
            })