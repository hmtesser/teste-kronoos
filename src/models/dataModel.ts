export interface DataValidate {
    nrCpfCnpj: string;
    vlTotal: string;
    vlPresta: string;
    qtPrestacoes: string;
    [key : string]: string;
}

export type CpfCnpjValidationResult = 'Válido' | 'Inválido';

export interface FormattedValue {
    original: number;
    formatted: string;
}