import { DataValidate, CpfCnpjValidationResult, FormattedValue } from '../models//dataModel'
import { validate } from './CpfCnpjValidator'
import { formatCurrency } from './formatCurrency';

export const DataProcess = (data: DataValidate): DataValidate => {
    const cpfCnpjValidate: CpfCnpjValidationResult = validate(data.nrCpfCnpj) ? 'Válido' : 'Inválido';
    const formatVlTotal=  formatCurrency(data.vlTotal);
    const formatVlPresta = formatCurrency(data.vlPresta);
    return {
        ...data,
        nrCpfCnpj:cpfCnpjValidate,
        vlTotal: formatVlTotal,
        vlPresta: formatVlPresta
    }
}