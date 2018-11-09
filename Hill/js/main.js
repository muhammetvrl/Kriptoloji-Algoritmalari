
var anahtar;

function encrypt() {

  
    var anahtar =[
    [3, 2, 4],
    [1,3,5],
    [0,2,1]
    ];

    var alfabe = 'a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z';
    var alfabe = alfabe.split(' ');

    var metin = document.getElementById("input1").value;
    metin = metin.split(" ");
    metin = metin.join("");
    metin = metin.toLowerCase();

    if ((metin.length < 1)) {
        alert("Metin Giriniz...");
        return;
    }

    var encryptedtext = "";

    var ekle=(metin.length % 3);
    ekle=3-ekle;

//harf ekle
    if(metin.length % 3 !=0)
    {
        for(var k=0 ; k< ekle ; k++)
        {
            metin+=("a");
        }
    }

    metin=metin.split("");
    console.log(metin);
    
//metin değerleri çarpımı
    var index = 0;
    var matris=[];
    var resultmat=[];
    for (let i = 0; i < 3; i++) {
        matris[i]=[];
        resultmat[i]=[];
        for (let k = 0; k < 3; k++) {
            matris[i][k]=alfabe.indexOf(metin[index])+1;
            resultmat[i][k]="";
            index++;
        }
    }
    console.log(matris);

    //çarpma işlemi
    for (let i = 0; i <3; i++)
    {
        for (let j = 0; j <3; j++)
        {
            var toplam = 0;
            for (let k = 0; k < 3; k++)
            {
               console.log( (matris[i, k])*(anahtar[k, j]));
            }
            console.log(toplam);
        }
    }

    console.log(resultmat);


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