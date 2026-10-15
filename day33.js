//langkah 1 bagian a
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);//output:kopi susu
console.log(produk[kunci]);//output:kopi susu
console.log(produk["harga"]);//output:undifined
console.log(produk.stok);//output:10
console.log("kategori" in produk);//output:true
console.log("stok" in produk);//output:false
console.log(Object.keys(produk));//output:nama, harga, kategori
console.log(Object.values(produk));//output:kopi susu harga 20000 stok 10

//bagian b
const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);
//output:
/*
30000
Rina: Rp 30000
Rina: Rp 20000
20000
*/

//bagian c
const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}
/*
Senin
Selasa
0
1
nama: Kopi
harga: 18000
K
o
p
i
*/

//langkah 2
const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX 1: Gunakan this untuk mengakses saldoKas milik object
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
    // FIX 2: Return agar saldo terbaru bisa dikembalikan
    return this.saldoKas;
  },

  // FIX 3: Tambahkan return agar sisa saldo dikembalikan
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// FIX 4: Gunakan bracket notation karena nama properti mengandung tanda hubung
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);

// FIX 5: Gunakan delete untuk menghapus properti sepenuhnya
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

// FIX 6: Gunakan for...of untuk mengambil nilai array
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// Cetak semua properti object
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX 7: Gunakan Object.keys(), bukan Object.key()
console.log(Object.keys(info));

// Pertanyaan 3: Perbedaan undefined dan delete
const contoh = { kataSandi: "abc123" };

contoh.kataSandi = undefined;
console.log("Setelah undefined:", "kataSandi" in contoh); // true

delete contoh.kataSandi;
console.log("Setelah delete:", "kataSandi" in contoh); // false
// ==========================================
// LANGKAH 3: KASIR KEDAI SENJA
// ==========================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,

  jamOperasional: {
    buka: "08:00",
    tutup: "21:00"
  },

  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Es Teh Manis", kategori: "minuman", harga: 8000, stok: 20 },
    { nama: "Americano", kategori: "minuman", harga: 15000, stok: 10 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 10 },
    { nama: "Pisang Goreng", kategori: "makanan", harga: 12000, stok: 15 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 25000, stok: 10 }
  ],

  keranjang: [],

  // 1. Mencari harga menu
  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }

    return 0;
  },

  // 2. Menambahkan menu ke keranjang
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu && jumlah > 0 && item.stok >= jumlah) {
        this.keranjang.push({
          nama: namaMenu,
          jumlah: jumlah
        });

        item.stok -= jumlah;
        return true;
      }
    }

    return false;
  },

  // 3. Menghitung subtotal
  hitungSubtotal() {
    let subtotal = 0;

    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }

    return subtotal;
  },

  // 4. Menghitung diskon
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15;
    } else if (subtotal >= 50000) {
      return subtotal * 0.10;
    } else if (subtotal >= 25000) {
      return subtotal * 0.05;
    } else {
      return 0;
    }
  },

  // 5. Mencetak struk
  cetakStruk() {
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const setelahDiskon = subtotal - diskon;
    const pajak = Math.round(setelahDiskon * 0.11);
    const total = setelahDiskon + pajak;

    console.log("\n===== STRUK PEMBELIAN =====");
    console.log("Kedai   : " + this.nama);
    console.log("Kota    : " + this.kota);
    console.log("---------------------------");

    let nomor = 1;

    for (let item of this.keranjang) {
      const harga = this.cariHarga(item.nama);
      const totalItem = harga * item.jumlah;

      console.log(
        nomor + ". " + item.nama +
        " | Jumlah: " + item.jumlah +
        " | Harga: Rp " + harga +
        " | Total: Rp " + totalItem
      );

      nomor++;
    }

    console.log("---------------------------");
    console.log("Subtotal : Rp " + subtotal);
    console.log("Diskon   : Rp " + diskon);
    console.log("Pajak 11%: Rp " + pajak);
    console.log("TOTAL    : Rp " + total);
    console.log("===========================");

    this.saldoKas += total;

    console.log("Saldo kas sekarang: Rp " + this.saldoKas);
  }
};


// ==========================================
// 6. PROPERTI DINAMIS
// ==========================================

const namaProperti = "website";

// Bracket notation untuk menambahkan properti
kasirKedai[namaProperti] = "www.kedaiesenja.com";

console.log(namaProperti in kasirKedai); // true

// Menghapus properti
delete kasirKedai[namaProperti];

console.log(namaProperti in kasirKedai); // false


// ==========================================
// 7. FOR...IN PADA OBJECT
// ==========================================

console.log("\nJam operasional:");

for (let kolom in kasirKedai.jamOperasional) {
  console.log(kolom + ": " + kasirKedai.jamOperasional[kolom]);
}

console.log("\nMenu pertama:");

for (let kolom in kasirKedai.menu[0]) {
  console.log(kolom + ": " + kasirKedai.menu[0][kolom]);
}


// ==========================================
// 8. OBJECT.KEYS DAN OBJECT.VALUES
// ==========================================

console.log(Object.keys(kasirKedai.jamOperasional));
// [ 'buka', 'tutup' ]

console.log(Object.values(kasirKedai.jamOperasional));
// [ '08:00', '21:00' ]


// ==========================================
// 9. MENGHITUNG HURUF "a"
// ==========================================

let jumlahHurufA = 0;

for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}

console.log("Jumlah huruf a:", jumlahHurufA); // 2


// ==========================================
// 10. UJI SKENARIO 1: DISKON 10%
// ==========================================

// Kopi Susu x2 + Roti Bakar x1
console.log("\nHASIL TAMBAH KERANJANG SKENARIO 1:");
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 2)); // true
console.log(kasirKedai.tambahKeKeranjang("Roti Bakar", 1)); // true

kasirKedai.cetakStruk();

/*
Hasil skenario 1:
Subtotal : Rp 51000
Diskon   : Rp 5100
Pajak 11%: Rp 5049
TOTAL    : Rp 50949
Saldo kas: Rp 50949
*/


// ==========================================
// 11. UJI SKENARIO 2: DISKON 15%
// ==========================================

// Nasi Goreng x2 + Kopi Susu x2 + Pisang Goreng x1
kasirKedai.keranjang = [];

console.log("\nHASIL TAMBAH KERANJANG SKENARIO 2:");
console.log(kasirKedai.tambahKeKeranjang("Nasi Goreng", 2)); // true
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 2)); // true
console.log(kasirKedai.tambahKeKeranjang("Pisang Goreng", 1)); // true

kasirKedai.cetakStruk();

/*
Hasil skenario 2:
Subtotal : Rp 111000
Diskon   : Rp 16650
Pajak 11%: Rp 10379
TOTAL    : Rp 104729
Saldo kas kumulatif: Rp 155678
*/


// ==========================================
// 12. UJI KASUS GAGAL
// ==========================================

console.log(
  kasirKedai.tambahKeKeranjang("Es Krim", 1)
); // false: menu tidak ada

console.log(
  kasirKedai.tambahKeKeranjang("Nasi Goreng", 999)
); // false: stok tidak cukup


// ==========================================
// 13. PERCOBAAN THIS TANPA THIS
// ==========================================

// Jika baris ini dijalankan di dalam method:
// saldoKas += total;
// Error: ReferenceError: saldoKas is not defined
//
// Alasannya: saldoKas bukan variabel bebas.
// Seharusnya menggunakan this.saldoKas.


// ==========================================
// 14. PERCOBAAN FOR...OF PADA OBJECT
// ==========================================

// for (let item of kasirKedai) {
//   console.log(item);
// }
//
// Error: TypeError: kasirKedai is not iterable
//
// Object biasa tidak bisa langsung ditelusuri dengan for...of.
// Gunakan for...in untuk menelusuri properti object.
