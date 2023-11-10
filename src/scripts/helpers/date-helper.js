export function getDateWithPrepand() {
    const dateNow = new Date();

    return `${getFormatedHours(dateNow)}:${getFormatedMinutes(dateNow)} ${getPrepand(dateNow)}`;
}

export function getDateWithoutPrepand() {
    const dateNow = new Date();

    return `${getFormatedHours(dateNow)}:${getFormatedMinutes(dateNow)}`;
}

function getFormatedMinutes(date) {
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return minutes;
}

function getFormatedHours(date) {
    let hours = date.getHours();
    
    return (hours >= 12) ? hours - 12: hours;
}

function getPrepand(date) {
    let hours = date.getHours();
    
    return (hours >= 12) ? " PM ":" AM ";
}
