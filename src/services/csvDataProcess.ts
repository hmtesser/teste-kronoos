import { DataValidate, CpfCnpjValidationResult, FormattedValue } from '../models//dataModel'
import { validate } from './CpfCnpjValidator'
import { formatCurrency } from './formatCurrency';

export const DataProcess = (data: DataValidate): DataValidate => {
    const cpfCnpjValidate: CpfCnpjValidationResult = validate(data.nrCpfCnpj) ? 'Válido' : 'Inválido';
    const formatVlTotal=  formatCurrency(data.vlTotal);
    const formatVlPresta = formatCurrency(data.vlPresta);
    const formatVlAtual = formatCurrency(data.vlAtual);
    const formatVlMulta = formatCurrency(data.vlMulta);
    const formatVlMora = formatCurrency(data.vlMora);
    const formatVlIof = formatCurrency(data.vlIof);
    const formatVlOutAcr = formatCurrency(data.vlOutAcr);
    const formatVlDescon = formatCurrency(data.vlDescon);

    return {
        ...data,
        nrCpfCnpj:cpfCnpjValidate,
        vlTotal: formatVlTotal,
        vlPresta: formatVlPresta,
        vlAtual: formatVlAtual,
        vlMulta: formatVlMulta,
        vlMora: formatVlMora,
        vlIof: formatVlIof,
        vlOutAcr: formatVlOutAcr,
        vlDescon: formatVlDescon
    }
}