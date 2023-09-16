function tes(){
for(var i = 0;i < 10;i++){
        console.log(i)
}}
tes();
console.log(i); /* variabel i yang didalam sebuah function tidak dapat dipanggil karna JavaScript Memakai function scope bukan Block Scope */

/* Part 2 */ 
// Block Scope versi lama Javascript, Menggunakan var
(function(){
        for(var i = 0; i < 10; i++){
                console.log(i)
        }
}());
console.log(i)

// versi baru Block scope javascript,cukup digantikan variabel dengan let saja
// Menggunakan Let

for(let i = 0; i < 10; i++){
        console.log(i)
}

// Cara pakai Const

const mhs = {
        nama : 'Sandhika',
        umur: 31
}
console.log(mhs)
















