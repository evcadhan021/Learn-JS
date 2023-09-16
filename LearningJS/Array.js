// var tas = ['pensil','pulpen','spidol','penghapus','tipe-X','krayon','penggaris']

// console.log(tas);


// 1. Menambah isi array

var aray = [];
aray [0] = 'cacing';
aray [1] = 'kuda';
aray [2] = 'kijang';
aray [3] = 'babi'

console.log(aray)


// 2. Menghapus isi array

var arr = ['Sandhika','Galih','Muhammad','Ramdhan']
arr[2] = undefined;

console.log(arr)


// 3. Menampilkan isi array 

var isiArray = ['Marketer','MultiMedia','Manajer','Backend','Mobile','Frontend'];

for ( var i = 0;i < isiArray.length; i++ ){
    console.log ('Mahasiswa ke-' + (i+1) + ':' + isiArray[i]);
}

// 1.length untuk mengetahui jumlah panjang dari objek

var method = ['satu','dua','tiga','empat','lima'];

console.log(method.length);
// 2.join untuk menggabungkan sebuah objek
var method = ['satu','dua','tiga','empat','lima'];

console.log(method.join(' $ '));
// 3.push and .pop untuk menambahkan dan menghapus array nya di urutan akhir
var method = ['satu','dua','tiga','empat','lima'];
method.push('enam','tujuh'); // menambahkan di array urutan akhir
method.pop(); // menghapus di array urutan akhir
console.log(method.join('-'));

// 4.unshift dan shift adalah method untuk menambahkan dan mengurangi array di awal array
var method = ['satu','dua','tiga','empat','lima'];
method.unshift('Cek','Tes Di Coba')
method.shift();
console.log(method.join('-'));


// 5.slice dan splice method yang menambahkan aray di tengah dan menggeserkan aray diawal dan diakhir
var method = ['satu','dua','tiga','empat','lima'];
// method.splice(index awal,mau dihapus berapa,elemenBaru1,elemenBaru2....)
method.splice(3,0,'aneh','skuy')

console.log(method.join('-'));


var method = ['satu','dua','tiga','empat','lima'];
// method.slice(awal,akhir)
var arry = method.slice(2,4) 
console.log(arry);

// 6. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['sandhika','galih','abrianto']
for (var i = 0;i < angka.length ; i++ ){
    console.log(angka[i]);
}

nama.forEach(function(e,i){
    console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
})

// 7.map 

var nomor = [1,4,3,7,0,2,5,];
var nomor2 = nomor.map (function(e){
    return e ;
})
console.log(nomor2.join('-'));

// 8.sort
var nomor = [1,4,3,10,7,20,0,2,5,];
console.log(nomor.join('*')) 
nomor.sort(function(a,b){
    return a-b;
});
console.log(nomor.join('*'))


// 9.filter & find
var filter = [2,8,4,10,6,3,20,1,0];
var filter2 = filter.find(function(x){
    return x > 4;
});

console.log(filter2);


