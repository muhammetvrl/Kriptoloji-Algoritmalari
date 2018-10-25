
var alfabe =
    [['a', 'b', 'c', 'ç', 'd'],
    ['e', 'f', 'g', 'ğ', 'h'],
    ['ı', 'i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'ö', 'p'],
    ['r', 's', 'ş', 't', 'u'],
    ['ü', 'v', 'y', 'z', 'x']
    ];

var alfabe2 =
    [["ş", "u", "ı", "h", "k"],
    ["ğ", "g", "ü", "v", "n"],
    ["j", "c", "m", "o", "p"],
    ["b", "ö", "z", "i", "l"],
    ["s", "a", "e", "d", "f"],
    ["x", "y", "ç", "t", "r"]];

var alfabe3 =
    [["n", "c", "f", "s", "ü"],
    ["z", "ç", "l", "ğ", "r"],
    ["h", "v", "t", "e", "m"],
    ["i", "ş", "k", "u", "d"],
    ["o", "x", "p", "b", "g"],
    ["ı", "a", "j", "ö", "y"]];

const geneltablo = [
    [alfabe],
    [alfabe2],
    [alfabe3],
    [alfabe]
];



function encrypt() {
    var metin = document.getElementById("input1").value;
    metin = metin.split(" ");
    metin = metin.join("");
    metin = metin.toLowerCase();

    var ekle = (metin.length % 2);
    ekle = 2 - ekle;

    if (metin.length % 2 != 0) {
        for (var k = 0; k < ekle; k++) {
            metin += ("a");
        }
    }
    if ((metin.length < 1)) {
        alert("Metin Giriniz...");
        return;
    }
    var encryptedtext = "";

    var satir1;
    var sutun1;
    var satir2;
    var sutun2;

    for (var x = 0; x < metin.length; x += 2) {
        var karahter;
        for (var i = 0; i < 6; i++) {
            for (var k = 0; k < 5; k++) {
                if (alfabe[i][k] == metin[x]) {
                    satir1 = i;
                    sutun1 = k;
                }
            }
        }
        for (var i = 0; i < 6; i++) {
            for (var k = 0; k < 5; k++) {
                if (alfabe[i][k] == metin[x + 1]) {
                    satir2 = i;
                    sutun2 = k;
                  
                }
            }
        }
        console.log("satir:"+satir1,"sutun:"+sutun1);
        console.log("satir:"+satir2,"sutun:"+sutun2);
        console.log(satir1,sutun2);
        console.log(satir2,sutun1);
        encryptedtext += alfabe2[satir1][sutun2];
        encryptedtext += alfabe3[satir2][sutun1];

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
 
    var satir1;
    var sutun1;
    var satir2;
    var sutun2;

    for (var x = 0; x < metin.length; x += 2) {
        for (var i = 0; i < 6; i++) {
            for (var k = 0; k < 5; k++) {
                if (alfabe2[i][k] == metin[x]) {
                    satir1 = i;
                    sutun1 = k;
                }
            }
        }
        for (var i = 0; i < 6; i++) {
            for (var k = 0; k < 5; k++) {
                if (alfabe3[i][k] == metin[x + 1]) {
                    satir2 = i;
                    sutun2 = k;
                }
            }
        }
        console.log("satir:"+satir1,"sutun:"+sutun1);
        console.log("satir:"+satir2,"sutun:"+sutun2);
        console.log(satir1,sutun2);
        console.log(satir2,sutun1);
        decryptedtext += alfabe[satir1][sutun2];
        decryptedtext += alfabe[satir2][sutun1];
        document.getElementById("input1").value = decryptedtext;
    }
    return decryptedtext;
}