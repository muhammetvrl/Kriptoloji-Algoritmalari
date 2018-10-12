
var alfabe = 'a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z';
var alfabearr = alfabe.split(' ');

function encrypt() {
    var plaintext = document.getElementById("input1").value;
    plaintext = plaintext.split(" ");
    plaintext = plaintext.join("");
    plaintext = plaintext.toLowerCase();
    if ((plaintext.length < 1)) {
        alert("Please Enter Atleast a Word to Create a Cipher Encryption");
        return;
    }
    var shift = 3;
    var encryptedtext = "";
    var plainWordLength = plaintext.length;
    for (var i = 0; i < plainWordLength; i++) {
        encryptedtext += alfabearr[(((alfabearr.indexOf(plaintext[i]))+shift)+29)%29]
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
    var shift1 = 3;
    var decryptedtext = "";
    var cipherWordLength = encryptedtext.length;
    for (var i = 0; i < cipherWordLength; i++) {
        decryptedtext += alfabearr[(((alfabearr.indexOf(encryptedtext[i]))-shift1)+29)%29];
        document.getElementById("input1").value = decryptedtext;
    }
    return decryptedtext;
}