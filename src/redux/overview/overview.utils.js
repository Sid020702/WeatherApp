export function getDate(timezone) {
    const d = new Date()
    const localTime = d.getTime()
    const localOffset = d.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    var location = utc + (1000 * timezone)
    const date = new Date(location)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = date.getDate()
    const weekday = days[date.getDay()]
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return ({
        hours,
        minutes,
        weekday,
        month,
        day,
        year
    })

}

export function getHumidityArr(data, day) {
    let humidity_arr = [];
    for (let i = 0; i < 5; i++) {
        let string = day
        let filtered_arr = data.list.filter(data => data.dt_txt.includes(`-${string}`))
        let length = filtered_arr.length
        let sum = filtered_arr.reduce((res, acc) => {
            return res + acc.main.humidity
        }, 0)
        let avg = (sum / length).toFixed(2)
        humidity_arr.push(avg)
        day += 1
    }
    return humidity_arr
}

export function getIconArr(data, day) {
    let icon_arr = [];
    for (let i = 0; i < 5; i++) {
        let string = day
        let filtered_arr = data.list.filter(data => data.dt_txt.includes(`-${string}`))
        let length = filtered_arr.length
        let icon = filtered_arr[Math.floor(Math.random() * length)].weather[0].icon
        icon_arr.push(icon)
        day += 1
    }
    return icon_arr
}