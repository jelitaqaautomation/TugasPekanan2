const prompt = require('prompt-sync')({sigint:true});

let inputan = prompt("Masukkan nilai ");
let hasilakarpangakat2;

if (inputan < 0) {
    console.log("Tidak bisa input bilangan negatif")
    
}
else if (inputan % 2 !== 0){
    console.log("Tidak bisa input bilangan ganjil")

}
else

hasilakarpangakat2 = Math.sqrt(inputan);
;

console.log(hasilakarpangakat2);