// Fungsi untuk menghitung harga berdasarkan tujuan yang dipilih
function hitungHarga() {
    var tujuan = document.getElementById("tujuan").value;
    var harga = 0;

    switch (tujuan) {
        case "Bandung":
            harga = 100000;
            break;
        case "Jakarta":
            harga = 150000;
            break;
        case "Malang":
            harga = 200000;
            break;
        case "Surabaya":
            harga = 250000;
            break;
        case "Yogyakarta":
            harga = 180000;
            break;
        case "none":
            harga = 0;
            break;
    }

    document.getElementById("harga").value = harga;
    hitungTotalBayar();
}

// Fungsi untuk menghitung diskon dan total bayar
function hitungTotalBayar() {
    var harga = parseInt(document.getElementById("harga").value);
    var jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
    var member = document.getElementById("member").checked;

    var diskon = 0;

    if (member) {
        diskon = harga * 0.1; // Diskon 10% jika menjadi member
    }

    var totalBayar = (harga * jumlahTiket) - diskon;

    document.getElementById("diskon").value = diskon;
    document.getElementById("totalBayar").value = totalBayar;
}

function booking() {
    var nama = document.getElementById("nama").value;
    var tujuan = document.getElementById("tujuan").value;
    var jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
    var member = document.getElementById("member").checked;

    if (nama.trim() === "" || tujuan === "none" || jumlahTiket === 0) {
        alert("Semua kolom harus diisi sebelum memesan tiket.");
        return;
    }

    var harga = parseInt(document.getElementById("harga").value);
    var diskon = 0;

    if (member) {
        diskon = harga * 0.1;
    }

    var totalBayar = (harga * jumlahTiket) - diskon;

    document.getElementById("diskon").value = diskon;
    document.getElementById("totalBayar").value = totalBayar;
    
    var pesanElement = document.getElementById("pesan");
    pesanElement.textContent = "Tiket sudah dipesan!";
    pesanElement.style.display = "block"; // Tampilkan pesan
    pesanElement.style.color = "green"; // Atur warna pesan menjadi hijau
    pesanElement.style.backgroundColor = "lightyellow"; // Atur latar belakang pesan
    
    document.getElementById("bookingButton").style.display = "none"; // Sembunyikan tombol "Booking"

    resetForm();
}

// Event listener untuk memantau perubahan pada kotak centang "Member"
document.getElementById("member").addEventListener("change", function () {
    hitungHarga(); // Ketika member status berubah, hitung ulang harga
});

// Panggil fungsi hitungHarga saat memilih tujuan
document.getElementById("tujuan").addEventListener("change", hitungHarga);

// Panggil fungsi hitungTotalBayar saat memilih jumlah tiket
document.getElementById("jumlahTiket").addEventListener("change", hitungTotalBayar);

// Panggil fungsi hitungTotalBayar saat halaman dimuat
hitungHarga();
