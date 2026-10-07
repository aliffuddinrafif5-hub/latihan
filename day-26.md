1.Konflik terjadi ketika dua branch mengubah baris yang sama pada file yang sama, sehingga Git tidak dapat menentukan versi mana yang benar saat kedua branch digabungkan. 

Kamu dan temanmu sama-sama bekerja pada file index.html.
Di branch milikmu, kamu mengubah baris ke-10 menjadi:
<h1 style="color: red;">Selamat Datang</h1>
Di branch milik temanmu, baris yang sama diubah menjadi:
<h1 style="color: blue;">Selamat Datang</h1>
Saat kalian mencoba menggabungkan kedua branch, Git mendeteksi pertentangan dan menghentikan proses merge — meminta kamu untuk menyelesaikannya secara manual.
2.
	a.
Penanda
Artinya
<<<<<<< HEAD
Awal dari versi milikmu (branch yang sedang aktif)
=======
Garis pemisah antara kedua versi
>>>>>>> branch-teman
Akhir dari versi yang datang dari branch lain


b.Versi cabang aktifmu:
html
Preview
<h1 style="color: red;">Selamat Datang</h1>

c. Versi cabang yang datang:
html
Preview
<h1 style="color: blue;">Selamat Datang</h1>
3.VS Code menampilkan konflik secara visual dengan warna berbeda dan menyediakan tombol pilihan di atas area konflik:
Accept Current Change — Pertahankan versimu dan buang versi yang datang.
Accept Incoming Change — Buang versimu dan gunakan versi yang datang.
Accept Both Changes — Gabungkan keduanya; kedua baris akan dipertahankan.
Compare Changes — Tampilkan perbandingan kedua versi secara berdampingan.
4. Urutan Perintah Setelah Menyelesaikan Konflik
git add nama_berkas — Menandai berkas yang sudah diperbaiki siap dicatat (menambah ke panggung).
git commit -m "pesan perbaikan" — Mencatat perubahan ke dalam riwayat versi. Git biasanya akan menulis pesan draf yang sudah disiapkan.
git push — Mengirim hasil gabungan ke repositori jauh (misalnya GitHub).
5.
git merge --abort
Membatalkan proses merge dan kembali ke kondisi sebelumnya

Perintah ini berguna ketika konflik terlalu kompleks dan kamu ingin mendiskusikannya dengan rekan tim terlebih dahulu sebelum melanjutkan. 
6.Table
Praktik
Alasan Mengurangi Risiko
Sering membarui cabang lokal dengan git pull
Mengetahui perubahan terbaru lebih awal sehingga konflik kecil diselesaikan segera, tidak menumpuk menjadi besar.
Membuat cabang terpisah untuk setiap fitur/perbaikan
Setiap orang bekerja di ruang berbeda → kemungkinan menyentuh berkas yang sama berkurang.
Membagi tugas agar tidak mengerjakan bagian berkas yang sama secara bersamaan
Mengurangi kesempatan dua orang mengedit baris yang sama di saat bersamaan.
Menggabungkan ke cabang utama sesering mungkin
Menjaga perubahan tetap kecil dan terpisah; semakin lama menunda, semakin besar kemungkinan perubahan berbenturan.


7. Pentingnya Pesan Commit yang Jelas
Pesan commit yang baik membantu tim memahami apa yang diubah dan mengapa, memudahkan penelusuran riwayat, pemecahan masalah, dan kembali ke versi lama jika perlu.
Table
Buruk
Baik
perbaikan
memperbaiki warna teks judul agar terbaca di latar gelap
update
menambahkan tautan media sosial ke bagian bawah halaman
ubah lagi
mengubah lebar kolom formulir agar sesuai layar ponsel


8. Conventional Commits
Format:
plaintext
tipe: ringkasan

Tipe menjelaskan sifat perubahan.
Table
Tipe
Fungsi
Contoh
feat
Menambah fitur baru
feat: menambahkan halaman daftar produk
fix
Memperbaiki kesalahan/bug
fix: mengatasi tombol kirim tidak merespons
docs
Hanya mengubah berkas dokumentasi
docs: memperbarui panduan pemasangan
refactor
Menyusun ulang kode tanpa mengubah fungsi
refactor: memisahkan fungsi hitung ke berkas terpisah


9. Menilai Pesan Commit
update → Buruk, tidak memberi tahu apa yang diperbarui.
fix bug tombol → Cukup tetapi belum standar, belum memakai tipe baku.
feat: menambahkan fitur pencarian produk di navbar → Paling baik, memakai format Conventional Commits, tipe jelas, dan ringkasan mendeskripsikan perubahan secara spesifik.

10. Berkas .gitignore
Fungsi: Memberi tahu Git berkas/berkas mana yang tidak perlu dilacak, disimpan, maupun diunggah ke repositori.
Table
Jenis Berkas
Alasan Dikecualikan
Folder node_modules
Berisi ribuan pustaka pihak ketiga yang besar; dapat dipasang ulang dengan perintah npm install — tidak perlu disimpan di repositori.
Berkas kata sandi/kunci rahasia
Berisi informasi sensitif; jika diunggah, siapa pun dapat melihatnya dan menyalahgunakan.
Berkas sistem operasi (.DS_Store, Thumbs.db)
Hanya berkas tampilan sistem lokal; tidak berguna bagi pengembang lain.
Berkas log atau berkas sementara
Isinya berubah terus-menerus dan tidak berkontribusi pada kode sumber proyek.


11. Penamaan Cabang
Format standar: tipe/deskripsi-singkat (menggunakan huruf kecil dan tanda hubung).
Table
Contoh Baik
Alasan Lebih Baik
fitur/tambah-pencarian
Langsung terlihat jenis dan tujuan cabang; mudah dibaca dan dicari.
perbaikan/warna-judul
Membantu mengetahui isi perubahan tanpa membaca kode; konsisten dalam tim.

12.HTML adalah struktur dan denah ruangan sebuah bangunan.
CSS adalah cat dinding, desain interior, dan ornamen yang membuatnya terlihat menarik.
JavaScript adalah aliran listrik, pipa air, mesin elevator, dan tombol sakelar yang membuat bangunan tersebut berfungsi dan dapat digunakan.
13. di browser (fornt-end) dan di server (back-end)
14.ECMAScript = Nama spesifikasi standar bahasa.
JavaScript = Nama penerapan bahasa yang dipakai di peramban dan Node.js, mengikuti standar ECMAScript. Versi baru sering disebut "ES" (ES6 = ES2015, dst).
Contoh perbandingan:
javascript
Run
// Gaya lama
function sapa(nama) {
  return "Halo, " + nama;
}

// Gaya modern (ES6+)
const sapa = (nama) => `Halo, ${nama}`;

Gaya modern menggunakan fungsi panah dan penggabungan teks yang lebih ringkas dan mudah dibaca.

	
