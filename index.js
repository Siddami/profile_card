function dateAndTime() {
    const now = new Date()
    const dayOfTheWeek= now.toLocaleDateString('en-US', { weekday: 'long' });
    const dayString = `Today is ${dayOfTheWeek}`

    //Time condition
    let hours = now.getUTCHours()
    hours < 10? hours = "0" + hours: hours// condition one hours
    let minutes = now.getUTCMinutes()
    minutes < 10? minutes = "0" + minutes: minutes//condition two minutes
    let seconds = now.getUTCSeconds()
    seconds < 10? seconds = "0" + seconds: seconds // condition three seconds
    let milliseconds = now.getUTCMilliseconds()
    milliseconds < 1000? milliseconds = "0" + milliseconds: milliseconds//condition four milliseconds

    const utcTime = `${hours}:${minutes}:${seconds}:${milliseconds} UTC`;

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayString;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

setInterval(dateAndTime, 1);
