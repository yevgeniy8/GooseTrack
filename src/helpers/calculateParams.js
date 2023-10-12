export const calculateParams = width => {
    let barGap, chartWidth, chartHeight, marginRight, barSize, fontSize;

    if (width >= 1440) {
        barGap = 14;
        fontSize = 16;
        chartWidth = 694;
        chartHeight = 286;
        marginRight = 0;
        barSize = 27;
    } else if (width >= 768) {
        barGap = 14;
        fontSize = 16;
        chartWidth = 522;
        chartHeight = 286;
        marginRight = 0;
        barSize = 27;
    } else {
        barGap = 8;
        fontSize = 12;
        chartWidth = 243;
        chartHeight = 266;
        marginRight = 0;
        barSize = 22;
    }

    return { barGap, chartWidth, chartHeight, marginRight, barSize, fontSize };
};
