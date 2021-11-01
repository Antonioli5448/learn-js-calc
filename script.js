const calc = ( ident,a,b ) => {
    if( ident && a && b || (a && b) !== Number(a) && Number(b) ) {
        if ( isNaN(a + b) ) {
            return "error"
        }
        if( ident === 'sum' ) {
            return a + b
        } else if( ident === 'remains' ) {
            return a % b
        } else if( ident === 'subtract' ) {
            return a - b
        } else if( ident === 'exponent' ) {
            return a ** b
        } else if( ident === 'multiplication' ) {
            return a * b
        } else if( ident === 'division' ) {
            return a / b
        } else {
            return 'unknow operation'
        } 
    
    } else {
        return 'error'
      }
}
