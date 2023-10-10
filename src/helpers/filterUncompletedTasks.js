export const filterUncompletedTasks = (userTasks, currentDate) => {
    return userTasks
        .filter(
            task => task.category === 'to-do' || task.category === 'in-progress'
        )
        .filter(task => task.date === currentDate);
};
