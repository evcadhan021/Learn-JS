/* Part 1 Dimulai */

function satu(){
        var nama = 'ramdhan'
        console.log(nama)
}
function dua(){
        console.log(nama)
}

console.log(nama)
var nama = 'Muhammad';
satu();
dua('Hsbi');
console.log(nama)

/* Lanjut Part 2 */

function init(){
        // var nama = 'Ramdhan'; /* Bisa memakai Prompt() */
        return function(nama) { /* cara penulisan ke-2 (return function(parameter){...}) */
                console.log(nama);
        }
        // return tampilNama;
}
let panggilNama= init();

panggilNama('Ramdhan'); /* bisa memakai prompt */
panggilNama('Muhammad Ramdhan');
panggilNama('Hasbi Abodullah mubarok');

/* Lanjut Part 3 */

function ucapkanSalam (waktu){
        return (nama) => {
                console.log(`Halo ${nama}, Selamat ${waktu} Semoga hari-Mu lebih Ceria dan Beruntung`);
        }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Ramdhan'))





/* cara yang kedua dengan mengurung function menggunakan kurung biasa dan panggil dengan (); */
let add = (function (){
        let counter = 0;
        return function(){
                return++counter
        }
})();

// let a = add(); /* cara yang pertama dengan memasukkan function expresion ke dalam sebuah variabel baru yang akan dipanggil */


console.log(add())
console.log(add())
console.log(add())





