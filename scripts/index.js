function podaciForme() {
  let ocena = document.getElementById("ocena").value;
  let indeks = document.getElementById("indeks").value;

  if (ocena < 5 || ocena > 10) {
    document.getElementById("razlogGreskeOcena").innerHTML =
      "Razlog greske: Ocena mora biti u opsegu [5-10].";
    document.getElementById("razlogGreskeOcena").style.display = "block";
    document.getElementById("razlogGreskeOcena").style.color = "red";
    return false;
  }

  let pattern = /^\d{4}\/\d{4}$/;
  if (!indeks.match(pattern)) {
    document.getElementById("razlogGreskeIndeks1").innerHTML =
      "Razlog greske: Indeks mora biti u formatu YYYY/XXXX.";
    document.getElementById("razlogGreskeIndeks1").style.display = "block";
    document.getElementById("razlogGreskeIndeks1").style.color = "red";
    return false;
  }

  let godina = indeks.split("/")[0];
  let broj = indeks.split("/")[1];
  if (godina < 2000 || broj < 1 || broj > 1000) {
    document.getElementById("razlogGreskeIndeks").innerHTML =
      "Razlog greske: Broj indeksa mora biti u opsegu [2000/1-2000/1000].";
    document.getElementById("razlogGreskeIndeks").style.display = "block";
    document.getElementById("razlogGreskeIndeks").style.color = "red";
    return false;
  }

  if (ocena >= 6 && !document.getElementById("polozen").checked) {
    document.getElementById("razlogGreske").innerHTML =
      "Razlog greske: Ukoliko je ocena u opsegu [6-10] onda checkbox „Položio/la“ mora biti označen.";
    document.getElementById("razlogGreske").style.display = "block";
    document.getElementById("razlogGreske").style.color = "red";
    return false;
  }
  const obj = {
    ocena: ocena,
    datumIzlaska: document.getElementById("datum").value,
    brojIndeksa: indeks,
    rok: document.querySelector('input[name="rok"]:checked').value,
    redniBrojIzlaska: document.getElementById("izlazak").value,
    polozen: document.getElementById("polozen").checked,
  };
  return JSON.stringify(obj);
}
document.getElementById("submit").addEventListener("click", function () {
  let rezultat = podaciForme();
  if (rezultat) {
    document.getElementById("podaci").value = rezultat;
    document.getElementById("ocena").value = "";
    document.getElementById("indeks").value = "";
    document.getElementById("datum").value = "";
    document.querySelector('input[name="rok"]:checked').checked = false;
    document.getElementById("izlazak").value = "1";
    document.getElementById("polozen").checked = false;
    document.getElementById("razlogGreske").style.display = "none";
    document.getElementById("razlogGreskeOcena").style.display = "none";
    document.getElementById("razlogGreskeIndeks").style.display = "none";
    document.getElementById("razlogGreskeIndeks1").style.display = "none";
  }
});
