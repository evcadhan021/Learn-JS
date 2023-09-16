/* Function yang memiliki Callback disebut: Higher Order Function */
function kerjakanTugas(mataKuliah,selesai){
                /*dan function yang disimpan sebagai argumen disebut: Callback*/
        console.log(`Mulai mengerjakan Tugas ${mataKuliah} ...`)
        selesai();/*untuk memanggil parameter callback*/
}
function selesai(){
        alert('Selesai mengerjakan tugas!');
}
kerjakanTugas('Pemrograman Web',selesai)

/* program simple */
let total = 0 ,count = 1;
while(count <= 10){
        total += count;
        count += 1;
}
console.log(count)
