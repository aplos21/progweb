document.getElementById("btn-draw").onclick = function() {
    
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");    
    
    var width = document.getElementById("bar-width").value;

    var div1Val = document.getElementById("bar-1").value;
    var div2Val = document.getElementById("bar-2").value;
    var div3Val = document.getElementById("bar-3").value;
    var div4Val = document.getElementById("bar-4").value;
    var div5Val = document.getElementById("bar-5").value;    
    
    
    var color = document.getElementsByClassName("div-graph");
    for(var i=0; i<color.length; i++){
        color[i].style.setProperty("background-color","red");
    }
    
    
    div1.style.setProperty('width', width+'px' );
    div1.style.setProperty('height', div1Val+"px");

    div2.style.setProperty('width', width+'px' );
    div2.style.setProperty('height', div2Val+"px");

    div3.style.setProperty('width', width+'px' );
    div3.style.setProperty('height', div3Val+"px");

    div4.style.setProperty('width', width+'px' );
    div4.style.setProperty('height', div4Val+"px");

    div5.style.setProperty('width', width+'px' );
    div5.style.setProperty('height', div5Val+"px");
    
}