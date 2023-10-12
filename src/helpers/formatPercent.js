export const formatPercent = value => {
    const formattedValue = value.toFixed(0);
    return isNaN(formattedValue) ? '0%' : `${formattedValue}%`;
};
