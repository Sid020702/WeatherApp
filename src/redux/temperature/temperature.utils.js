export const getTempArr = (data, day) => {
    let filtered_arr = data.list.filter(data => data.dt_txt.includes(`-${day}`));
    let label_arr = filtered_arr.map(data => data.dt_txt.slice(-8))
    let temp_arr = filtered_arr.map(data => (data.main.temp - 273).toFixed(2))
    return {
        label_arr,
        temp_arr
    }
}