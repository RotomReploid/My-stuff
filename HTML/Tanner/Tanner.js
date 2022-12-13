    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function say(speak, delay) {

        setTimeout(()=>{

            document.querySelector("body > p.ratingtext").innerHTML = speak;

        }
        , delay)

    }

    //variable defining

    function pleasework() {

        console.log(
        Tannersaid = 0,
        pogSaid = 0,
        secret = 0,
        exp = 0,
        x = 0,
        Jaydensaid = 0,
        //arrays

        ratingphrases = ['Interesting name!', 'Neat name!', 'Hmm...'])
    }

    //functions

    function ricketyroll() {
        window.open("no.jpeg");
        say('what did I tell you');
    }

    function pogAll() {
        document.querySelector("body > div.title > h3").innerHTML = "Pog"
        document.querySelector("body > div.title > h1").innerHTML = "POG POG"
        document.querySelector("body > div.title > p > span > strong").innerText = "Pog pog pog pog pog pog pog pog!"
        document.querySelector("body > div.title > p > sub").innerHTML = "(pog pog)"
        document.querySelector("body > p.poggers4").innerHTML = 'Pog "pog" pog pog pog pog!'
        document.querySelector("body > p.poggers5").innerHTML = "Pog pog pog:"
        document.querySelector("body > form > input.poggers6").value = "Pog"
    }
    function unpog() {
        document.querySelector("body > div.title > h3").innerHTML = "The"
        document.querySelector("body > div.title > h1").innerHTML = "NAME RATER"
        document.querySelector("body > div.title > p > span > strong").innerHTML = "Know if your name is objectively horrible!"
        document.querySelector("body > div.title > p > sub").innerHTML = "(patent pending)"
        document.querySelector("body > p.poggers4").innerHTML = 'Click "submit" to rate your name!'
        document.querySelector("body > p.poggers5").innerHTML = "Your first name:"
        document.querySelector("body > form > input.poggers6").value = "Submit"
    }
    function hide(target) {
        if(target.style.display = 'block'){
            target.style.display = 'none';
    }   else{
        target.style.display = 'block'
    }

    function Rating() {
        var casser = document.getElementById('#inputbox').value;
        var name = casser.toLowerCase();
        var Jaydensaid = 0

        //Tanner and Daniel

        if (name == "tanner") {

            say("Your name sucks, " + casser + ". Get a new one, like Daniel.");

            Tannersaid = 1;
            console.log("Tannersaid is now " + Tannersaid)

        } else if (name == "daniel") {
            if (Tannersaid >= 1) {
                say("Good, you took my advice.")
            } else {
                say("Nice one, " + casser + "!")
            }
            //No name
        } else if (name == "") {

            document.querySelector("body > p.ratingtext").innerHTML = "You need to enter a name.";
            //Brogan
        } else if (casser == "BrOGaN") {

            say("Bromine Oxygen Gallium Nitrogen?")

        } else if (name == "brogan") {

            say("you have the best name in the world")
            //pogs n stuff
        } else if (name == "pog") {
            if (pogSaid == 0) {
                pogAll()
                say("pog")
                pogSaid = 1
                console.log("pogSaid is now " + pogSaid)
            } else {
                say("Already did that, look around.")
            }
        } else if (name == "unpog") {
            if (pogSaid == 1)
                pogSaid = 0
            say("ugh, fiiine")
            setTimeout(()=>{
                unpog()
            }
            , 900)
            say("", 1100)
            setTimeout(()=>{
                console.log("pogSaid is now " + pogSaid)
            }
            , 0)

        } else if (name == "omae wa mo shindeiru") {

            say("NANI");

        } else if (name == "noah") {

            say("Your name's the bomb diggity")
            //definitely not a secret
        } else if (name == 'secret') {

            if (secret >= 1)
                say('Ahh, so you can see the source files and use the console!')

            else {
                say('Can you see the source files?')
            }
            //2048        
        } else if (name == '1') {
            say('2')
            exp++
        } else if (name == '4') {
            if (exp == 1)
                say('8')
            exp++
        } else if (name == '16') {
            if (exp == 2)
                say('32')
            exp++
        } else if (name == '64') {
            if (exp == 3)
                say('128')
            exp++
        } else if (name == '256') {
            if (exp == 4)
                say('512')
            exp++
        } else if (name == '1024') {
            if (exp == 5)
                say('2048! Congratulations!')
            exp = 0
            //ricks and rolls
        } else if (name == 'rickroll') {
            say("Very funny-")
            setTimeout(()=>{
                hide0()
            }
            , 200)
            setTimeout(()=>{
                say('Uh oh...')
            }
            , 600)
            setTimeout(()=>{
                say("Don't click that...")
            }
            , 2000)
            setTimeout(()=>{
                document.querySelector('button').innerText = 'Seriously'
            }
            , 2500)
            setTimeout(()=>{
                document.querySelector('button').innerText = "Don't click me, dude"
            }
            , 3100)

            //me lol
        } else if (name == "jayden") {
            if (Jaydensaid <= 0) {
                say('best name')
                Jaydensaid++
            } else if (Jaydensaid == 1) {
                say("now you're pushing it")
                Jaydensaid++
            } else if (Jaydensaid == 2) {
                say("i get it, stop fishing for praise")
                Jaydensaid++
            } else if (Jaydensaid == 3) {
                say("i get it...")
                Jaydensaid++
            } else if (Jaydensaid >= 4) {
                say("worst name")
            }

            //assorted memes
        } else if (name == 'keanu') {
            say("Beautiful. Radiant. Unique. Exemplary of what a name should be.")

            //other
        } else if (name == 'resetvars') {
            var Tannersaid = 0;
            var pogSaid = 0;
            var secret = 0;
            var exp = 0;
            var x = 0;
            var Jaydensaid = 0;

        } else if (name != "") {
            var index = random(0, ratingphrases.length - 1)
            say(ratingphrases[random(0, ratingphrases.length - 1)])
        }
        return false
    }