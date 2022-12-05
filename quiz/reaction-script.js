var timer; // stores timeout of waiting time
var reaction; // stores time it took you to react on green color
var highscore = 0; // stores your personal highscore
var init = true; // controls if codes executes first time


window.onload=()=>{ // kjøres når alle elementer er klare


    // få tilgang til de nødvendige elementene 

    var entire = document.getElementsByClassName("entire")[0];
    var entirebtn = entire.getElementsByTagName("button")[0];
    
    var wait = document.getElementsByClassName("wait")[0];
    
    var tap = document.getElementsByClassName("tap")[0];
    
    var toofast = document.getElementsByClassName("toofast")[0];
    var toofastbtn = toofast.getElementsByTagName("button")[0];
    
    var result = document.getElementsByClassName("result")[0];
    var resultbtn = result.getElementsByTagName("button")[0];
    var resultf = result.getElementsByTagName("res")[0];
    
    var highscoref = document.getElementsByClassName("highscore")[0].getElementsByTagName("res")[0];

    
    // Det som skal trykkes på
    entirebtn.onclick=()=>{
      entire.setAttribute("dn","");
      wait.removeAttribute("dn");
      timer = setTimeout(()=>{
         wait.setAttribute("dn","");
         tap.removeAttribute("dn");
         reaction = new Date(); // start tid
      },Math.floor((Math.random() * 8) + 4)*Math.floor((Math.random() * 999) + 501)); // få en tilfeldig tid før skjermen blir grønn
    } 
    
    wait.onclick=()=>{ // hvis rød skjerm ble trykket på, vis at det ble gjort en feil
      clearTimeout(timer); // kanseler grønnskjerm under pausen
      wait.setAttribute("dn","");
      toofast.removeAttribute("dn");
    }
    
    tap.onclick=()=>{
      var now = new Date(); // end time
      reaction = now.getTime() - reaction.getTime(); // kalkuler i millesekunder
      tap.setAttribute("dn","");
      result.removeAttribute("dn");
      resultf.innerHTML = reaction; // skriv nåverende reaskjonstid
      if(highscore>reaction||init){ // slutt tid
        highscore = reaction;
        highscoref.innerHTML = highscore; 
        result.getElementsByTagName("hs")[0].removeAttribute("dn");
      }
      init = false; // tiden har sluttet å knappen ble trykket før den ble grønn
    }
    
    window.onkeypress=()=>{
      var now = new Date(); // tiden slutter
      reaction = now.getTime() - reaction.getTime(); // kalkulerer tiden til millesekunder
      tap.setAttribute("dn","");
      result.removeAttribute("dn");
      resultf.innerHTML = reaction; // skriv den nåverende reaskjonstiden på skjermen
      if(highscore>reaction||init){ // hvis man slo highscoren, brukes denne koden til å la brukeren vite det
        highscore = reaction;
        highscoref.innerHTML = highscore; 
        result.getElementsByTagName("hs")[0].removeAttribute("dn");
      }
      init = false; // brukes hvis det ikke var riktig tid til å klikke
    }
    
    resultbtn.onclick=()=>{
      result.setAttribute("dn","");
      if(entire.hasAttribute("dn")){
        entire.removeAttribute("dn");
      }
      result.getElementsByTagName("hs")[0].setAttribute("dn","");
    }

    toofastbtn.onclick=()=>{
      toofast.setAttribute("dn","");
      if(entire.hasAttribute("dn")){
        entire.removeAttribute("dn");
      }
    }
}
