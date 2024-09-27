const data = [ 
    { no: 1, nama: "WONU", kelas: "3A", nim: "23000470", jenisKelamin: "Laki-Laki", link: "WONU.html" },
    { no: 2, nama: "TIKA", kelas: "3A", nim: "23004970", jenisKelamin: "Perempuan", link: "TIKA.html" },
    { no: 3, nama: "MINA", kelas: "3A", nim: "23004700", jenisKelamin: "Perempuan", link: "MINA.html" },
];

const tbody = document.querySelector("#myTable tbody");

data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = 
        `<td class="no-cell">${item.no}</td>
        <td>${item.nama}</td>
        <td class="nim-cell">${item.nim}</td>
        <td class="kelas-cell">${item.kelas}</td> 
        <td class="jenis-kelamin">${item.jenisKelamin}</td> 
        <td><a href="${item.link}" class="profile-link">Profil</a></td>`;
    tbody.appendChild(row);
});

// Menambahkan event listener untuk mengubah warna dan huruf
const links = document.querySelectorAll('.profile-link');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah navigasi

        const index = [...link.closest("tr").parentElement.children].indexOf(link.closest("tr"));

        if (index === 1) { // Baris kedua (index 1)
            const table = document.getElementById('myTable');
            table.style.backgroundColor = 'purple'; // Mengubah warna tabel menjadi ungu
            table.style.color = 'white'; // Mengubah warna huruf menjadi putih
            table.querySelectorAll('td, th').forEach(cell => {
                cell.classList.add('large-text'); // Membesarkan tulisan
            });
        } else {
            // Untuk baris lainnya, mengubah warna acak
            document.body.style.backgroundColor = getRandomColor();
            document.body.style.color = getRandomColor();
            const table = document.getElementById('myTable');
            table.style.borderColor = getRandomColor();
            table.querySelectorAll('td, th').forEach(cell => {
                cell.style.color = getRandomColor();
            });
        }
    });
});

// Menambahkan event listener untuk mengecilkan tabel saat mengklik 'Data Mahasiswa'
const h1 = document.getElementById('dataMahasiswa');
h1.addEventListener('click', function() {
    const table = document.getElementById('myTable');
    table.classList.toggle('small-table'); // Menambah/menghapus kelas 'small-table'
});

// Menambahkan event listener untuk menampilkan bintang-bintang saat klik kolom 'Nama'
const namaColumn = document.getElementById('namaColumn');
namaColumn.addEventListener('click', function() {
    const rows = document.querySelectorAll("#myTable tbody tr");
    rows.forEach(row => {
        const namaCell = row.children[1]; // Mengambil kolom Nama
        namaCell.innerHTML += " &#9733;"; // Menambahkan bintang (★)
        namaCell.classList.add('star-effect'); // Menambahkan efek bintang
    });
});

// Menambahkan event listener untuk efek mouseover pada NIM
const nimCells = document.querySelectorAll('.nim-cell');
nimCells.forEach(nimCell => {
    // Event mouseover untuk mengganti background color
    nimCell.addEventListener('mouseover', function() {
        nimCell.style.backgroundColor = 'lightblue'; // Warna background berubah saat mouseover
    });

    // Event mouseout untuk mengembalikan background color ke semula
    nimCell.addEventListener('mouseout', function() {
        nimCell.style.backgroundColor = ''; // Mengembalikan warna background
    });

    // Event click untuk menampilkan alert saat NIM diklik
    nimCell.addEventListener('click', function() {
        alert(`NIM: ${nimCell.innerText}`);
    });
});

// Menambahkan event listener untuk efek double click pada jenis kelamin
const jenisKelaminCells = document.querySelectorAll('.jenis-kelamin');
jenisKelaminCells.forEach(jenisKelaminCell => {
    jenisKelaminCell.addEventListener('dblclick', function() {
        alert(`Jenis Kelamin: ${jenisKelaminCell.innerText}`); // Menampilkan alert saat double click
    });
});

// Menambahkan event listener untuk efek mouseout pada kelas
const kelasCells = document.querySelectorAll('.kelas-cell');
kelasCells.forEach(kelasCell => {
    // Event mouseout untuk mengubah background color saat mouse keluar
    kelasCell.addEventListener('mouseout', function() {
        kelasCell.style.backgroundColor = 'lightgray'; // Mengubah warna latar belakang saat mouseout
    });

    // Event mouseover untuk mengembalikan background color saat mouse masuk
    kelasCell.addEventListener('mouseover', function() {
        kelasCell.style.backgroundColor = ''; // Mengembalikan warna background
    });
});

// Menambahkan event listener untuk efek mouseenter pada No
const noCells = document.querySelectorAll('.no-cell');
noCells.forEach(noCell => {
    noCell.addEventListener('mouseenter', function() {
        noCell.style.backgroundColor = 'yellow'; // Mengubah warna latar belakang saat mouse berada di atas
    });

    // Event mouseleave untuk mengembalikan warna saat mouse keluar
    noCell.addEventListener('mouseleave', function() {
        noCell.style.backgroundColor = ''; // Mengembalikan warna latar belakang
    });
});

// Menambahkan event listener untuk efek mouseleave saat mengklik No
noCells.forEach(noCell => {
    noCell.addEventListener('click', function() {
        const index = [...noCell.closest("tr").parentElement.children].indexOf(noCell.closest("tr"));
        alert(`Anda mengklik No: ${noCell.innerText} dari baris ${index + 1}`); // Menampilkan alert saat No diklik
    });
});

// Fungsi untuk mendapatkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
