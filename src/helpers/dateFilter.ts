import { Item } from "../types/Item";

export const getCurrentMonth = ():string => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    const newList: Item[] = [];
    const [year, month] = date.split('-')

    for(let i in list) {
        if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth()) === parseInt(month)) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    return `${day < 10 ? '0'+day : day}/${month < 10 ? '0'+month : month}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) - 1]} de ${year}`
}