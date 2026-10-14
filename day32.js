// langkah 1
//potongan bagian A

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
//tebakan:jus
//hasil asli:jus
console.log(pertamaDibuang);
//tebakan:air
//hasil asli:air
console.log(menu);
//tebakan:kopi, roti, susu
//hasil asli:array(3)
console.log(irisan);
//tebakan:teh, susu
//hasil asli:array(2)
console.log(menu.indexOf("Susu"));
//tebakan:3
//hasil asli:2
console.log(menu.indexOf("Nasi"));
//tebakan:-1
//hasil asli:-1
console.log(menu.includes("Kopi"));
//tebakan:true
//hasil asli:
console.log(menu[menu.length - 1]);
//tebakan:susu
//hasil asli:susu

//bagian B
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
  //tebakan:5
  //hasil asli:5
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
//tebakan:5
//hasil asli:5
console.log(y);
//tebakan:undefined
//hasil asli:undefined

//bagian C
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
//tebakan:40000
//hasil asli:
console.log(hitungDiskonPersen(50000));
//tebakan:
//hasil asli:

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));//negatif
console.log(cekAngka(5));//bukan negatif

/*
1. Potongan A — Array dan method
Kemungkinan kode menggunakan method seperti splice() dan slice().
- menu adalah array asli.
- irisan adalah array hasil pemotongan atau pengambilan sebagian elemen.
Perbedaannya:
Method	Mengubah array asli?
splice()	Ya, mengubah array asli
slice()	Tidak, menghasilkan array baru
Contoh:
let menu = ["Kopi", "Teh", "Roti"];

let irisan = menu.slice(0, 2);

console.log(menu);
console.log(irisan);


Output:
["Kopi", "Teh", "Roti"]
["Kopi", "Teh"]


Array menu tetap utuh karena slice() tidak mengubah array aslinya.
2. Potongan B — tambah, cetakTambah, dan undefined
Perbedaannya bergantung pada kode yang digunakan. Namun, biasanya tambah merupakan function yang mengembalikan hasil dengan return, sedangkan cetakTambah menampilkan hasil dengan console.log().
Contoh:
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);

console.log(x);
console.log(y);


Output:
5
5
5
undefined


Kenapa y bernilai undefined?
Karena cetakTambah() hanya menampilkan angka dengan console.log(), tetapi tidak mengembalikan nilai menggunakan return.
Sebaliknya, tambah() menggunakan return a + b, sehingga hasilnya bisa disimpan ke variabel x.
3. Potongan C — hitungDiskonPersen(50000)
Jika function tersebut menggunakan return sebelum baris console.log(), maka baris setelah return tidak akan dijalankan.
Contoh:
function hitungDiskonPersen(harga) {
  return harga * 0.1;

  console.log("Baris ini muncul atau tidak?");
}

console.log(hitungDiskonPersen(50000));


Output:
5000


Penjelasannya:
- Harga yang dimasukkan adalah 50000.
- Diskon 10% menghasilkan 5000.
- return mengakhiri eksekusi function tersebut.
-Karena itu, console.log("Baris ini muncul atau tidak?") tidak tercetak.
*/

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// Tambah "Susu" di akhir daftar. Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]
daftarBelanja.push("Susu");// FIX:menambah kan elemen di akhir array

// Hapus "Teh" (indeks 1) dari daftar. Seharusnya: ["Kopi", "Roti", "Susu"]
daftarBelanja.splice(1, 1);// FIX:menghapus atau mengganti elemen pada array asli

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.includes("Roti");// FIX:mengecek apakah elemen ada, hasilnya true atau false

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length -1];// FIX:mengambil index elemen terakhir 

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen) {
return  harga - (harga * persen) / 100;// FIX:mengembalikan hasil perhitungan
}

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal) => {
return  subtotal * 0.11;// FIX:mengembalikan hasil perhitungan
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
const hitungTotal = (subtotal, pajak) => subtotal + pajak;// FIX:deklarasi const harus dijalankan sebelum variabelnya digunakan
console.log(hitungTotal(80000, 8800));

/*jawaban
1. Tujuh kesalahan dan perbaikannya
1. unshift() menambahkan elemen di awal, bukan akhir array, jadi ganti dengan push().
2. slice() tidak mengubah array asli, jadi ganti dengan splice(1, 1) untuk menghapus "Teh".
3. indexOf() menghasilkan indeks, bukan boolean, jadi ganti dengan includes() untuk mendapatkan true atau false.
4. daftarBelanja.length bukan indeks terakhir, jadi gunakan daftarBelanja.length - 1.
5. hitungDiskon() tidak memakai return, jadi tambahkan return sebelum perhitungan diskon.
6. hitungPajak() tidak memakai return, jadi tambahkan return sebelum perhitungan pajak.
7. hitungTotal() dipanggil sebelum deklarasi const-nya, jadi pindahkan deklarasinya ke atas sebelum pemanggilan.
2. Mana yang error dan mana yang tidak?
Kesalahan	Jenis
1. unshift()	Tidak error, tetapi elemen masuk di posisi yang salah
2. slice()	Tidak error, tetapi array asli tidak berubah
3. indexOf()	Tidak error, tetapi hasilnya berupa indeks, bukan boolean
4. Indeks terakhir	Tidak error, tetapi hasilnya undefined
5. hitungDiskon() tanpa return	Tidak error, tetapi hasilnya undefined
6. hitungPajak() tanpa return	Tidak error, tetapi hasilnya undefined
7. hitungTotal() dipanggil sebelum deklarasi const	Error ReferenceError
Catatan: Pada kode awal, error nomor 7 menghentikan eksekusi saat baris tersebut dijalankan. Jadi, baris setelahnya tidak akan dieksekusi secara normal.
3. Kenapa hitungDiskon() dan hitungPajak() sama-sama menghasilkan undefined?
Karena keduanya melakukan perhitungan, tetapi tidak mengembalikan hasil menggunakan return.
- hitungDiskon() menggunakan function biasa dengan {}. Pada bentuk ini, hasil perhitungan tidak otomatis dikembalikan.
- hitungPajak() menggunakan arrow function dengan {}. Bentuk ini juga memerlukan return secara eksplisit.
Contoh perbaikannya:
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

const hitungPajak = (subtotal) => {
  return subtotal * 0.11;
};


Keduanya sekarang mengembalikan angka yang benar.
*/


/* ===== LANGKAH 3: BIKIN KASIR SENDIRI ===== */

// 1. Data awal
const kasirNamaMenu = [
  "Kopi Susu",
  "Es Teh",
  "Roti Bakar",
  "Nasi Goreng",
  "Jus Jeruk"
];

const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];

let kasirKeranjang = [];

// 2. Mengelola keranjang dengan array method

// push: menambah item di akhir
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.push("Nasi Goreng");

// unshift: menambah item di depan
kasirKeranjang.unshift("Jus Jeruk");

// pop: membatalkan item terakhir
kasirKeranjang.pop();

// shift: membatalkan item pertama
kasirKeranjang.shift();

// Tambah kembali item agar keranjang berisi minimal 4 item
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Kopi Susu");

// Bukti splice mengubah array asli
console.log("Sebelum splice:", kasirKeranjang);

kasirKeranjang.splice(4, 1, "Jus Jeruk");

console.log("Sesudah splice:", kasirKeranjang);

// includes: mengecek apakah menu ada
console.log(
  "Ada Roti Bakar?",
  kasirKeranjang.includes("Roti Bakar")
);

// slice: mengambil 3 item pertama tanpa mengubah array asli
const kasirPaketCepat = kasirKeranjang.slice(0, 3);

console.log("Paket cepat:", kasirPaketCepat);
console.log("Keranjang asli:", kasirKeranjang);


// 3. Function declaration: mencari harga
function kasirCariHarga(namaMenu) {
  const indeks = kasirNamaMenu.indexOf(namaMenu);

  if (indeks === -1) {
    return 0;
  }

  return kasirHargaMenu[indeks];
}

// Uji function declaration sebelum definisinya
// Pemanggilan ini boleh dilakukan sebelum deklarasi function.
console.log(
  "Uji cari harga:",
  kasirCariHarga("Kopi Susu")
);


// 4. Function expression: menghitung subtotal
// Jika baris di bawah ini dipanggil sebelum deklarasinya,
// JavaScript akan menghasilkan ReferenceError.

// console.log(kasirHitungSubtotal());
// Hasil jika diaktifkan sebelum deklarasi:
// ReferenceError: Cannot access 'kasirHitungSubtotal'
// before initialization

const kasirHitungSubtotal = function () {
  let subtotal = 0;

  for (let i = 0; i < kasirKeranjang.length; i++) {
    subtotal += kasirCariHarga(kasirKeranjang[i]);
  }

  return subtotal;
};


// 5. Arrow function: menghitung diskon
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};


// 6. Arrow function ringkas: menghitung pajak
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;


// 7. Function untuk mencetak struk
function kasirCetakStruk(subtotal, diskon, pajak) {
  const total = subtotal - diskon + pajak;

  let daftarItem = "";

  for (let i = 0; i < kasirKeranjang.length; i++) {
    daftarItem += `${i + 1}. ${kasirKeranjang[i]} - Rp${kasirCariHarga(kasirKeranjang[i])}\n`;
  }

  console.log(`
========== STRUK KASIR ==========
Daftar Belanja:
${daftarItem}
---------------------------------
Subtotal : Rp${subtotal}
Diskon   : Rp${diskon}
Pajak    : Rp${pajak}
Total    : Rp${total}
=================================
  `);
}


// 8. SKENARIO 1
console.log("\n===== SKENARIO 1 =====");

console.log("Keranjang:", kasirKeranjang);

let kasirSubtotal = kasirHitungSubtotal();
let kasirDiskon = kasirHitungDiskon(kasirSubtotal);
let kasirPajak = kasirHitungPajak(kasirSubtotal - kasirDiskon);

kasirCetakStruk(kasirSubtotal, kasirDiskon, kasirPajak);

// Hasil skenario 1:
// Subtotal: Rp74500
// Diskon  : Rp7450
// Pajak   : Rp7375.5
// Total   : Rp74425.5


// 9. SKENARIO 2
// Ganti keranjang agar tingkat diskonnya berbeda.
kasirKeranjang = [
  "Nasi Goreng",
  "Nasi Goreng",
  "Nasi Goreng",
  "Nasi Goreng",
  "Kopi Susu"
];

console.log("\n===== SKENARIO 2 =====");
console.log("Keranjang:", kasirKeranjang);

kasirSubtotal = kasirHitungSubtotal();
kasirDiskon = kasirHitungDiskon(kasirSubtotal);
kasirPajak = kasirHitungPajak(kasirSubtotal - kasirDiskon);

kasirCetakStruk(kasirSubtotal, kasirDiskon, kasirPajak);

// Hasil skenario 2:
// Subtotal: Rp106000
// Diskon  : Rp15900
// Pajak   : Rp9911
// Total   : Rp94111


// 10. JAWABAN PERTANYAAN

// 1. push() mengubah array asli.
// Buktinya bisa dilihat dari console.log sebelum dan sesudah splice.

// 2. splice() mengubah array asli, sedangkan slice() membuat
// array baru. Contoh: splice(4, 1, "Jus Jeruk") mengganti item
// indeks 4, sedangkan slice(0, 3) mengambil 3 item pertama.

// 3. kasirCariHarga memakai return agar harga dapat digunakan
// untuk perhitungan subtotal. Jika hanya memakai console.log,
// harga tidak dikembalikan sehingga subtotal tidak terhitung benar.

// 4. Parameter: namaMenu dalam kasirCariHarga(namaMenu).
// Argumen: "Kopi Susu" dalam kasirCariHarga("Kopi Susu").
// Parameter adalah tempat menerima data, argumen adalah nilai
// yang dikirim saat function dipanggil.

// 5. kasirHitungPajak(80000) memakai tarif default 0.11.
// kasirHitungPajak(80000, 0.10) memakai tarif 0.10 yang diberikan.

// 6. Function declaration kasirCariHarga dapat dipanggil sebelum
// deklarasinya karena hoisting.
// Function expression kasirHitungSubtotal yang disimpan dalam const
// tidak dapat dipanggil sebelum deklarasi dijalankan.
// Percobaan pemanggilan sebelum deklarasi sudah ditulis sebagai
// komentar di atas agar seluruh program tetap dapat berjalan.
