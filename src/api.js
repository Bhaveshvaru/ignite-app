//base api 
const base_url = `https://api.rawg.io/api/`

//getting the date
const getCurrentMonth = ()=>{
    const month = new Date().getMonth();
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = ()=>{
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

//current day month year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//popular games
const popular_games =`games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

//export functions
export  const popularGamesURL = () =>{
    return `${base_url}${popular_games}`
}
export const  upcomingGamesURL=()=>{
    return `${base_url}${upcoming_games}`
}
export const newGamesURL=()=>{
    return `${base_url}${newGames}`  
}