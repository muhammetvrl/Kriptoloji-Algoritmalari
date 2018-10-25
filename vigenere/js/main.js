
var anahtar;

var alfabe = 'a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z';
var alfabe = alfabe.split(' ');
console.log(alfabe);
function encrypt() {

     anahtar = document.getElementById("anahtar").value;
    console.log(anahtar);
    
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

    var ekle=(plainWordLength % anahtar.length);
    ekle=(anahtar.length)-ekle;


    if(plainWordLength % anahtar.length !=0)
    {
        for(var k=0 ; k< ekle ; k++)
        {
            metin+=("a");
        }
    }

    metin=metin.split("");


    for (var i = 0; i < metin.length; i++) {
        var karahter;
        
        if(i<anahtar.length){
            mdeger=alfabe.indexOf(metin[i]);
            adeger=alfabe.indexOf(anahtar[i])
            karahter=alfabe[((mdeger+adeger+1)+29)%29];
        }
        else{
            mdeger=alfabe.indexOf(metin[i]);
            adeger=alfabe.indexOf(anahtar[i%anahtar.length])
            karahter=alfabe[((mdeger+adeger+1)+29)%29];
         
        }
        encryptedtext +=  karahter;
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

    metin=metin.split("");

    for (var i = 0; i < cipherWordLength; i++) {
        var karahter;
        
        if(i<anahtar.length){
            mdeger=alfabe.indexOf(metin[i]);
            adeger=alfabe.indexOf(anahtar[i])
            deger=Math.abs(mdeger-adeger);
            karahter=alfabe[((deger-1)+29)%29];
        }
        else{
            mdeger=alfabe.indexOf(metin[i]);
            adeger=alfabe.indexOf(anahtar[i%anahtar.length])
            deger=Math.abs(mdeger-adeger);
            karahter=alfabe[(((mdeger-adeger)-1)+29)%29];
         
        }
        decryptedtext += karahter;
        document.getElementById("input1").value = decryptedtext;
    }
    return decryptedtext;
}