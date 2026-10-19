//langkah 1 bagian A
/*
dalam
luar
global
85
di dalam blokk
putaran 0
putaran 1
*/
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
}
/*
console.log(pesanBlok);
//Tebakan: terjadi error karena pesanBlok menggunakan let di dalam blok if.
console.log(i);
//Tebakan: terjadi error karena i menggunakan let di dalam perulangan for.
*/
//bagian B
/*
Halo!
undefined
biru
*/
console.log(sapa());

function sapa() {
  return "Halo!";
}

console.log(warna);
var warna = "biru";
console.log(warna);
/*
console.log(lokasi);
const lokasi = "Sleman";
/*output
Tebakan: ReferenceError.
Penjelasan: variabel const tidak bisa digunakan sebelum deklarasinya karena berada dalam Temporal Dead Zone (TDZ).

console.log(salam());
const salam = function () {
  return "Hai";
};
*/
/*
Tebakan: ReferenceError.
Penjelasan: salam adalah variabel const yang menyimpan function expression. Variabel tersebut belum bisa digunakan sebelum deklarasinya.
*/
//bagian C
/*
// Tebakan output:
// 1
// 2
// 3
// 1
// 4
*/
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());
/*
1. Potongan A — Scope
Kenapa tiga console.log(nama) menghasilkan nilai berbeda?

Karena JavaScript mencari variabel dari lingkup (scope) tempat kode dijalankan. Setiap fungsi memiliki variabel nama sendiri.
- console.log(nama) di fungsi dalam() menghasilkan "Dalam" karena variabel tersebut ada di dalam fungsi dalam().
- console.log(nama) di fungsi luar() menghasilkan "Luar" karena menggunakan variabel milik fungsi luar().
- console.log(nama) di luar fungsi menghasilkan "Global" karena menggunakan variabel global.
Kenapa hitung(100) tetap bisa memakai diskonGlobal?

Karena diskonGlobal dibuat di lingkup global sehingga bisa diakses oleh fungsi hitung(). Hasilnya adalah 100 - 10 - 5 = 85.

Kenapa pesanBlok dan i error di luar blok?

Karena keduanya menggunakan let yang memiliki block scope.
- pesanBlok hanya bisa diakses di dalam blok if.
- i hanya bisa diakses di dalam blok perulangan for.
Jika dipanggil di luar bloknya, JavaScript menghasilkan ReferenceError karena variabel tersebut tidak dapat ditemukan di lingkup itu.
2. Potongan B — Hoisting
Kenapa sapa() bisa dipanggil sebelum didefinisikan?

Karena sapa() menggunakan function declaration. JavaScript memproses deklarasi fungsi ini sebelum menjalankan kode, sehingga fungsi dapat dipanggil lebih awal.

Kenapa warna bernilai undefined?

Karena warna menggunakan var. Deklarasi var mengalami hoisting, tetapi nilai "biru" belum diberikan ketika console.log(warna) pertama dijalankan. Oleh sebab itu, hasilnya undefined.

Kenapa lokasi dan salam menimbulkan error?

Karena keduanya menggunakan const. Variabel const tidak bisa diakses sebelum deklarasinya dijalankan. Kondisi ini disebut Temporal Dead Zone (TDZ), sehingga menghasilkan ReferenceError.

Selain itu, salam merupakan function expression yang disimpan dalam variabel const, bukan deklarasi fungsi biasa seperti sapa().
3. Potongan C — Closure
Kenapa penghitungA terus bertambah padahal buatPenghitung() sudah selesai dijalankan?

Karena closure membuat fungsi di dalam buatPenghitung() tetap bisa mengakses variabel hitungan miliknya. Nilai tersebut tetap tersimpan selama fungsi yang dikembalikan masih dapat digunakan.

Jadi, setiap kali penghitungA() dipanggil, nilai hitungan bertambah satu dan melanjutkan nilai sebelumnya.

Kenapa penghitungB mulai dari 1 lagi?

Karena setiap pemanggilan buatPenghitung() membuat lingkungan variabel baru. penghitungA dan penghitungB memiliki variabel hitungan masing-masing yang dimulai dari 0.

Ketika penghitungB() dipanggil pertama kali, nilainya menjadi 1, tanpa memengaruhi hitungan milik penghitungA.
*/


/* LANGKAH 2: PERBAIKAN 8 KESALAHAN */

// 1. Cek stok
const stok = 10;
if (stok > 5) {
  let pesanStok = "Stok aman";
  console.log(pesanStok); // FIX 1: Cetak di dalam blok agar bisa diakses.
}

// 2. Potongan 10%
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
console.log(hitungPotongan(50000)); 
// FIX 2: Cetak nilai yang dikembalikan function, bukan variabel lokal potongan.

// 3. Sambutan
// FIX 3: Deklarasikan function expression sebelum dipanggil.
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan());

// 4. Kota
// FIX 4: Pindahkan deklarasi let sebelum digunakan.
let kota = "Yogyakarta";
console.log(kota);

// 5. Total awal
let total = 100000;
if (true) {
  let total = 90000; // FIX 5: Gunakan let agar total di luar tidak berubah.
}
console.log(total);

// 6. Saldo kas
let saldoKas = 100000;
function tambahKas(jumlah) {
  // FIX 6: Jangan membuat saldoKas lokal yang menutupi variabel global.
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// 7. Nomor antrean
function buatAntrean() {
  let nomor = 0; // FIX 7: Simpan nomor di lingkup luar fungsi yang dikembalikan.
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// 8. Dompet
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo; // FIX 8: Baca variabel privat melalui closure, bukan this.saldo.
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());


// 1. pesanStok berada di dalam blok if, jadi console.log dipindahkan ke dalam blok.
// 2. potongan adalah variabel lokal, jadi hasil hitungPotongan(50000) yang dicetak.
// 3. sambutan adalah function expression const, jadi deklarasinya harus sebelum pemanggilan.
// 4. kota menggunakan let dan tidak bisa diakses sebelum deklarasinya.
// 5. var di dalam blok menimpa total luar; diganti let agar nilainya terpisah.
// 6. saldoKas lokal menutupi saldoKas luar; gunakan variabel luar secara langsung.
// 7. nomor selalu kembali ke 0 karena dibuat di dalam fungsi yang dikembalikan; pindahkan let nomor ke luar fungsi tersebut.
// 8. this.saldo mengakses property object yang tidak ada; gunakan saldo melalui closure.

// Kesalahan yang menyebabkan error:
// 1. pesanStok di luar blok: ReferenceError.
// 3. sambutan dipanggil sebelum deklarasi const: ReferenceError.
// 4. kota diakses sebelum deklarasi let: ReferenceError.

// Kesalahan yang tidak langsung menghasilkan error, tetapi hasilnya salah:
// 2. console.log(potongan) menghasilkan ReferenceError karena variabel tidak tersedia di luar function.
// 5. total menjadi 90000, bukan 100000.
// 6. saldoKas luar tetap 100000.
// 7. nomor antrean selalu 1, 1, 1.
// 8. this.saldo menghasilkan undefined.

// Catatan: nomor 2 juga menghasilkan error di console, bukan sekadar hasil yang salah.

// 3. saldoKas lokal menutupi saldoKas luar. Ini disebut shadowing.
// 4. this.saldo mencari property saldo pada object, bukan variabel lokal saldo.
//    Variabel saldo tetap dapat diakses melalui closure.


// ============================================================
// Konstanta global (di global scope, dipakai di dalam function
// tanpa dikirim sebagai parameter)
// Catatan: harus dideklarasikan sebelum cetakJudul() DIPANGGIL,
// kalau tidak const masih di "temporal dead zone" -> ReferenceError.
// ============================================================
const NAMA_WARUNG = "Warung Sederhana";
const TARIF_PAJAK = 0.11;

// ============================================================
// LANGKAH 3: Bikin Kasir Sendiri
// ============================================================

// Dipanggil sebelum didefinisikan -> aman karena function declaration di-hoist
cetakJudul();

function cetakJudul() {
  console.log(NAMA_WARUNG.toUpperCase());
}

// Function pabrik: data privat disimpan lewat closure
function buatKasir(namaKasir, modalAwal) {
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = Math.round(subtotal * TARIF_PAJAK);
      const total = subtotal + pajak;

      saldoKas += total;
      jumlahTransaksi++;
      riwayat.push({ namaMenu, jumlah, total });
      return total;
    },

    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }
      saldoKas -= jumlah;
      return true;
    },

    cekSaldo() {
      return saldoKas;
    },

    lihatRiwayat() {
      return riwayat.slice(); // salinan, bukan array asli
    },

    ringkasan() {
      console.log(
        `Kasir ${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo: Rp ${saldoKas}`
      );
    },
  };
}

// --- Dua kasir ---
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

// Kasir pagi: 3 penjualan
kasirPagi.catatPenjualan("Nasi Goreng", 15000, 2); // 30000 + pajak 3300 = 33300
kasirPagi.catatPenjualan("Es Teh", 5000, 3);       // 15000 + pajak 1650 = 16650
kasirPagi.catatPenjualan("Ayam Bakar", 25000, 1);  // 25000 + pajak 2750 = 27750

// Kasir malam: 2 penjualan
kasirMalam.catatPenjualan("Kopi Susu", 18000, 2);  // 36000 + pajak 3960 = 39960
kasirMalam.catatPenjualan("Roti Bakar", 12000, 1); // 12000 + pajak 1320 = 13320

// ambilKas di kasir pagi: satu berhasil, satu gagal
console.log(kasirPagi.ambilKas(50000));  // true  (saldo 177700 -> 127700)
console.log(kasirPagi.ambilKas(500000)); // false (melebihi saldo)

kasirPagi.ringkasan();  // Kasir Rina | Transaksi: 3 | Saldo: Rp 127700
kasirMalam.ringkasan(); // Kasir Dodi | Transaksi: 2 | Saldo: Rp 103280

// --- Bukti data privat ---
console.log(kasirPagi.saldoKas); // undefined
kasirPagi.saldoKas = 999999;     // hanya membuat property baru di object, bukan mengubah variabel closure
console.log(kasirPagi.cekSaldo()); // 127700
// Hasil: saldoKas langsung = undefined. Setelah diisi 999999, cekSaldo() tetap 127700
// karena saldo asli ada di variabel privat closure, bukan property object.

// --- Bukti salinan ---
const salinanRiwayat = kasirPagi.lihatRiwayat();
salinanRiwayat.push({ namaMenu: "Menu Palsu", jumlah: 1, total: 1 });
console.log(kasirPagi.lihatRiwayat().length); // 3
// Hasil: 3. Salinan ditambah satu item (jadi 4), tapi riwayat asli tidak berubah.

// --- Closure + arrow function: penghitung diskon ---
function buatPenghitungDiskon(persen) {
  return (harga) => harga - (harga * persen) / 100;
}

const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);
console.log(diskon10(80000)); // 72000
console.log(diskon25(80000)); // 60000

// --- Shadowing ---
let pesanToko = "Saya variabel global";

function tampilkanPesanToko() {
  let pesanToko = "Saya variabel lokal"; // menutupi (shadow) variabel global
  console.log(pesanToko); // Saya variabel lokal
}

tampilkanPesanToko();
console.log(pesanToko); // Saya variabel global
// Hasil: di dalam function tercetak "Saya variabel lokal", di luar tercetak
// "Saya variabel global". Variabel lokal menutupi yang global, tanpa mengubahnya.

// ============================================================
// JAWABAN PERTANYAAN
// ============================================================

// 1. kasirPagi.saldoKas menghasilkan undefined karena saldoKas bukan property
//    object yang dikembalikan. Ia hanyalah variabel lokal di dalam buatKasir.
//    Method-method (catatPenjualan, ambilKas, dst.) bisa mengubahnya karena
//    mereka adalah closure: function yang "membawa" akses ke scope tempat
//    mereka dibuat. Dari luar, tidak ada jalan langsung ke variabel itu;
//    hanya lewat method.

// 2. Setiap kali buatKasir() dipanggil, JavaScript membuat scope baru dengan
//    saldoKas, jumlahTransaksi, dan riwayat yang baru dan independen.
//    Method yang dikembalikan terikat ke scope miliknya sendiri, jadi
//    kasirPagi dan kasirMalam punya data masing-masing.

// 3. Yang masih "diingat": namaKasir, modalAwal (parameter), saldoKas,
//    jumlahTransaksi, dan riwayat. Semuanya tidak hilang karena masih
//    dirujuk oleh method-method yang dikembalikan (closure). Garbage
//    collector hanya membuang variabel yang sudah tidak bisa dijangkau
//    siapa pun; di sini masih bisa dijangkau lewat method.

// 4. Karena mekanisme scope chain (lexical scoping): saat TARIF_PAJAK tidak
//    ditemukan di scope method maupun buatKasir, JavaScript naik ke scope
//    luar sampai ke global scope, tempat TARIF_PAJAK dideklarasikan.

// 5. cetakJudul() bisa dipanggil sebelum didefinisikan karena function
//    declaration di-hoist: seluruh function (nama + isinya) dimasukkan ke
//    memori sebelum kode dijalankan.
//    Percobaan dengan function expression + const (dijadikan komentar):
//    // cetakJudulExpr();
//    // const cetakJudulExpr = function () { console.log(NAMA_WARUNG.toUpperCase()); };
//    Hasil: ReferenceError: Cannot access 'cetakJudulExpr' before initialization
//    (const di-hoist tetapi berada di temporal dead zone sampai barisnya dijalankan).

// 6. Dari closure. Arrow function (harga) => ... dibuat di dalam
//    buatPenghitungDiskon, sehingga ia mengingat variabel persen dari scope
//    pembuatnya, walaupun buatPenghitungDiskon sudah selesai. Karena itu
//    diskon10 selalu memakai persen = 10 dan diskon25 memakai persen = 25.