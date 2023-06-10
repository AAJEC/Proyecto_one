      
      var calc = document.getElementById('subir')
      calc.addEventListener('click', ()=>{
      var valor_ticket=200;
      var nom = document.getElementById('nombre').value;;
      var ape= document.getElementById('apellido').value;; 
      var email= document.getElementById('correo').value;;
      var cant= document.getElementById('cantidad').value;;
      var cat = document.getElementById('tipo').value;    
      if(cat=="Estudiante"){
        valor_ticket= (cant * valor_ticket) *0.8;
      }else if(cat=="Trainee"){
      valor_ticket=(cant * valor_ticket) * 0.5;
      }else if(cat=="Junior"){
      valor_ticket=(cant * valor_ticket) *0.15;
      }else{
      valor_ticket=0;
      }
      document.getElementById('ttal').value=valor_ticket+"$"; 
       alert("Su nombre y apellido son:" + " "+ nom + " " + ape +" \n" + "Su Email es:" + " "+ email+ "\n"+
       "La cantidad es:"+ " "+cant+"\n"+ "La categoria es:" + " "+cat+ "\n"+ "El valor total es:"+ " "+valor_ticket)
    });
                
               
        

 var limpiar_campos = document.getElementById('limpiar');
     limpiar_campos.addEventListener('click', ()=>{
       document.getElementById('nombre').value="";
       document.getElementById('apellido').value=""; 
       document.getElementById('correo').value="";;
       document.getElementById('cantidad').value="";;
       document.getElementById('tipo').value="";
       document.getElementById('ttal').value="";
     })



  