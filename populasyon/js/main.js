
const populasyon = ["3", "0", "4", "1", "2"];

const anahtar = 5;

function encrypt() {
    var metin = document.getElementById("input1").value;


    metin = metin.split(" ");
    metin = metin.join("");
    metin = metin.toLowerCase();


    if ((metin.length < 1)) {
        alert("Metin Giriniz...");
        return;
    }

    var encryptedtext = "";
    var plainWordLength = metin.length;

    var ekle = (plainWordLength % anahtar);
    ekle = anahtar - ekle;

    if (plainWordLength % anahtar != 0) {
        for (var k = 0; k < ekle; k++) {
            metin += ("z");
        }
    }

    metin = metin.split("");

    for (var i = 0; i < metin.length; i++) {
        var karahter;

        if (i < anahtar) {
            karahter = metin[parseInt(populasyon[i])];
        }
        else {
            karahter = metin[parseInt(populasyon[i % anahtar]) + anahtar];
        }
        encryptedtext += karahter;
        document.getElementById("input2").value = encryptedtext;
    }
    return encryptedtext;
}

function decrypt() {
    var metin = document.getElementById('input2').value;
    if ((metin.length < 1)) {
        alert("MEtin Giriniz...");
        return;
    }

    var decryptedtext = "";
    var cipherWordLength = metin.length;

    metin = metin.split("");

    for (var i = 0; i < cipherWordLength; i++) {
        var karahter;
        if (i < anahtar) {
            karahter = metin[parseInt(populasyon.indexOf(i.toString()))];
        }
        else {
            karahter = metin[parseInt(populasyon.indexOf((i % anahtar).toString()) + anahtar)];
        }
        decryptedtext += karahter;
        document.getElementById("input1").value = decryptedtext;
    }
    return decryptedtext;
}