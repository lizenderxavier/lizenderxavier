function Tabe(){
 let N=document.getElementById('num')
 var sel=document.getElementById('sel') 

 if(N.value.length ==0){
     alert('[ERRO] Digite um número sem um é impossível geral uma Tabuada')
   }else{
       let Nume=Number(N.value)
               // sel.innerHTML=`Tabuada dos ${Nume}x <br> `
               sel.innerText='' 
         
        for(c=1;c<=1000;c+=1){
                                 
             var item = document.createElement('option')
             item.text= ` ${Nume} x ${c}=${Nume*c}`
             item.value=`sel${c}`/* ele vai chamar sel 1 ,sel 2, etc . por ex: seleccionando o primeiro resultado do selector 3x1=3 é a tab 1 e em diante
             por conta disso: item.value=`sel${c}` não faz muito sentido para o jS.. 
             para outras linguagens é mais usado para saber qual item foi seleccionado!*/
             sel.appendChild(item)
                                    //let R=Nume*c
                                  // sel.innerHTML+=` ${Nume} x ${c}=${R.toFixed(.4)} <br>` 

            
        }
    }
}

