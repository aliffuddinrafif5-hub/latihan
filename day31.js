for (let i = 5; i >=1; i--) {
    console.log(i);
}
console.log("Mulai!");

let total = 0;

for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log("Total:", total);

const buah = ["apel", "jeruk", "mangga", "anggur"];

for (let i = 0; i <buah.length; i++) {
    console.log(i +1 + ".", buah[i]);
}

let angkaRahasia = 7;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
    percobaan++;
    tebakan = Math.floor(Math.random() * 10) + 1;
    console.log("percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
    "Berhasil menebak angka",
    angkaRahasia,
    "dalam",
    percobaan,
    "percobaan.",
);

let konfirmasi;

do {
    konfirmasi = prompt("ketik 'ya' untuk melanjutkan:");
} while (konfirmasi !== "ya");

console.log("pengguna telah mengkonfirmasi.melanjutkan proses...");

for (let i = 1; i <= 100; i++) {
    if (i === 10) {
        console.log(
            "Target ditemukan pada posisi ke-" + i + ". pencarian dihentikan.",
        );
        break;
    }
    console.log("memeriksa posisi ke-" + i)
}

const nilai = [75, -15, 82, -20, 68, 50];


console.log("Nilai valid:");
for (let i = 0; i <nilai.length; i++) {
    if (nilai[i] <0) {
        continue;
    }
    console.log("-", nilai[i]);
}

const daftarnilai = [68, 35, 82, -4, 77, 44, 99, 1, 57];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarnilai.length; i++) {
    const nilai = daftarNilai[i];

    if (nilai < 0 || nilai > 100) {
        console.log("nilai tidak valid dilewati:", nilai);
        invalid++;
        continue;
    }

    jumlah += nilai;
    valid++;
}
const rataRata = jumlah / valid;

console.log("---");
console.log("total data     :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));