document.getElementById('submit-btn').addEventListener('click', function()
{
    const answers = ["LION!!!","CAT!!!","SWAN!!!","TIGER!!!","HIPPOGRIFF!!!","ELEPHANT!!!","OTTER!!!","ZEBRA!!!","GIRAFFE!!!","EAGLE!!!","HARE!!!","TOAD!!!","RAVEN","WOLF!!!","DRAGON!!!","DOE!!!","UNICORN!!!","EAGLE!!!","OWL!!!","DOG!!!","PHOENIX!!!","STAG!!!","GRIFFIN!!!","SPHINX!!!","PENGUIN!!!","HORSE!!!","JACK RUSSELL TERRIER!!!","KANGAROO!!!","PANDA!!!","MANTICORE!!!","LYNX!!!"];
    const ans = document.querySelectorAll('input[type="radio"]:checked');
    const randomIndex = Math.floor(Math.random() * 31);
    const randomString = answers[randomIndex];
    if (ans.length !== 7) {
        document.getElementById("result").innerHTML= "Please attempt all the questions";
    }
    else
    {
        document.getElementById("result").innerHTML= randomString;
    }
})