
var alfabe = 'a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z';
var alfabearr = alfabe.split(' ');


console.log(alfabearr);
var alfaberand=["ğ", "u", "k", "ç", "c", "n", "v", "ü", "ı", "l", "y", "b", "m", "g", "i", "z", "r", "s", "ö", "t", "f", "o", "p", "h", "j", "ş", "d", "e", "a"]
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