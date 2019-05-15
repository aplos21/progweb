for(var i=1; i<=10; i++){
  document.writeln("<table style= 'margin:5px; float:left;' border='1'>");
  document.writeln("<tr><th colspan ='2'>Produtos de "+i+"</th></tr>");
  for(var j=1; j<=10; j++){
    document.writeln("<tr> <td text-align='center'>"+ i +" x "+ j +"</td> <td text-align='center'>"+i*j+"</td></tr>");
  }
  document.writeln("</table>");
}
