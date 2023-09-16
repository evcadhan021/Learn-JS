function kali (a,b) {
    return a * b ;
}
var hasil = kali(9,3)
// ini adalah cara pertama dalam membuat dan memanggil function
document.write('hasil dari function kali adalah : ' + hasil + '<br><br>')

// perlu diingat bahwa di argument bisa dimasukkan operasi aritmatika

function kurang (a,b) {
    return a - b ;
}

var a = parseInt (prompt('masukkan nilai pertama : ')); // bisa langsung di isi dengan value/nilai
var b = parseInt (prompt('masukkan nilai kedua : ')); // bisa langsung di isi dengan value/nilai
var hasil = a - b; // bisa juga langsung masukkan nilai nya pada argumen nya "contoh : kurang (9,3)"
// ini adalah cara kedua dalam membuat dan memanggil function
document.write('hasil dari function kurang adalah : ' + hasil + '<br><br>') 


function tambah (a,b) {
    var tambah1;
    var tambah2;
    var jumlah;

    tambah1 = a
    tambah2 = b

    jumlah = tambah1 + tambah2
    return jumlah;
}

document.write('hasil dari function tambah adalah : '+ jumlah(80,61))
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\

// function di dalam function

function luar () {
    var luar1;
    var luar2;
    
}





//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\

function jumlahVolumeDuaKubus(a,b){
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;
    return total;
}

document.write(jumlahVolumeDuaKubus(8,3)); // bisa juga memakai prompt , console , document , alert , dll.