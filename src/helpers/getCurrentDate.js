export const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const isBirthdayToday = (userBirthday, currentDate) => {
    const userMonth = userBirthday.getMonth() + 1;
    const userDay = userBirthday.getDate();
    const currentMonth = currentDate.split('-')[1];
    const currentDay = currentDate.split('-')[2];
    return (
        currentMonth === String(userMonth).padStart(2, '0') &&
        currentDay === String(userDay).padStart(2, '0')
    );
};
