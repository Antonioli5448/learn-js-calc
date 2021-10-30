const calc = (ident,a,b)=>{
    if(ident && a && b || (a && b) !== Number(a) && Number(b)){
        if (isNaN(a + b)) {
            return "eror"

        }
        if(ident === 'sum'){
            return a + b
        }else if(ident === 'remains'){
            return a % b
        }else if(ident === 'subtract'){
            return a - b
        }else if(ident === 'exponent'){
            return a ** b
        }else if(ident === 'multiplication'){
            return a * b
        }else if(ident === 'division'){
            return a / b
        } else{
            return 'unknow operation'
        } 
    
       }else{
        return 'Error'
       }
   }
   console.log(calc(sum,4,5))