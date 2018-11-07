
var anahtar;

function encrypt() {

    anahtar = document.getElementById("anahtar").value;
    anahtar=parseInt(anahtar);
    var metin = document.getElementById("input1").value;
    metin = metin.split(" ");
    metin = metin.join("");
    metin = metin.toLowerCase();

    
    if ((metin.length < 1)) {
        alert("Metin Giriniz...");
        return;
    }

    var encryptedtext = "";

 
    metin=metin.split("");

    var col = metin.length;
    var row = anahtar;
    var row1=row-1;

    var matris=[];
    var matris2=[];
    //Matrisi oluşturuluyor...
    for (let i = 0; i < row; i++) {
        matris[i]=[];
        for (let k = 0; k < col; k++) {
            matris[i][k]="";
        }
    }

    var index=true;
    var sayac=0;

        for (let k = 0; k < col; k++) {
                    
            if(index)
            {   
                matris[sayac][k]=metin[k];
                if(sayac==row1)
                {  
                    index=false;
                }
                else{
                    sayac++;                 
                }
            }
            else{
                matris[sayac-1][k]=metin[k];
                if(sayac==1)
                {
                    index=true;
                }
                else{
                 sayac--; 
                }

            }
        }

        for (let i = 0; i < row; i++) {
            for (let k = 0; k < col; k++) {
                if(matris[i][k]!=""){
                    encryptedtext += matris[i][k];
                }
            }
        }
    document.getElementById("input2").value = encryptedtext;
    return encryptedtext;
  
}

function decrypt() {
    var metin = document.getElementById('input2').value;
    if ((metin.length < 1)) {
        alert("MEtin Giriniz...");
        return;
    }

    metin=metin.split("");
    var col = metin.length;
    var row = anahtar;
    var row1=row-1;

    var decryptedtext = "";
    var matris=[];
    for (let i = 0; i < row; i++) {
        matris[i]=[];
        for (let k = 0; k < col; k++) {
            matris[i][k]="";
        }
    }

    //şifreli metnin karakter yerlerini işaretleme
    var index=true;
    var sayac=0;

        for (let k = 0; k < col; k++) {
                    
            if(index)
            {   
                matris[sayac][k]="*";
                if(sayac==row1)
                {  
                    index=false;
                }
                else{
                    sayac++;                 
                }
            }
            else{
                matris[sayac-1][k]="*";
                if(sayac==1)
                {
                    index=true;
                }
                else{
                 sayac--; 
                }

            }
        }
        console.log(matris);

    var matris2=matris;

    //şifreli metni matrise aktarma
    x=0;
    for (let i = 0; i < row; i++) {
        for (let k = 0; k < col; k++) {
           if( matris[i][k] == "*"){
            matris2[i][k]=metin[x];
            x++;
           }
        }
    }
    console.log(matris2);

    //Matrisden şifre çöz
    var index=true;
    var sayac=0;

        for (let k = 0; k < col; k++) {
                    
            if(index)
            {   
                decryptedtext+=matris[sayac][k];
                if(sayac==row1)
                {  
                    index=false;
                }
                else{
                    sayac++;                 
                }
            }
            else{
                decryptedtext+=matris[sayac-1][k];
                if(sayac==1)
                {
                    index=true;
                }
                else{
                 sayac--; 
                }

            }
        }


    document.getElementById("input1").value = decryptedtext;
    return decryptedtext;
}