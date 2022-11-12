function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "Series.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("serie");
    // const y = xmlDoc.getElementsByTagName("caracteristicas");
    let table="<tr><th>serie</th><th>genero</th><th>duracion</th></tr>";
    for (let i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("duracion")[0].childNodes[0].nodeValue +
      "</td><td>";
      
      table +="</td></tr>";
    }
    document.getElementById("tablita").innerHTML = table;
  }