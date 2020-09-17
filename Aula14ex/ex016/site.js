function cont(){
   let Ini=document.getElementById('n1')// usar let mais recente no js facilita em termos de escopo porque essas vriáveis não existiram depois desse bloco!
   let Fim=document.getElementById('n2') 
   let salt=document.getElementById('s')  
   let res=document.getElementById('res')
   if(Ini.value == Fim.value){
       alert('[ERRO] O início e o fim nãopodem ser iguais!')
   }
  if(Ini.value.length==0 || Fim.value.length==0 || salt.value.length==0){ //  se o total das letras dentro da caixa for 0 ou estiver vazio! 
    res.innerHTML='Impossivél contar!'
  } else{// senão ele fara a função converterá as variáveis para númeroporque está como string!
     res.innerHTML='Contando: <br>'// break rool para mudar a linha da contagem 
     I=Number(Ini.value)
     F=Number(Fim.value)
     S=Number(salt.value)
     if(S <= 0){
         alert('Salto inválido considerando [1]')
         S = 1
     }
     if(I<F){
        for(c = I; c <= F; c += S){
         res.innerHTML+= `${c} \u{1F449}`// tira-se o [U+] coloca-se [\u] e o resto dentro de chavetas {} !
         
         
         
         /* a ` crase ficou afastada para ceparar os números
         e concatenou-se ou seja o que ele já tem que (contando: ) += a estring formatada que é c 
         ou a contagem!!!
         */ 
         // para os emojis coloca-se por codigo então pesquisar unicode emoji list!
       } 
        
     }else if(I>F){
            for(c = I; c >= F; c -= S){
                res.innerHTML+= `${c} \u{1F449}`
            }
               
        } 
      res.innerHTML += `\u{1F3C1} \u{1F48E}`// depois da contagem acrescentar uma bandeira ou outro emoji   
    }                             
}