// === LANGKAH 1 ===
// Program pencatatan data usaha
// Dibuat oleh rekan sebelumnya

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020;
const TARIF_PAJAK = 0.11;

let statusBuka = true;
//FIX:variabel tidakboleh dideklarasikan 2 kali dengan let.
let website = null;
let jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namaUsaha);
console.log("Kota: " + kotaUsaha);
console.log("Tahun berdiri berikutnya: " + ( tahunBerdiri + 1));

let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK);//FIX:harus menggunakan tanda * untuk perkalian
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let harga = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + harga);
console.log("Produk ke-3: " + produk[2]);
/*cetak status usaha
console.log("StatusBuka: " + statusBuka);*/

 // CATATAN BUG:
// 1. "2020" + 1 menghasilkan "20201" karena tahunBerdiri bertipe string.
//    Solusi: gunakan Number(tahunBerdiri) + 1.
//
// 2. TARIF_PAJAK menggunakan const sehingga nilainya tidak boleh diubah.
//
// 3. namausaha salah penulisan, seharusnya namaUsaha.
//
// 4. Console.log salah, seharusnya console.log.
//
// 5. Operator "x" tidak valid untuk perkalian, gunakan "*".
// 
// 6. website dideklarasikan dua kali dengan let.
//
// 7. produk[3] menghasilkan undefined karena produk hanya memiliki
//    indeks 0 sampai 2.

// === LANGKAH 2 ===
// ============================================================
// PROGRAM PENCATATAN DATA USAHA - KOPI SENJA
// ============================================================


// ============================================================
// LANGKAH 2: BENAHI STRUKTUR DATA
// ============================================================

// Object usaha menyimpan semua informasi utama usaha.
// const dipilih karena object usaha tidak akan diganti dengan
// object lain. Properti di dalamnya masih bisa ditambahkan/diubah.
const usaha = {
    nama: "Kopi Senja",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    statusBuka: true,
    whatsapp: "08123456789",
    website: null
};


// Array berisi object produk.
// Setiap object memiliki nama dan harga.
const daftarProduk = [
    { nama: "Kopi Susu", harga: 18000 },
    { nama: "Es Teh Manis", harga: 7500 },
    { nama: "Roti Bakar", harga: 15000 },
    { nama: "Kentang Goreng", harga: 12000 }
];


// Cetak nama usaha dengan notasi titik
console.log(usaha.nama);

// Cetak kota dengan notasi kurung siku
console.log(usaha["kota"]);

// Cetak produk pertama dan produk terakhir
console.log(daftarProduk[0]);
console.log(daftarProduk[daftarProduk.length - 1]);


// ------------------------------------------------------------
// CATATAN LANGKAH 2
// ------------------------------------------------------------

// 1. Mengapa nomor WhatsApp disimpan sebagai string?
// Karena nomor WhatsApp bukan digunakan untuk operasi matematika.
// Contohnya "08123456789" harus tetap mempertahankan angka 0
// di bagian depan. Jika disimpan sebagai number, angka 0 bisa hilang.
//
// 2. Mengapa website diberi null?
// null menunjukkan bahwa website memang belum memiliki nilai.
// undefined biasanya berarti sebuah variabel/properti belum diberi nilai.
//
// Contoh:
// let alamat;
// Nilainya adalah undefined.
//
// Sedangkan:
// let website = null;
// Artinya kita sengaja memberikan nilai kosong.
//
// 3. Mengapa daftarProduk[4] bukan produk ke-4?
// Karena array dimulai dari indeks 0.
// Produk ke-1 = indeks 0
// Produk ke-2 = indeks 1
// Produk ke-3 = indeks 2
// Produk ke-4 = indeks 3
//
// Jadi daftarProduk[4] sebenarnya menunjuk ke produk ke-5.
// Karena produk ke-5 tidak ada, hasilnya adalah undefined.


// ============================================================
// LANGKAH 3: PERHITUNGAN DAN TAMPILAN
// ============================================================

const TARIFPAJAK = 0.11;
const tahunSekarang = 2026;

// const digunakan karena tarif pajak dan tahun sekarang
// tidak akan diganti selama program berjalan.


// Menghitung harga setelah pajak untuk setiap produk.
// map menghasilkan array baru sehingga daftarProduk asli
// tetap memiliki harga awal.
const produkDenganPajak = daftarProduk.map((produk) => {
    const hargaSetelahPajak = produk.harga * (1 + TARIF_PAJAK);
    return {
        nama: produk.nama,
        harga: produk.harga,
        hargaSetelahPajak: hargaSetelahPajak
    };
});


// Mengambil semua harga asli produk
const semuaHarga = daftarProduk.map((produk) => produk.harga);

// Mencari harga termurah dan termahal
const hargaTermurah = Math.min(...semuaHarga);
const hargaTermahal = Math.max(...semuaHarga);

// Menghitung usia usaha
const usiaUsaha = tahunSekarang - usaha.tahunBerdiri;


// Mengubah status boolean menjadi teks
const statusTeks = usaha.statusBuka ? "Buka" : "Tutup";

// Menampilkan website
const websiteTeks = usaha.website ?? "belum ada";


// Menampilkan kartu usaha menggunakan template literal
console.log('KARTU-USAHA');

console.log(`
Nama Usaha : ${usaha.nama}
Pemilik    : ${usaha.pemilik}
Kota       : ${usaha.kota}
Usia Usaha : ${usiaUsaha} tahun
Status     : ${statusTeks}
Website    : ${websiteTeks}

Daftar Produk (harga + PPN 11%):
${produkDenganPajak.map((produk, index) =>
    `${index + 1}. ${produk.nama} : Rp ${produk.hargaSetelahPajak}`
).join("\n")}

Termurah : Rp ${hargaTermurah}
Termahal : Rp ${hargaTermahal}
`);



// ------------------------------------------------------------
// CATATAN PEMILIHAN const DAN let
// ------------------------------------------------------------

// Semua variabel pada bagian ini menggunakan const karena
// variabelnya tidak perlu diberikan nilai baru.
//
// usaha            -> const, karena object usaha tetap digunakan.
// daftarProduk     -> const, karena array tetap digunakan.
// TARIF_PAJAK      -> const, karena tarif pajak tetap.
// tahunSekarang    -> const, karena nilainya ditetapkan 2026.
// produkDenganPajak-> const, karena array hasil tidak diganti.
// semuaHarga       -> const, karena array harga tidak diganti.
// hargaTermurah    -> const, karena hasil tidak diubah.
// hargaTermahal    -> const, karena hasil tidak diubah.
// usiaUsaha        -> const, karena hasil tidak diubah.
// statusTeks       -> const, karena hasil tidak diubah.
// websiteTeks      -> const, karena hasil tidak diubah.
//
// Jika suatu variabel memang tidak perlu diberi nilai baru,
// const lebih tepat digunakan daripada let.


// ------------------------------------------------------------
// PERHITUNGAN MANUAL
// ------------------------------------------------------------

// Contoh produk: Kopi Susu
//
// Harga awal = Rp18.000
// Pajak = 11% = 0,11
//
// Harga setelah pajak:
// = 18.000 x (1 + 0,11)
// = 18.000 x 1,11
// = 19.980
//
// Hasil program juga:
// Rp 19.980
//
// Jadi hasil perhitungan manual dan program adalah sama.


// ------------------------------------------------------------
// JIKA HARGA PRODUK DIUBAH
// ------------------------------------------------------------

// Contoh perubahan harga produk pertama:
daftarProduk[0].harga = 20000;

// Perhitungan ulang setelah harga diubah
const hargaBaruSetelahPajak =
    daftarProduk[0].harga * (1 + TARIF_PAJAK);

console.log(
    `Harga ${daftarProduk[0].nama} setelah perubahan: Rp ${hargaBaruSetelahPajak}`
);

// Hasil:
// Rp 22.200
//
// Jadi, jika harga pada object diubah, perhitungan yang dilakukan
// setelah perubahan akan menggunakan harga baru.
//
// Perhitungan yang SUDAH tercetak sebelumnya tidak berubah,
// karena console.log hanya mencetak hasil pada saat kode dijalankan.
// Namun jika perhitungan dijalankan kembali, hasilnya ikut berubah.


// ============================================================
// LANGKAH 4: DETEKTIF TIPE DATA
// ============================================================

// Tebakan: "number"
console.log(typeof 42);
// Hasil asli: "number" ✔

// Tebakan: "string"
console.log(typeof "42");
// Hasil asli: "string" ✔

// Tebakan: "boolean"
console.log(typeof true);
// Hasil asli: "boolean" ✔

// Tebakan: "undefined"
console.log(typeof undefined);
// Hasil asli: "undefined" ✔

// Tebakan: "object"
console.log(typeof null);
// Hasil asli: "object" ✔

// Tebakan: "object"
console.log(typeof [1, 2, 3]);
// Hasil asli: "object" ✔

// Tebakan: "object"
console.log(typeof { nama: "Budi" });
// Hasil asli: "object" ✔

// Tebakan: "53"
console.log("5" + 3);
// Hasil asli: "53" ✔

// Tebakan: "15"
console.log("5" * 3);
// Hasil asli: 15 ✔

// Tebakan: NaN
console.log("abc" * 2);
// Hasil asli: NaN ✔

// Tebakan: Infinity
console.log(10 / 0);
// Hasil asli: Infinity ✔

// Tebakan: "object"
console.log(typeof usaha.website);
// Hasil asli: "object" ✔


// ------------------------------------------------------------
// CATATAN TIPE DATA
// ------------------------------------------------------------

// Tidak ada tebakan yang meleset pada contoh di atas.
//
// typeof null menghasilkan "object", tetapi bukan berarti null
// benar-benar sebuah object. Ini merupakan perilaku lama JavaScript
// yang dipertahankan demi kompatibilitas.
//
// Cara mudah menjelaskannya:
// "null berarti tidak ada nilai object, tetapi typeof null
// secara khusus menghasilkan 'object'. Jadi hasil typeof-nya
// sedikit membingungkan, tetapi memang begitu aturan JavaScript."
//
// "5" + 3 menghasilkan "53" karena + dapat digunakan untuk
// menggabungkan string.
//
// "5" * 3 menghasilkan 15 karena operator * hanya digunakan
// untuk perkalian. JavaScript mengubah string "5" menjadi angka 5.
//
// "abc" * 2 menghasilkan NaN karena teks "abc" tidak dapat
// diubah menjadi angka untuk perkalian.
//
// 10 / 0 menghasilkan Infinity karena dalam JavaScript
// pembagian angka positif dengan nol menghasilkan Infinity.


// ============================================================
// LANGKAH 5: MODIFIKASI DADAKAN
// ============================================================

// 1. Menambahkan satu produk baru
daftarProduk.push({
    nama: "Pisang Goreng",
    harga: 10000
});


// 2. Menambahkan properti Instagram ke object usaha
usaha.instagram = "@kopisenja";


// 3. Perhitungan baru: total harga semua produk
const totalHarga = daftarProduk.reduce(
    (total, produk) => total + produk.harga,
    0
);

console.log(`Instagram : ${usaha.instagram}`);
console.log(`Total harga semua produk : Rp ${totalHarga}`);


// ------------------------------------------------------------
// CATATAN PERUBAHAN KODE
// ------------------------------------------------------------

// Bagian yang harus diubah:
// 1. daftarProduk perlu ditambahkan object produk baru.
// 2. object usaha perlu ditambahkan properti instagram.
// 3. Perlu menambahkan kode perhitungan baru.
//
// Bagian yang tidak perlu diubah:
// TARIF_PAJAK tidak perlu diubah karena tetap 11%.
// Struktur object produk tidak perlu diubah karena produk baru
// tetap menggunakan format { nama, harga }.
// Perhitungan pajak sebelumnya tidak perlu diubah karena
// menggunakan data dari daftarProduk.
//
// Penambahan produk tidak membutuhkan perubahan manual pada
// perhitungan jika program mengambil data produk secara dinamis.


// ------------------------------------------------------------
// CONTOH STATEMENT DAN EXPRESSION
// ------------------------------------------------------------

// CONTOH STATEMENT 1:
daftarProduk.push({
    nama: "Pisang Goreng",
    harga: 10000
});
// Ini adalah statement karena merupakan sebuah perintah
// untuk menambahkan data ke array.

// CONTOH STATEMENT 2:
usaha.instagram = "@kopisenja";
// Ini adalah statement karena merupakan perintah assignment
// untuk memberikan nilai pada properti object.


// CONTOH EXPRESSION 1:
18_000 * (1 + TARIF_PAJAK)
// Expression ini dievaluasi menjadi 19980.

// CONTOH EXPRESSION 2:
tahunSekarang - usaha.tahunBerdiri
// Expression ini dievaluasi menjadi 6.


// ============================================================
// BONUS
// ============================================================

// 1. var di dalam blok if masih dapat diakses dari luar blok.

if (true) {
    var pesanVar = "Variabel var dapat keluar dari blok if";
}

console.log(pesanVar);


// Sedangkan let hanya berlaku di dalam blok.
if (true) {
    let pesanLet = "Variabel let hanya di dalam blok";
}

// Baris berikut akan menghasilkan ReferenceError jika dijalankan:
// console.log(pesanLet);


// Agar program tetap berjalan, kita bisa membuktikannya
// menggunakan try...catch.
try {
    if (true) {
        let pesanLet = "Hanya di dalam blok";
    }

    console.log(pesanLet);
} catch (error) {
    console.log("let di luar blok: ReferenceError");
}


// 2. var dapat dideklarasikan ulang dengan nama yang sama.
var jumlah = 10;
var jumlah = 20;

console.log(jumlah);
// Hasil: 20


// let tidak boleh dideklarasikan ulang dalam scope yang sama.
// Contoh berikut akan menghasilkan SyntaxError jika ditulis
// langsung:
//
// let nilai = 10;
// let nilai = 20;
//
// Untuk membuktikannya tanpa menghentikan seluruh program,
// digunakan eval dan error ditangkap dengan try...catch.
try {
    eval(`
        let nilai = 10;
        let nilai = 20;
    `);
} catch (error) {
    console.log("let tidak boleh dideklarasikan ulang: SyntaxError");
}


// ------------------------------------------------------------
// SKENARIO BUG var
// ------------------------------------------------------------

// Dalam program besar, penggunaan var di dalam blok if atau
// perulangan dapat menyebabkan variabel tidak sengaja digunakan
// di luar blok.
//
// Contohnya, seorang programmer membuat var dengan nama
// "status" di dalam if. Karena var tidak memiliki block scope,
// nilai tersebut bisa memengaruhi kode lain yang juga memakai
// nama variabel yang sama.
//
// Akibatnya program dapat memberikan hasil yang tidak sesuai.
// let lebih aman karena memiliki block scope.


// ============================================================
// RINGKASAN UNTUK VERIFIKASI LISAN
// ============================================================

// 1. Statement adalah perintah/instruksi dalam program.
//    Contoh:
//    usaha.instagram = "@kopisenja";
//
//    Expression adalah kode yang menghasilkan sebuah nilai.
//    Contoh:
//    tahunSekarang - usaha.tahunBerdiri
//    Hasilnya adalah 6.
//
// 2. const digunakan jika variabel tidak perlu diganti nilainya.
//    let digunakan jika nilainya memang akan berubah.
//
// 3. "2020" + 1 menjadi "20201" karena "2020" adalah string,
//    sehingga + digunakan untuk menggabungkan string.
//
// 4. undefined berarti nilai belum diberikan atau properti tidak
//    ditemukan. null berarti sengaja diberikan nilai kosong.
//
// 5. Jika angka 2020 diberi tanda kutip, maka menjadi string.
//    Contoh:
//    "2020" + 1 = "20201"
//
// 6. Bug yang ditemukan pada kode awal:
//    TARIF_PAJAK menggunakan const tetapi mencoba diubah,
//    website dideklarasikan dua kali, namausaha salah penulisan,
//    Console.log salah penulisan, dan operator x tidak valid.

