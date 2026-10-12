// Tebakan: 1 tidak masuk, 2 masuk, 3 tidak masuk,
// 4 masuk, 5 tidak masuk, 6 masuk.

if (0) {
  console.log("1: masuk");
  // Hasil asli: tidak tampil karena 0 adalah Falsy.
}
if ("0") {
  console.log("2: masuk");
  // Hasil asli: 2: masuk, karena string tidak kosong adalah Truthy.
}
if ("") {
  console.log("3: masuk");
  // Hasil asli: tidak tampil karena string kosong adalah Falsy.
}
if ([]) {
  console.log("4: masuk");
  // Hasil asli: 4: masuk, karena array kosong adalah Truthy.
}
if (null) {
  console.log("5: masuk");
  // Hasil asli: tidak tampil karena null adalah Falsy.
}
if (-1) {
  console.log("6: masuk");
  // Hasil asli: 6: masuk, karena angka -1 adalah Truthy.
}

// Jawaban pertanyaan:
// 1. "0" adalah string yang tidak kosong, sedangkan [] adalah objek
//    array kosong. Keduanya termasuk Truthy dalam JavaScript.

let belanja = 120000;

// Tebakan: Diskon 5%
// Hasil asli: Diskon 5%

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Jawaban pertanyaan:
// 2. Kondisi pertama sudah benar untuk belanja 120000 sehingga
//    kondisi berikutnya tidak diperiksa. Urutkan dari terbesar
//    ke terkecil agar diskon 15% dapat diperoleh.

if (belanja >= 100000) {
  console.log("Diskon 15%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 25000) {
  console.log("Diskon 5%");
} else {
  console.log("Tidak ada diskon");
}

// Hasil perbaikan: Diskon 15%

let hari = "sabtu";

// Tebakan: Promo Akhir Pekan dan Promo Keluarga
// Hasil asli: Promo Akhir Pekan dan Promo Keluarga

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// Jawaban pertanyaan:
// 3. Dua baris tercetak karena tidak ada break setelah case "sabtu",
//    sehingga program berlanjut ke case "minggu" (fall-through).
//    Tambahkan break setelah console.log pada case "sabtu".

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
    break;
  case "sabtu":
    console.log("Promo Akhir Pekan");
    break;
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}


// LANGKAH 2: PERBAIKAN 5 KESALAHAN

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX 1: Urutkan diskon dari nominal terbesar ke terkecil.
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX 2: Gunakan jenisMember, sesuai nama variabel.
// FIX 3: Tambahkan break agar member gold tidak lanjut ke silver.
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
    break;
}

// FIX 4: Gunakan === untuk membandingkan, bukan = untuk mengisi nilai.
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir
let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX 5: Gunakan >= agar uang yang sama dengan total tagihan juga lunas.
let uangBayar = 67000;

if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Jawaban pertanyaan:
//
// 1. Lima kesalahan:
// - Urutan diskon salah; kondisi terbesar harus diperiksa dahulu.
// - Nama jenismember salah; harus ditulis jenisMember.
// - Case gold tidak memiliki break sehingga nilainya tertimpa silver.
// - Operator = mengisi nilai, bukan membandingkan; gunakan ===.
// - Operator > tidak menerima pembayaran pas; gunakan >=.
//
// 2. Kesalahan yang menyebabkan error:
//    jenismember menimbulkan ReferenceError karena variabel tersebut
//    tidak didefinisikan. Kesalahan lainnya membuat hasil atau logika
//    tidak sesuai dengan tujuan program.
//
// 3. = digunakan untuk memberi nilai, == membandingkan dengan
//    konversi tipe tertentu, sedangkan === membandingkan nilai dan
//    tipe tanpa konversi. Operator = tidak error karena assignment
//    adalah sintaks JavaScript yang sah, tetapi mengubah isi variabel.


// LANGKAH 3: PROGRAM KASIR SENDIRI

function jalankanKasir(data) {
  const kasirNamaPelanggan = data.nama;
  const kasirTotalBelanja = data.belanja;
  const kasirHari = data.hari;
  const kasirJenisMember = data.member;
  const kasirKodeVoucher = data.voucher;
  const kasirUangBayar = data.bayar;

  let kasirDiskon = 0;
  let kasirPotonganMember = 0;
  let kasirPromoHari = 0;
  let kasirPotonganVoucher = 0;

  // Diskon belanja
  if (kasirTotalBelanja >= 100000) {
    kasirDiskon = kasirTotalBelanja * 0.15;
  } else if (kasirTotalBelanja >= 50000) {
    kasirDiskon = kasirTotalBelanja * 0.10;
  } else if (kasirTotalBelanja >= 25000) {
    kasirDiskon = kasirTotalBelanja * 0.05;
  } else {
    kasirDiskon = 0;
  }

  // Potongan member
  switch (kasirJenisMember) {
    case "gold":
      kasirPotonganMember = 5000;
      break;
    case "silver":
      kasirPotonganMember = 2000;
      break;
    default:
      kasirPotonganMember = 0;
      break;
  }

  // Promo hari
  switch (kasirHari) {
    case "jumat":
      kasirPromoHari = 3000;
      break;
    case "sabtu":
    case "minggu":
      // FIX: Tidak ada break di antara sabtu dan minggu.
      kasirPromoHari = 5000;
      break;
    default:
      kasirPromoHari = 0;
      break;
  }

  // Validasi nama menggunakan Truthy/Falsy
  if (kasirNamaPelanggan) {
    console.log(`Pelanggan: ${kasirNamaPelanggan}`);
  } else {
    console.log("Nama pelanggan belum diisi");
  }

  // Validasi voucher menggunakan Truthy/Falsy
  if (kasirKodeVoucher) {
    kasirPotonganVoucher = 2000;
    console.log(`Voucher dipakai: ${kasirKodeVoucher}`);
  } else {
    kasirPotonganVoucher = 0;
    console.log("Voucher tidak dipakai");
  }

  // Total akhir
  const kasirTotalAkhir =
    kasirTotalBelanja -
    kasirDiskon -
    kasirPotonganMember -
    kasirPromoHari -
    kasirPotonganVoucher;

  // Status pembayaran
  let kasirStatusPembayaran;

  if (kasirUangBayar > kasirTotalAkhir) {
    kasirStatusPembayaran =
      `Lunas, kembalian Rp${kasirUangBayar - kasirTotalAkhir}`;
  } else if (kasirUangBayar === kasirTotalAkhir) {
    kasirStatusPembayaran = "Lunas (uang pas)";
  } else {
    kasirStatusPembayaran =
      `Kurang Rp${kasirTotalAkhir - kasirUangBayar}`;
  }

  // Output menggunakan template literal
  console.log(`
===== STRUK KASIR =====
Total belanja: Rp${kasirTotalBelanja}
Diskon: Rp${kasirDiskon}
Potongan member: Rp${kasirPotonganMember}
Promo hari: Rp${kasirPromoHari}
Potongan voucher: Rp${kasirPotonganVoucher}
Total akhir: Rp${kasirTotalAkhir}
Status: ${kasirStatusPembayaran}
=======================
  `);
}

// UJI 3 SKENARIO

// Skenario 1: diskon 10%, promo sabtu, pembayaran lebih.
console.log("--- SKENARIO 1 ---");
jalankanKasir({
  nama: "Rina",
  belanja: 90000,
  hari: "sabtu",
  member: "silver",
  voucher: "SENJA10",
  bayar: 100000
});

// Skenario 2: diskon 15%, nama dan voucher kosong,
// promo jumat, pembayaran pas.
console.log("--- SKENARIO 2 ---");
jalankanKasir({
  nama: "",
  belanja: 120000,
  hari: "jumat",
  member: "gold",
  voucher: "",
  bayar: 94000
});

// Skenario 3: diskon 5%, hari default, pembayaran kurang.
console.log("--- SKENARIO 3 ---");
jalankanKasir({
  nama: "Budi",
  belanja: 30000,
  hari: "senin",
  member: "biasa",
  voucher: "",
  bayar: 20000
});

// Jawaban pertanyaan:
//
// 1. Diskon diurutkan dari terbesar agar belanja 100000 atau lebih
//    langsung mendapat diskon 15%. Jika dibalik, kondisi 5% akan
//    terpenuhi lebih dahulu sehingga diskon yang lebih besar terlewat.
//
// 2. switch cocok untuk membandingkan satu variabel hari dengan
//    beberapa nilai tetap, seperti jumat, sabtu, dan minggu.
//
// 3. break sengaja tidak ditulis di antara case sabtu dan minggu.
//    Keduanya menjalankan kode promo yang sama, yaitu Rp5000.
//
// 4. Tiga nilai Falsy: "", 0, dan null.
//    Contoh lain: undefined, false, dan NaN.
//
// 5. if (-1) bernilai Truthy karena -1 bukan nol.
//    if (-1 > 0) bernilai false karena -1 tidak lebih besar dari 0.
//    Kondisi pertama memeriksa Truthy/Falsy, sedangkan kondisi kedua
//    memeriksa perbandingan angka.