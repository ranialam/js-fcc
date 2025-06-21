let number=0;
let saveEL= document.getElementById("save-el");
let countdis=document.getElementById("countdisplay");
    function incrementfunc(){
      number+=1;
      document.getElementById("countdisplay").textContent=number;
      
    }

    function savingfunc(){

      let countSV= number + " - "
      saveEL.textContent += countSV
      countdis.textContent=0;
      number = 0;
      
    }
