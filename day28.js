//langkah-1
console.log(7 + 3 * 2);
//tebakan: 13✔,karena yang dikerjakan terlebih dahulu itu perkalian jadi 3*2=6 dan di tambah 7=13
//hasil asli :13
console.log((7 + 3) * 2);
//tebakan: 20✔,karena yang dikerjakan terlebih dahulu itu di dalam kurung kemudian di kali 2
//hasil asli: 20
console.log(17 % 5);
//tebakan : 2✔,karena dari hasil pembagian 15/5 dan itu masih memiliki sisa yaitu 2
//hasil asli :2
console.log(2 ** 3);
//tebakan : 8✔,karena perpangkatan
//hasil asli :8
console.log(5 == "5");
//tebakan : true✔,sama nilai longgar
//hasil asli :true
console.log(5 === "5");
//tebakan : false✔,sama nilai dan tipe data
//hasil asli :false
console.log(true && false);
//tebakan : false✔,true hanya jika semua kondisi bernilai true
//hasil asli :false
console.log(true || false);
//tebakan : true✔,true jika setidaknya satu kondisi bernilai true
//hasil asli true:
console.log(!true);
//tebakan : false✔,Membalik nilai Boolean (true → false, false → true)
//hasil asli :false
console.log(10 > 5 && 3 > 8);
//tebakan : false✔,Operator && (AND) membutuhkan kedua kondisi bernilai benar agar menghasilkan True. Karena salah satu kondisi bernilai salah, hasil akhirnya menjadi False.
//hasil asli :false
/*
jawaban
1.menurut saya yang paling sulit dibagian (10 > 5 && 3 > 8) membutuh kedua kondisi bernilai benar agar menghasilkan true.
2.Kenapa `7 + 3 * 2` hasilnya `13`, bukan `20`?karena yang dikerjakan terlebih dahulu itu perkalian
3. Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false`? kerana sama nilai dan tipe data nya
*/
//langkah-2
const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = 51000;

// Total 2 kopi + 2 teh. Seharusnya: 51000
let totalPesanan = (hargaKopi*2) + (hargaTeh * 2);//FIX: produk tersebut harus di kali dua agar menghasilkan bilangan yang benar

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = uangDiterima === totalPesanan;//FIX: harus menggunakan operator === agar menghasilkan nilai boolean

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
jumlahMember = jumlahMember += 1;//FIX: harus menggunakan operator += agar menghasilkan nilai yang benar

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
let dapatDiskon = sudahMember || totalPesanan > 100000;//FIX: harus menggunakan operator || agar menghasilkan nilai boolean

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);
/*
jawaban
1.
-let total pesanan:produk tersebut harus di kali dua agar menghasilkan bilangan yang benar
-let uangPas:harus menggunakan operator === agar menghasilkan nilai boolean
-let jumlahMember:harus menggunakan operator += agar menghasilkan nilai yang benar
-let dapatDiskon:harus menggunakan operator || agar menghasilkan nilai boolean
2. Mengapa uangPas === ... menghasilkan false?

Karena operator === membandingkan nilai sekaligus tipe datanya. Misalnya, jika uangPas bertipe angka (10000), sedangkan nilai pembandingnya bertipe teks ("10000"), hasilnya false.

Perbaikannya: Samakan tipe datanya agar hasilnya true.

let uangPas = 10000;
console.log(uangPas === 10000); // true

3. Apa perbedaan && dan ||?

&& (AND): Hasilnya true jika semua kondisi bernilai benar.

|| (OR): Hasilnya true jika minimal satu kondisi bernilai benar.

Contoh kode dapatDiskon:

let totalBelanja = 150000;
let punyaMember = true;

let dapatDiskon = totalBelanja >= 100000 && punyaMember;
console.log(dapatDiskon); // true

Pada contoh tersebut, pelanggan mendapat diskon jika total belanja minimal Rp100.000 dan memiliki kartu member.

Jika menggunakan ||, pelanggan mendapat diskon jika total belanja minimal Rp100.000 atau memiliki kartu member.
*/

 // LANGKAH 3: PROGRAM KASIR SEDERHANA

// 1. Variabel const
const namaBarang = "Kopi Susu";
const hargaSatuan = 18000;
const TARIF_PAJAK = 0.11;

// 2. Variabel let
let jumlahBeli = 3;
let uangDibayar = 70000;

// 3. Menghitung subtotal, pajak, dan total bayar
let subtotal = hargaSatuan * jumlahBeli;
let pajak = subtotal * TARIF_PAJAK;
let totalBayar = subtotal + pajak;

// 4. Operator penugasan ringkas
totalBayar += 0; // Menambahkan Rp0 ke total
let potongan = 1000;
totalBayar -= potongan; // Mengurangi total dengan potongan

// 5. Menghitung kembalian
let kembalian = uangDibayar - totalBayar;

// 6. Tiga variabel Boolean
let uangCukup = uangDibayar >= totalBayar;
let gratisKantong = subtotal >= 100000 || jumlahBeli >= 5;
let jumlahGenap = jumlahBeli % 2 === 0;

// Boolean tambahan untuk membandingkan && dan ||
let tesDan = subtotal >= 100000 && jumlahBeli >= 5;
let tesAtau = subtotal >= 100000 || jumlahBeli >= 5;

// 7. Menampilkan hasil
console.log("===== KASIR KOPI SUSU =====");
console.log("Barang       :", namaBarang);
console.log("Harga satuan : Rp" + hargaSatuan);
console.log("Jumlah beli  :", jumlahBeli);
console.log("Subtotal     : Rp" + subtotal);
console.log("Pajak (11%)  : Rp" + pajak);
console.log("Potongan     : Rp" + potongan);
console.log("Total bayar  : Rp" + totalBayar);
console.log("Uang dibayar : Rp" + uangDibayar);
console.log("Kembalian    : Rp" + kembalian);
console.log("Uang cukup?  :", uangCukup);
console.log("Gratis kantong?", gratisKantong);
console.log("Jumlah genap?", jumlahGenap);

// 8. Jawaban pertanyaan

// 1. uangCukup bernilai true karena uang dibayar
// lebih besar daripada total yang harus dibayar.

// 2. Sebelum menggunakan &&, tesDan bernilai false
// karena kedua kondisi tidak terpenuhi.
// Setelah menggunakan ||, tesAtau bernilai false juga
// karena kedua kondisi sama-sama false.
// Jika salah satu kondisi true, hasil || akan true.

// 3. Contoh tanda kurung mengubah hasil perhitungan:
console.log("Dengan kurung:", (10 + 5) * 2); // 30
console.log("Tanpa kurung:", 10 + 5 * 2);    // 20

// BONUS: Mengubah 250 menit menjadi jam dan menit
let totalMenit = 250;
let jam = Math.floor(totalMenit / 60);
let menit = totalMenit % 60;

console.log("Bonus:", jam, "jam", menit, "menit");

// / digunakan untuk membagi total menit dengan 60.
// Math.floor() membulatkan hasil ke bawah.
// % mencari sisa pembagian yang menjadi jumlah menit.