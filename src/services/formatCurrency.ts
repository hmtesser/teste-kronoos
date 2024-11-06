export function formatCurrency(val:number): string {
    const bRL = new Intl.NumberFormat('pt-BR', {
        style:"currency",
        currency:'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits:2,
    })

    return bRL.format((val));
}

console.log(formatCurrency(parseFloat('146296.67')))