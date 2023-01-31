document.getElementById("ver_mas").addEventListener("click", function () { 

    let styleDelPanel = document.getElementById('sobre_mi').style.display;
    console.log('El style de SobreMi es:' + styleDelPanel);

    if (styleDelPanel == 'inline-block') {
    
        document.getElementById("sobre_mi").style.display="none";
        
        document.getElementById("ver_mas").innerHTML="Ver"

    } else {
      
        document.getElementById("sobre_mi").style.display="inline-block";
       
        document.getElementById("ver_mas").innerHTML="Ocultar"

    }



}) ; 


document.getElementById("ver_mas2").addEventListener("click", function () { 

    let styleDelPanel = document.getElementById('estudios').style.display;
    console.log('El style de estudios es:' + styleDelPanel);

    if (styleDelPanel == 'inline-block') {
    
        document.getElementById("estudios").style.display="none";
        
        document.getElementById("ver_mas2").innerHTML="Ver"

    } else {
      
        document.getElementById("estudios").style.display="inline-block";
       
        document.getElementById("ver_mas2").innerHTML="Ocultar"

    }



}) ; 