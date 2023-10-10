export const getFirstName = name => {
    if (name) {
        const nameParts = name.split(' ');
        if (nameParts.length >= 2) {
            const firstName = nameParts[0];
            if (firstName.length > 14) {
                return `${firstName.substring(0, 12)}...`;
            }
            return firstName;
        }
    }
    return name;
};
