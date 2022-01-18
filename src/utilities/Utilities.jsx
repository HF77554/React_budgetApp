export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0
})

export const getProgressBarVariant = ({amount, max}) => {
    const ratio = amount / max

    if (ratio < 0.5) return 'primary'
    if (ratio < 0.75) return 'warning'
    return 'danger'
}

export const percentageValue = ( {amount, total} ) => {

    const ratio = amount / total

    return Math.round(ratio*100)
}