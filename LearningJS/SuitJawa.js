var tanya = true

while ( tanya ) {

// Pilihan Player
var p = prompt('Silahkan Pilih : gajah , semut , orang')
// Pilihan Computer 
// Membangkitkan Bilangan Random
var comp = Math.random();
if (comp < 0.34 ){
    comp = 'gajah'
}else if(comp >= 0.34 && comp < 0.67 ){
    comp = 'orang'
} else {
    comp = 'semut'
}

// Menentukan rules

var hasil = ''

if (p === comp) {
    hasil = 'SERI!!!'
} else if (p == 'gajah'){
    if(comp == 'orang'){
        hasil = 'KAMU MENANG'
    } else {
        hasil = 'KAMU KALAH'
    }
} else if (p == 'orang'){
    if (comp == 'semut'){
        hasil = 'KAMU MENANG'
    } else {
        hasil = 'KAMU KALAH'
    }
} else if (p == 'semut'){
    if (comp == 'gajah'){
        hasil = 'KAMU MENANG'
    } else {
        hasil = 'KAMU KALAH'
    }
} else if (p == ''){
    hasil = 'Isi dulu pilihanmu!'
} else {
    hasil = 'pilihan kamu tidak sesuai dengan yang tertera !'
}

// Tampilkan Hasil

alert('Player Memilih ' + p + ' dan computer memilih ' + comp + '\n' + 'Maka Hasil nya : ' + hasil)

tanya = confirm('Lagi ? ');

}

alert('Terima Kasih Karna Sudah Bermain      ^_^')
