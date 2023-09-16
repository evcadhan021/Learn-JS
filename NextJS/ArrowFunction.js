/* Contoh Function Declaration */
function tampilPesan(nama){
         /* bisa juga menggunakan ${nama} di dalam string */
        alert (`Halo` + ' ' + nama)
}
tampilPesan('Ramdhan');

/* versi Expresion */

let tampilNama = function (nama){
        console.log(`Halo ${nama}`)
}
tampilNama('Muhammad')

/* Arrow Function */
const Arrow = function(i){
        return `Halo ${i}`
}
console.log(Arrow(123))

/* mari kita ubah menjadi arrow function */
const arrow = (i) => {
        return `Halo ${i}`
}
console.log(arrow('Ramdhan'))

/* jika parameter dalam function hanya satu,bisa kita persingkat lagi 
# Hanya Berlaku Jika Parameter nya berisi satu, jika lebih maka wajib
menggunakan Kurung biasa (). */
const ArrowFuntion = i => `Halo ${i}`; /* ini disebut dengan implisit return */
console.log(ArrowFuntion('Muhammad'))
/* ada yang lebih singkat lagi jika parameter tidak di isi apa-apa */
// let Arrow = () => `Hello world !`;
// console.log(Arrow())


let mahasiswa = ['Sandhika','Ramdhan','MuhammadRamdhan','Tes'];
// let jumlahHuruf = mahasiswa.map(function (nama){
//         return nama.length;
// })
// console.table(jumlahHuruf)

let jmlhHuruf = mahasiswa.map(nama => nama.length);
// console.log(jmlhHuruf)
/* mengembalikan menjadi object */
let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlhHuruf : nama.length}));
console.log(jmlhHuruf )







