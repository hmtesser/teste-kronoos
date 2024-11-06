export interface DataValidate {
    nrCpfCnpj: string;
    vlTotal: string;
    vlPresta: string;
    qtPrestacoes: string;
    vlMora: string;
    vlMulta: string;
    vlOutAcr: string;
    vlIof: string;
    vlDescon: string;
    vlAtual:string;
    [key : string]: string;
}

export type CpfCnpjValidationResult = 'Válido' | 'Inválido';