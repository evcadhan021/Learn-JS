    //???? WHILE & FOR ????\\

    var angkotBeroperasi = 1
    var angkotTidakBeroperasi = 13
    var jumlahAngkot = 20

while (angkotBeroperasi <= jumlahAngkot) {
    console.log('angkot no ' + angkotBeroperasi + ' beroperasi dengan baik')
    angkotBeroperasi++;
};

for (angkotBeroperasi; angkotBeroperasi <= jumlahAngkot; angkotBeroperasi++) {
    if (angkotBeroperasi <= angkotTidakBeroperasi) {
        console.log('angkot no ' + angkotBeroperasi + ' Sedang Beroperasi Dengan Baik');
    } else {
        console.log('angkot no ' + angkotBeroperasi + ' Tidak Beroperasi');
    };
}



var pesananClient = 30
var kue = 1
var kembalian = 12

while (kue <= kembalian ) {
    console.log('Pesanan kue nomor ' + kue + ' Sudah Siap') 
    kue++;
}

for (kue ; kue <= pesananClient ; kue++) {
    if (kue == 2|| kue == 6 || kue == 8 || kue == 16 || kue == 23) {
        console.log('Pesanan kue nomor ' + kue + ' Dibatalkan ');
    } else if (kue >= 27) {
        console.log('Pesanan kue nomor ' + kue + 'Menghilang');
    }
    else if (kue <= kembalian) {
        console.log('Pesanan kue nomor ' + kue + ' Sudah siap !! ');
    } 
    else {
        console.log('Pesanan kue nomor ' + kue + ' Tunggu , anda memeiliki kembalian yang harus di ambil');
    }
}


//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\