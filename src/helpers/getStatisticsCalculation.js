export const getStatisticsCalculation = (currentDate, tasks) => {
    const parts = currentDate.split('-');
    const currentMonth = parseInt(parts[1], 10);
    const currentDay = parseInt(parts[2], 10);

    const tasksForDay = tasks.filter(task => {
        const taskDate = new Date(task.date);
        const taskDay = taskDate.getDate();

        const taskMonth = taskDate.getMonth() + 1;

        return taskDay === currentDay && taskMonth === currentMonth;
    });

    const tasksForMonth = tasks.filter(task => {
        const taskDate = new Date(task.date);
        const taskMonth = taskDate.getMonth() + 1;

        return taskMonth === currentMonth;
    });

    const todoByDay = tasksForDay.filter(task => task.title === 'to do').length;
    const inprogressByDay = tasksForDay.filter(
        task => task.title === 'progress'
    ).length;
    const doneByDay = tasksForDay.filter(task => task.title === 'done').length;

    const todoByMonth = tasksForMonth.filter(
        task => task.title === 'to do'
    ).length;
    const inprogressByMonth = tasksForMonth.filter(
        task => task.title === 'progress'
    ).length;
    const doneByMonth = tasksForMonth.filter(
        task => task.title === 'done'
    ).length;
    const totalTasksForDay = todoByDay + inprogressByDay + doneByDay;
    const totalTasksForMonth = todoByMonth + inprogressByMonth + doneByMonth;

    const formattedData = [
        {
            name: 'To Do',
            'By Day':
                totalTasksForDay > 0 ? (todoByDay / totalTasksForDay) * 100 : 0,
            'By Month':
                totalTasksForMonth > 0
                    ? (todoByMonth / totalTasksForMonth) * 100
                    : 0,
        },
        {
            name: 'In Progress',
            'By Day':
                totalTasksForDay > 0
                    ? (inprogressByDay / totalTasksForDay) * 100
                    : 0,
            'By Month':
                totalTasksForMonth > 0
                    ? (inprogressByMonth / totalTasksForMonth) * 100
                    : 0,
        },
        {
            name: 'Done',
            'By Day':
                totalTasksForDay > 0 ? (doneByDay / totalTasksForDay) * 100 : 0,
            'By Month':
                totalTasksForMonth > 0
                    ? (doneByMonth / totalTasksForMonth) * 100
                    : 0,
        },
    ];

    return { formattedData };
};
