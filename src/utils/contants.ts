export const currentFormat = (value = 0) =>
    new Intl.NumberFormat('es-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value);
