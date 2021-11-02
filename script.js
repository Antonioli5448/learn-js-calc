const calc = ( ident,a,b ) => {
    if( ident && a && b ) {
        if ( isNaN(a + b) ) {
            return "error"
        }
        switch(ident){
        case 'sum':
            return a + b;
        case 'remains':
            return a % b;
        case 'subtract':
            return a - b;
        case 'exponent':
            return a ** b;
        case 'multiplication':
            return a * b;
        case 'division':
            return a / b;
        default:
            return 'unknow operation';
        }
    
    } else {
        return 'error'
      }
}
