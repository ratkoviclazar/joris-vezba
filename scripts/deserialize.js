function popuniFormu() {
  const textArea = document.getElementById("podaci").value;
  const objekat = JSON.parse(textArea);

  document.getElementById("ocena").value = objekat.ocena;
  document.getElementById("datum").value = objekat.datumIzlaska;
  document.getElementById("indeks").value = objekat.brojIndeksa;
  document.querySelector('input[name="rok"]').checked = objekat.rok;
  document.getElementById("izlazak").value = objekat.redniBrojIzlaska;
  document.getElementById("polozen").checked = objekat.polozen;
}

document.querySelector("#load").addEventListener("click", function () {
  popuniFormu();
  const textArea = document.getElementById("podaci").value;
  const objekat = JSON.parse(textArea);
  const ocena = objekat.ocena;
  const indeks = objekat.brojIndeksa;
  const polozen = objekat.polozen;
  if (ocena < 5 || ocena > 10) {
    document.getElementById("greskaTextArea").innerHTML =
      "Razlog greske: Ocena mora biti u opsegu [5-10].";
    document.getElementById("greskaTextArea").style.display = "block";
    document.getElementById("greskaTextArea").style.color = "red";
    return false;
  }

  let pattern = /^\d{4}\/\d{4}$/;
  if (!indeks.match(pattern)) {
    document.getElementById("greskaTextArea").innerHTML =
      "Razlog greske: Indeks mora biti u formatu YYYY/XXXX.";
    document.getElementById("greskaTextArea").style.display = "block";
    document.getElementById("greskaTextArea").style.color = "red";
    return false;
  }

  let godina = indeks.split("/")[0];
  let broj = indeks.split("/")[1];
  if (godina < 2000 || broj < 1 || broj > 1000) {
    document.getElementById("greskaTextArea").innerHTML =
      "Razlog greske: Broj indeksa mora biti u opsegu [2000/1-2000/1000].";
    document.getElementById("greskaTextArea").style.display = "block";
    document.getElementById("greskaTextArea").style.color = "red";
    return false;
  }

  if (ocena >= 6 && !document.getElementById("polozen").checked) {
    document.getElementById("greskaTextArea").innerHTML =
      "Razlog greske: Ukoliko je ocena u opsegu [6-10] onda checkbox „Položio/la“ mora biti označen.";
    document.getElementById("greskaTextArea").style.display = "block";
    document.getElementById("greskaTextArea").style.color = "red";
    return false;
  }
  if (
    objekat.ocena == null ||
    objekat.brojIndeksa == null ||
    objekat.datumIzlaska == null ||
    objekat.rok == null ||
    objekat.redniBrojIzlaska == null ||
    objekat.polozen == null
  ) {
    document.getElementById("greskaTextArea").innerHTML =
      "Razlog greske: Niste uneli sve podatke.";
    document.getElementById("greskaTextArea").style.display = "block";
    document.getElementById("greskaTextArea").style.color = "red";
    return false;
  }
});
