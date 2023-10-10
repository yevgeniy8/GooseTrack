export const getPageTitle = location => {
    if (location.includes('/calendar')) {
        return 'Calendar';
    } else if (location.includes('/account')) {
        return 'User Profile';
    } else if (location.includes('/statistics')) {
        return 'Statistics';
    } else {
        return '';
    }
};
