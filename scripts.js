function submitNames() {

    // Tiek paņemtas vērtības no input laukiem un tās tie uzliktas uz laimes rata

    var first = document.getElementById("first").value;
    document.getElementById("first-name").innerHTML = first;

    var second = document.getElementById("second").value;
    document.getElementById("second-name").innerHTML = second;

    var third = document.getElementById("third").value;
    document.getElementById("third-name").innerHTML = third;

    var fourth = document.getElementById("fourth").value;
    document.getElementById("fourth-name").innerHTML = fourth;

    var fifth = document.getElementById("fifth").value;
    document.getElementById("fifth-name").innerHTML = fifth;

    var sixth = document.getElementById("sixth").value;
    document.getElementById("sixth-name").innerHTML = sixth;


    console.log("submited")
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(fourth)
    console.log(fifth)
    console.log(sixth)
}



function main() {
    // Laimes rata mainīgie 
    var _wheel = document.querySelector("#wheel");
    var _arrow = document.querySelector("#arrow");
    var _jackpotDisp = document.querySelector("#jackpot");
    var _jackpot = 0;
    var _deg = 7.5;
    var _position = _deg % 360;


    //funkcijas
    function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }




    //Iegriezt laimes ratu
    _arrow.addEventListener("click", spin);

    function spin(evt) {
        //Noņemt click eventu
        _arrow.removeEventListener("click", spin);

        //Bultas animācija
        _arrow.classList.add("arrowanimation");

        //Rata jaunā pozīcija
        _deg = _deg + 180 + (15 * random(0, 24));


        //Iedod ratam pozīciju
        _wheel.style.transform = "rotate(" + _deg + "deg)";

        //Pārbauda pozīciju
        var _position = _deg % 360;
        console.log(_position + " position");

        //Tiek pārbaudīta kurā pozīcijā atrodas laimes rats un tiek atlasīt attiecīgā iedaļa

        if (_position >= 0.1 && _position <= 59.9) {

            _jackpot = document.getElementById("sixth").value;
        }
        if (_position >= 60 && _position <= 119.9) {

            _jackpot = document.getElementById("fifth").value;
        }
        if (_position >= 120 && _position <= 179.9) {

            _jackpot = document.getElementById("fourth").value;
        }
        if (_position >= 180 && _position <= 239.9) {

            _jackpot = document.getElementById("third").value;
        }
        if (_position >= 240 && _position <= 299.9) {

            _jackpot = document.getElementById("second").value;
        }
        if (_position >= 300 && _position <= 359.9) {

            _jackpot = document.getElementById("first").value;
        }


        //Pēc griešanas
        setTimeout(function() {
            //atļaut griezt atkal
            _arrow.addEventListener("click", spin);
            //noņem bultas animāciju
            _arrow.classList.remove("arrowanimation");

            //Tiek parādīts teksts ar konkrētu vērtību kura uzgriezusies

            _jackpotDisp.innerHTML = 'Uz pagātni dosies ' + '<span class="rainbow-text">' + _jackpot + '</span>' + ' !!!';
        }, 5000);
    }
}


window.onload = function() {
    main();
}