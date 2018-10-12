var alfabe = 'a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z';
var alfabearr = alfabe.split(' ');

function encrypt() {
    var plaintext = document.getElementById("input1").value;
    plaintext = plaintext.split(" ");
    plaintext = plaintext.join("");
    plaintext = plaintext.toLowerCase();
    console.log(plaintext);
    if ((plaintext.length < 1)) {
        alert("Lütfen Boş Bırakmayın");
        return;
    }
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    var encryptedtext = "";
    var plainWordLength = plaintext.length;
    for (var i = 0; i < plainWordLength; i++) {
        encryptedtext += alfabearr[(((alfabearr.indexOf(plaintext[i]))*a+b)+29)%29]
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
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    b = b % 29;
    var decryptedtext = "";
    var cipherWordLength = encryptedtext.length;
    var alfabenum;
    for (var i = 0; i < cipherWordLength; i++) {
         alfabenum = alfabearr.indexOf(encryptedtext[i])-b;
        
            for(var c=0 ; c< a-1 ; c++){
                if(alfabenum % a != 0){
                    alfabenum = alfabenum + 29;
                }   
            }
            decryptedtext += alfabearr[(alfabenum/a)%29];
        document.getElementById("input1").value = decryptedtext;
    }
    return decryptedtext;
    
}