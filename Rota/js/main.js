
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

    var ekle=(metin.length % anahtar);
    ekle=anahtar-ekle;

    if(metin.length % anahtar != 0)
    {
        for(var k=0 ; k< ekle ; k++)
        {
            metin+=("j");
        }
    }

    metin=metin.split("");

    var col = anahtar;
    var col1 = 0;
    var col2 = anahtar-1;
    var row = metin.length/anahtar;
    var row1=0;
    var row2 = (metin.length/anahtar)-1;


    var matris=[];
    var matris2=[];
    //Matrisi oluşturuluyor...
    for (let i = 0; i < row; i++) {
        matris[i]=[];
        matris2[i]=[];
        for (let k = 0; k < col; k++) {
            matris[i][k]=metin[i*col+k]
            matris2[i][k]=metin[i*col+k]
        }
    }
   
    console.log(matris2);
    for (let k = 0  ; k < col; k++){
        for (let a = row2 ; a > row1-1; a--)
        {//yukarı çık
            if (matris[a][col1] != "")
                encryptedtext+=matris[a][col1]; 
                    matris[a][col1] = "";
        }
        for (let b=col1+1 ; b <= col2; b++)
        {//sağ git
            if (matris[row1][b] != "")
                encryptedtext+=matris[row1][b]; 
                     matris[row1][b]="";
        }
        for (let c=row1+1 ; c<= row2; c++)
        {//aşağı in
            if (matris[c][col2] != "")
              encryptedtext+=matris[c][col2]; 
              matris[c][col2] ="";
        }
        for (var d = col2; d >= col1; d--) 
        {//sol git
            if (matris[row2][d] != "")
                encryptedtext+=matris[row2][d];     
                    matris[row2][d] ="";
                
        }
        row1++;
        col1++;
        row2--;
        col2--;
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

    var col = anahtar;
    var col1 = 0;
    var col2 = anahtar-1;
    var row = metin.length/anahtar;
    var row1=0;
    var row2 = (metin.length/anahtar)-1;
   
    var decryptedtext = "";

    var matris=[];
    var matris2=[];
    for (let i = 0; i < row; i++) {
        matris[i]=[];
        matris2[i]=[];
        for (let k = 0; k < col; k++) {
            matris[i][k]="";
            matris2[i][k]="";
        }
    }
    metin=metin.split("");
    index=0;
    for (let k = 0  ; k < col; k++){
        for (let a = row2 ; a >= row1; a--)
        {//yukarı çık
            if (matris[a][col1] == "")
                matris[a][col1]=metin[index]; 
                else
                break;
                    index++;
        }
        for (let b=col1+1 ; b <= col2; b++)
        {//sağ git
            if (matris[row1][b] == "")
                matris[row1][b]=metin[index];
                else
                break;
                index++;
        }
        for (let c=row1+1 ; c<= row2; c++)
        {//aşağı in
            if (matris[c][col2] == "")
            matris[c][col2]=metin[index];
            else
                break;
            index++;
        }
        for (var d = col2-1; d >= col1; d--) 
        {//sol git
            if (matris[row2][d] == "")
                matris[row2][d]= metin[index];
                else
                break;
                index++;
                
        }
        row1++;
        col1++;
        row2--;
        col2--;
    }

    for (let i = 0; i < row; i++) {
        for (let k = 0; k < col; k++) {
           decryptedtext+=matris[i][k];
        }
    }

    console.log(matris)
    document.getElementById("input1").value = decryptedtext;
    return decryptedtext;
}