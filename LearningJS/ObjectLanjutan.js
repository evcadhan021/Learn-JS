/* 4 Cara Membuat Object */

// 1.Object Literal
// PROBLEM : Tidak efektif untuk membuat object yang banyak

// let mahasiswa1 = {
//     nama: prompt('Masukkan Nama'),/* atau bisa langsung kita tentukan sendiri */
//     energi:10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: prompt('Masukkan Nama'),/* atau bisa langsung kita tentukan sendiri */
//     energi:10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`)
//     }
// }
// 2.Funtion Declaration

// function Mahasiswa (nama,energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
    
//     mahasiswa.main = function (jam){
//         this.energi -= jam*3; /*bisa dipakaikan penugasan */
//         console.log(`Halo ${this.nama}, Selamat bermain!`)
//     }

//     return mahasiswa; /* jika memakai function declaration harus ada return nya */
// }

// let sandhika = Mahasiswa('ramdhan',29)
// let dody = Mahasiswa('hasbi',123)

// 3.Construktor Function 
// (Keywoard new)
// function Mahasiswa (nama,energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
    
//     this.main = function (jam){
//         this.energi -= jam; /*bisa dipakaikan penugasan */
//         console.log(`Halo ${this.nama}, Selamat bermain!`)
//     }
// }

// let ramdhan = new Mahasiswa('Muhammad Ramdhan',10)
// let yusuf = new Mahasiswa('Yusuf Muhammad Ginanjar',5)
 

// 4.Object.create()
 
// const methodTransaksi = {
//     topup: function (buy) {
//         this.saldo += buy;
//         console.log(`Assalamu alaikum ${this.nama}, Terima kasih Karna sudah melakukan Top up di Platform Kami (^_^)\nSilahkan Cek saldo kak ${this.nama}`);
//     },
//     jajan: function (backbuy) {
//         this.saldo -= backbuy;
//         console.log(`${this.nama} Tadi sudah jajan , pastikan untuk selalu mengecek saldo sebelum kak ${this.nama} mau jajan lagi, Terima kasih.. `);
//     },
//     tidur: function (jam) {
//         this.saldo += jam * 2;
//         console.log(`Assalamu alaikum ${this.nama}, selamat Istirahat! untuk membantu memulihkan stamina tubuh anda (^_^)`);
//     }
// };

// function Mahasiswa (nama,saldo){
//     let mahasiswa = Object.create(methodTransaksi);
//     mahasiswa.nama = nama;
//     mahasiswa.saldo = saldo;

//     return mahasiswa;
// };


// let ramdhan = Mahasiswa('Muhammad Ramdhan',10);
// let umi = Mahasiswa('Yulia Diniyati',20);
// let abi = Mahasiswa('Muhammad Hidayat Ginanjar',30);



/* Ini Adalah contoh Object dengan menggunakan prototype inherintance */
// function Mahasiswa (nama,saldo,energi){
//     this.nama = nama;
//     this.saldo = saldo;
//     this.energi = energi;
// };

// Mahasiswa.prototype.isiSaldo = function (topup) {
//     this.saldo += topup ;
//     return `Halo ${this.nama} , Saldo anda telah bertambah Menjadi silahkan cek di aplikasi Mobile anda`
// }
// Mahasiswa.prototype.jajan = function (buy) {
//     this.saldo -= buy ;
//     return `Halo ${this.nama} , Saldo anda telah berkurang setelah melakukan transaksi atau penarikan dana ofline`
// }
// Mahasiswa.prototype.turu = function (sleep) {
//     this.energi += sleep * 2;
//     return `Halo ${this.nama} Selamat tidur Dan bermimpi yang indah (^_^)`
// }
// Mahasiswa.prototype.main = function (play) {
//     this.energi -= play ;
//     return `Halo ${this.nama} Selamat bermain jangan lupa untuk selalu berhati - hati`
// }
// Mahasiswa.prototype.makan = function (eat) {
//     this.energi += eat;
//     return `Halo ${this.nama} Selamat Menikmati Makanan`
// }
// let ramdhan = new Mahasiswa ('ramdhan',100,10)
// let ripki = new Mahasiswa ('ripki',100,10)


/* Versi Mahasiwa */
class Mahasiswa {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
        
    }
    makan (eat) {
        this.energi += eat;
        return `Halo ${this.nama} Selamat Menikmati Makanan`
    }
    turu (sleep) {
        this.energi += sleep * 2;
        return `Halo ${this.nama} Selamat tidur Dan bermimpi yang indah (^_^)`
    }
    main (play) {
        this.energi -= play ;
        return `Halo ${this.nama} Selamat bermain jangan lupa untuk selalu berhati - hati`
    }
    gantiNama (changeName){
        this.nama = changeName;
        return `Halo Pengguna Setia Lurasya,silahkan memuat ulang halaman ini karna anda telah melakukan pergantian nama`
    }
    
}

let ahmad = new Mahasiswa ('Ahmad Mukhtar',10)

/* JADI KESIMPULAN NYA ADALAH BAHWA OBJECT DENGAN PROTOTYPE DENGAN OBJECT CLASS ADALAH SAMA */
