1. Dua Arah Aliran Kode: Push dan Pull
Table
Arah	Perintah	Penjelasan
Push	git push	Mengirimkan perubahan yang sudah dicatat di repositori lokal ke repositori jarak jauh (GitHub). Aliran: komputer lokal → GitHub.
Pull	git pull	Mengambil perubahan terbaru dari repositori jarak jauh ke repositori lokal, lalu langsung digabungkan. Aliran: GitHub → komputer lokal.
Contoh situasi:
✅ Push: Kamu sudah menyelesaikan fitur baru di laptop, menguji dan menyimpannya, lalu ingin mengunggah kode tersebut ke GitHub agar anggota tim lain bisa melihat dan menggunakannya.
✅ Pull: Rekan tim telah memperbaiki kesalahan penulisan kode di berkas utama dan mengunggahnya ke GitHub. Kamu perlu mengambil pembaruan itu agar versi di komputermu sama dengan versi terbaru di server.
2. Fungsi git push dan Opsi -u
git push = Mengirimkan komitmen dari cabang lokal ke repositori jarak jauh untuk menyamakan isinya.
a. Fungsi opsi -u pada git push -u origin main
-u adalah singkatan dari --set-upstream. Perintah ini menetapkan tautan pelacak: cabang lokal main sekarang terhubung secara permanen ke cabang main di repositori jarak jauh bernama origin.
b. Jika -u tidak disertakan pada dorongan pertama
Git akan menampilkan pesan kesalahan atau meminta kamu menentukan secara eksplisit ke mana mengirimkan perubahan, karena belum ada hubungan yang tercatat. Kamu harus menuliskan lengkap:
bash
git push origin main
tanpa kependekan menjadi git push saja.
c. Mengapa setelah -u cukup git push saja?
Karena hubungan antara cabang lokal dan cabang jarak jauh sudah disimpan. Git sudah tahu: saat kamu menjalankan git push, kirimkan dari cabang yang sedang aktif ke pasangannya yang sudah ditetapkan di origin.
3. Perbedaan git clone dan git init
Table
git init	git clone
Tujuan	Membuat repositori baru dari awal di direktori yang sedang dibuka	Menyalin repositori yang sudah ada dari lokasi lain (seperti GitHub) ke komputermu
Asal	Tidak ada hubungan dengan repositori lain	Secara otomatis menyiapkan tautan ke repositori sumber (origin)
Kapan dipakai	Memulai proyek baru dari nol	Mengunduh proyek yang sudah berjalan
Mengapa tidak perlu git init setelah git clone?
Karena git clone sudah menyalin seluruh repositori beserta folder .git di dalamnya — berarti sistem pelacakan versi sudah aktif dan terhubung ke sumber aslinya sejak awal.
4. Fungsi git pull dan Pentingnya dalam Kerja Tim
git pull = Mengambil pembaruan dari repositori jarak jauh dan langsung menggabungkannya ke cabang lokal yang sedang aktif. Gabungan ini terjadi secara otomatis.
Mengapa sangat penting dalam kerja tim?
Karena banyak orang mengerjakan berkas yang sama. Tanpa git pull, kamu akan bekerja pada versi yang sudah usang, sehingga saat mengunggah akan muncul konflik atau perubahan saling menimpa.
Momen sebaiknya menjalankan git pull:
Sebelum mulai bekerja setiap pagi — memastikan kamu memulai dari versi terbaru.
Sebelum mengunggah perubahan — memastikan tidak ada orang lain yang sudah mengubah bagian yang sedang kamu kerjakan.
5. Alur Kerja Harian yang Direkomendasikan
Table
Urutan	Perintah	Mengapa Penting
1	git status	Memeriksa berkas apa saja yang berubah; agar kamu tahu kondisi saat ini.
2	git pull	Menyamakan kode lokal dengan versi terbaru dari server; menghindari bentrokan kode.
3	(mengedit berkas)	Melakukan pekerjaan.
4	git add .	Menandai semua perubahan untuk disimpan; mempersiapkan tahap komit.
5	git commit -m "pesan perubahan"	Mencatat perubahan ke riwayat versi dengan keterangan yang jelas.
6	git push	Mengirimkan hasil pekerjaan ke repositori jarak jauh agar tim lain dapat mengaksesnya.
Inti: urutan ini menjamin kamu selalu memulai dari versi terbaru, sehingga risiko konflik berkurang.
6. Fork — Definisi, Situasi, dan Perbedaan dengan Clone
Fork = Menyalin seluruh repositori milik orang lain ke akun GitHubmu sendiri. Repositori hasil salinan ini menjadi milikmu dan kamu memiliki hak tulis penuh.
Situasi perlu melakukan fork:
Kamu ingin ikut mengembangkan proyek orang lain tetapi belum diberi izin mengubah langsung.
Kamu ingin bereksperimen memodifikasi proyek orang lain tanpa mengganggu versi aslinya.
Perbedaan mendasar:
Table
Fork	Clone
Tempat terjadi	Di laman web GitHub	Di komputer lokal
Kepemilikan	Hasilnya ada di akunmu; kamu pemiliknya	Hasilnya di komputermu; tetap milik pemilik asli
Hak tulis	Bisa ubah sesuka hati di versi fork-mu	Hanya mencerminkan milik asli; tidak bisa mengubah ke sumber kecuali diberi izin
7. 6 Langkah Alur Kontribusi: Fork + Pull Request
Table
Langkah	Perintah/Tindakan	Tujuan
1. Fork di laman GitHub	Klik tombol Fork di repositori asli	Membuat salinan di akunmu agar bisa diubah
2. Clone versi fork	git clone https://github.com/akunmu/proyek.git	Mengunduh ke komputer lokal untuk dikerjakan
3. Buat cabang baru	git switch -c nama-fitur	Memisahkan pekerjaan agar tidak mengganggu cabang utama
4. Kerjakan lalu komit	git add . && git commit -m "pesan"	Menyimpan perubahan dengan catatan jelas
5. Unggah ke akunmu	git push origin nama-fitur	Mengirimkan hasil ke GitHub-mu
6. Ajukan Pull Request	Klik Compare & pull request di laman GitHub	Meminta pemilik asli untuk menggabungkan perubahanmu ke proyek aslinya
8. Pull Request — Definisi dan Manfaat
Pull Request (PR) = Permohonan resmi kepada pemilik repositori untuk mengambil perubahan dari cabang/versi kamu dan menggabungkannya ke cabang utama proyek.
Mengapa tim profesional tidak langsung menggabungkan ke main?
Karena cabang main seharusnya selalu berisi kode yang stabil dan teruji. Langsung mengubah ke main berisiko merusak versi yang dipakai banyak orang.
Keuntungan menggunakan PR:
Peninjauan kode — anggota tim lain dapat memeriksa, memberi saran, dan memperbaiki sebelum digabung.
Riwayat yang rapi — setiap perubahan disertai penjelasan, diskusi, dan pelacakan siapa yang mengubah apa.
9. Skenario Andi dan Budi
a. Apa yang terjadi saat Budi mencoba push?
Kemungkinan besar gagal — Git menolak dorongan tersebut karena versi di repositori jarak jauh sudah lebih baru daripada versi yang dimiliki Budi.
b. Mengapa bisa terjadi?
Karena Andi sudah mengirimkan pembaruan lebih dulu. Budi bekerja berdasarkan versi yang tertinggal (kemarin terakhir menarik), sehingga riwayat komitmen tidak sejajar.
c. Apa yang seharusnya Budi lakukan sebelum mengedit?
Menjalankan git pull untuk mengambil pembaruan terbaru dari server sebelum mulai mengubah berkas.
d. Urutan perintah yang benar:
bash
git pull                          # ambil versi terbaru
# baru mulai mengedit berkas
git add style.css                 # tandai perubahan
git commit -m "Memperbaiki tampilan gaya"  # simpan
git push                          # kirim
10. Analisis Studi Kasus Lengkap
bash
git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug
Catatan: Tautan https://github.com/andi/proyek.git saat ini terdeteksi sebagai tautan mati/tidak dapat diakses, namun analisis tetap berdasarkan sintaks dan alur standar Git.
a. Apa yang dilakukan git clone?
Menyalin seluruh isi repositori milik Andi dari GitHub ke direktori lokal di komputermu, lengkap dengan riwayat versi dan tautan ke repositori aslinya.
b. Mengapa membuat cabang perbaikan-bug?
Agar pekerjaan perbaikan kesalahan terpisah dari cabang utama main. Jika terjadi kesalahan, tidak merusak kode utama yang sedang berjalan. Cabang juga memudahkan banyak orang bekerja bersamaan tanpa saling mengganggu.
c. Mengapa git push origin perbaikan-bug dan bukan sekadar git push?
Karena cabang baru ini belum ditetapkan hubungan ke cabang jarak jauh. Harus disebutkan secara eksplisit: kirimkan ke origin dengan nama cabang perbaikan-bug. Setelah ditetapkan -u, ke depannya cukup git push.
d. Langkah di antarmuka web GitHub?
Membuka laman repositori → akan muncul pemberitahuan cabang baru → klik tombol untuk membuka Pull Request guna mengajukan penggabungan ke cabang utama.
e. Jika pemilik meminta revisi?
Tetap di cabang yang sama (perbaikan-bug), lakukan perbaikan yang diminta.
Simpan perubahan: git add . → git commit -m "Memperbaiki saran peninjauan" → git push origin perbaikan-bug
Perubahan akan otomatis masuk ke Pull Request yang sudah terbuka; tidak perlu membuat PR baru.