var shuffleArray = function (arr) {
    var newArr = arr.slice();
    for (var i = newArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
    return newArr;
}

var alfabe = 'a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z';
var alfabearr = alfabe.split(' ');


console.log(alfabearr);
var alfaberand=shuffleArray(alfabearr);
console.log(alfaberand);


function encrypt() {
  

    var plaintext = document.getElementById("input1").value;
    plaintext = plaintext.split(" ");
    plaintext = plaintext.join("");
    plaintext = plaintext.toLowerCase();
    if ((plaintext.length < 1)) {
        alert("Please Enter Atleast a Word to Create a Cipher Encryption");
        return;
    }

    var encryptedtext = "";
    var plainWordLength = plaintext.length;
    
    for (var i = 0; i < plainWordLength; i++) {
       
        encryptedtext +=  alfaberand[alfabearr.indexOf(plaintext[i])]
        document.getElementById("input2").value = encryptedtext;
    }
    return encryptedtext;
}

function decrypt() {
    var encryptedtext = document.getElementById('input2').value;
    if ((encryptedtext.length < 1)) {
        alert("Please Enter Atleast a Word to Create a Cipher Encryption");
        return;
    }
   
    var decryptedtext = "";
    var cipherWordLength = encryptedtext.length;
    for (var i = 0; i < cipherWordLength; i++) {
        decryptedtext += alfabearr[alfaberand.indexOf(encryptedtext[i])]
        document.getElementById("input1").value = decryptedtext;
    }
    return decryptedtext;
}