var prezzo_km = 0.21;
var km = prompt("Quanti km devi percorrere?");
var eta = prompt("Quanti anni hai?");
var costo = prezzo_km * km;
var percentuale;
var sconto;
var totale;


document.getElementById('costo_base').innerHTML = "Il costo base del biglietto è di €" + costo;


if ((eta >=18) && (eta <65)) {
  document.getElementById('sconto_eta').innerHTML = "Nessuno sconto applicabile";
  document.getElementById('prezzo_totale').innerHTML = "Il prezzo totale da pagare è di €" + costo;
}
else {
  if (eta < 18) {
    percentuale = 20;
    sconto = (costo / 100) * 20;
    totale = costo - sconto;
    totale = totale.toFixed(2);
    document.getElementById('sconto_eta').innerHTML = "Sconto età del 20%";
    document.getElementById('prezzo_totale').innerHTML = "Il prezzo totale da pagare è di €" + totale;
  }

  if (eta > 65) {
    percentuale = 40;
    sconto = (costo / 100) * 40;
    totale = costo - sconto;
    totale = totale.toFixed(2);
    document.getElementById('sconto_eta').innerHTML = "Sconto età del 40%";
    document.getElementById('prezzo_totale').innerHTML = "Il prezzo totale da pagare è di €" + totale;
  }
}
