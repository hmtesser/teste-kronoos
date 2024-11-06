export function validate(value:string){
    const formattedValue = value.replace(/[^a-zA-Z0-9]/g,"");
    if(formattedValue.length  == 11){
        const checkEqualCpf:any = formattedValue.split('').every((char) => char == formattedValue[0])
        if (checkEqualCpf) {
            return 'CPF inválido: números repetidos';
        } else {
            // verificação do CPF
            const cpfNineDigits = formattedValue.slice(0,9).split("").map(Number)
            const firstDigit = verifyCpfDigit(cpfNineDigits.reduce((sum, digit, index) => sum + digit * (10- index), 0));
            const cpfTenDigits = [...cpfNineDigits, firstDigit];
            const secondDigit = verifyCpfDigit(cpfTenDigits.reduce((sum, digit, index) => sum + digit * (11 -index),0));

            if(formattedValue[9] === firstDigit.toString() && formattedValue[10] === secondDigit.toString()){
                return true;
            }else{
                return false;
            }
            
        }
    }else if(formattedValue.length == 14){
        const checkEqualCNPJ = formattedValue.split('').every((char) => char == formattedValue[0])
        if(checkEqualCNPJ){
            console.log(formattedValue);
            return 'CNPJ inválido'
        }else{
            // verificação do CNPJ
            const CNPJTwelveDigits = formattedValue.slice(0, 12).split("").map(Number);
            const firstDigit = verifyCpfDigit(CNPJTwelveDigits.reduce((sum, digit, index) => sum + digit * [5,4,3,2,9,8,7,6,5,4,3,2][index], 0));
        
            // Calcula o segundo dígito verificador
            const CPNJThirteenDigits = [...CNPJTwelveDigits, firstDigit];
            const secondDigit = verifyCpfDigit(CPNJThirteenDigits.reduce((sum, digit, index) => sum + digit * [6,5,4,3,2,9,8,7,6,5,4,3,2][index], 0));
        
            if(formattedValue[12] == firstDigit.toString() && formattedValue[13] === secondDigit.toString()){
                return true;
            } else {
                return false;
            }
        }
    }else{
        return 'CPF ou CNPJ incorreto';
    }
}


function verifyCpfDigit(val:number): number {
    const rest = val % 11;
    return rest <2 ? 0 : 11 - rest;
}



