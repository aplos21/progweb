function area_circulo(){
  var raio = document.getElementById('raio').value;
  var pi = 3.1415;

  // area -> area = pi * raio^2
  var area = pi * (raio * raio);
  document.getElementById('area-circulo').value = area;

  // circunferencia -> [(2 * pi) * r]
  var circ = (2*pi)*raio;
  document.getElementById('circunferencia').value = circ;
}
