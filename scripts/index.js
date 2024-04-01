function podaciForme() {
  let ocena = document.getElementById("ocena").value;
  let indeks = document.getElementById("indeks").value;

  if (ocena < 5 || ocena > 10) {
    alert("Ocena mora biti u opsegu [5 – 10]");
    return false;
  }

  let pattern = /^\d{4}\/\d{4}$/;
  if (!indeks.match(pattern)) {
    alert("Broj indeksa mora biti u formatu YYYY/XXXX (godina/broj)");
    return false;
  }

  let godina = indeks.split("/")[0];
  let broj = indeks.split("/")[1];
  if (godina < 2000 || broj < 1 || broj > 1000) {
    alert(
      "Godina indeksa mora biti veća od 2000, dok broj indeksa mora biti u opsegu [1 – 1000]"
    );
    return false;
  }

  if (ocena >= 6 && !document.getElementById("polozen").checked) {
    alert(
      "Ukoliko je ocena u opsegu [6-10] onda checkbox „Položio/la“ mora biti označen."
    );
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
  }
});
