    //???? IF ELSE ????\\

var i = prompt('Masukkan angka : ')

if (i === '') {
    alert('harap masukkan objek!')
} else if (i % 2 == 1){
    alert(i + ' adalah bilangan GANJIL')
} else if (i % 2 == 0) {
    alert(i + ' adalah bilangan GENAP')
}
else {
    alert('Maaf yang anda masukkan sepertinya bukan angka maupun nomor')
}


var semuaAngkot = 10
var angkotAktif = 5

for ( var angkot = 1; angkot <= semuaAngkot;angkot++) {
    if(angkot < angkotAktif){
        console.log('angkot no ' + angkot + ' sedang beroperasi dengan baik');
    } else if(angkot === 8 || angkot === 10 || angkot === 5 ){
        console.log('angkot no ' + angkot + ' sedang pergi lembur');
    }
    else {
        console.log('angkot no ' + angkot + ' sedang tidak beroperasi');
    }
}


//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\


    //???? SWITCH ????\\


var menuUtama = prompt(' Silahkan pilih Makanan : Ikan , Ayam , Burung , Sambel , Kecap Manis Pedas , Daging');

switch(menuUtama) {
    case 'Ikan':
        alert('Hidangan makanan Yang disajikan dari laut');
        break;
    case 'Ayam':
        alert('Makanan populer yang paling sering disantap oleh banyak orang');
        break;
    case 'Burung':
        alert('Hewan yang rasanya tidak kalah dengan makanan ayam');
        break;
    case 'Sambel':
        alert('Campuran bawang,cabai dan komponen lain nya yang diulek / blender sehingga menjadi suatu rasa yang pedas');
        break;
    case 'Kecap Manis Pedas':
        alert('Kecap Kental Yang diCampur dengan beberapa komponen bumbu tambahan untuk menjadikan rasa nya sedikit manis dan pedas');
        break;
    case 'Daging':
        alert('Biasa disajikan dari hewan kambing , domba , sapi , kerbau , unta dan semacamnya . dan banyak masakan yang bisa digunakan dari bahan daging ini');
        break;
    default :
        alert('Objek yang anda masukkan tidak ada dalam list!!!');
        break;
};

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\

var s1 = '';
var s2 = '';
for(var i = 25; i > 0; i-- ) {
    for(var j = 0; j < i; j++){
        s1 += '*'
    }
    s1 += '\n'
}
console.log(s1);

var s2 = '';

for(var p = 0;p < k;p++) {
    for(var k = 10;k < 0;k--){
        s2 += '*'
    }
    s2 += '\n'
}

console.log(s2)