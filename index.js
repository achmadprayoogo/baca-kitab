var kesalahanbaca = document.getElementById('jumlahsalahbaca');
var salahbaca = 0;
var kesalahanjawab = document.getElementById('jumlahsalahjawab');
var salahjawab = 0;

var nilaibaca = document.getElementById('jumlahnilaibaca');
var nilaibacaan = 100;
var nilaijawab = document.getElementById('jumlahnilaijawab');
var nilaijawaban = 100;

var total = document.getElementById('jumlahnilai');
var nilaitotal = 100;

function salahBaca() {
    salahbaca++;
    nilaibacaan = 100 - (salahbaca * 3);
    nilaitotal = (nilaibacaan + nilaijawaban) / 2;
    innerHTMLChange();
};

function salahJawab() {
    salahjawab++;
    nilaijawaban = 100 - (salahjawab * 5);
    nilaitotal = (nilaibacaan + nilaijawaban) / 2;
    innerHTMLChange();
};

function reset() {
    salahbaca = 0;
    salahjawab = 0;

    nilaibacaan = 100;
    nilaijawaban = 100;

    nilaitotal = 100;
    innerHTMLChange();
}

function innerHTMLChange() {
    kesalahanbaca.innerHTML = salahbaca;
    nilaibaca.innerHTML = nilaibacaan;

    kesalahanjawab.innerHTML = salahjawab;
    nilaijawab.innerHTML = nilaijawaban;

    total.innerHTML = nilaitotal;
}