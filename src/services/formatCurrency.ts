export function formatCurrency(val:string): string {
    const bRL = new Intl.NumberFormat('pt-BR', {
        style:"currency",
        currency:'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits:2,
    })

    return bRL.format((parseFloat(val)));
}