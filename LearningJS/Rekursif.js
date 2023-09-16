// Rekursif 


// PERTAMA
// function tes(){
//     return tes ();
// }

// tes();  // ini adalah contoh rekursif yang terlalu banyak pemanggilan nya

// KEDUA
for ( var i = 10;i >= 1; i--) {
    console.log(i);
} 


// KETIGA
function tampilAngka(n) {
    if(n === 0 ){
        return;
    }
    console.log(n);
    return tampilAngka(n-1)
}

tampilAngka(10); 

// KEEMPAT 

function faktorial(n) {
    if(n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));
