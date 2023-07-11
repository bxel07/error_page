// Mendapatkan kode error dari URL
const urlParams = new URLSearchParams(window.location.search);
const errorCode = urlParams.get('code');

// Menampilkan pesan error sesuai dengan kode
if (errorCode === '0') {
    document.write('<p>Routing anda salah</p>');
} else if (errorCode === '1') {
    document.write('<p>Anda belum melakukan migrasi data</p>');
} else if (errorCode == '2') {
    document.write('<p>Anda salah melakukan koneksi database</p>')
} else {
    document.write('<p>Kode error tidak valid</p>');
}
