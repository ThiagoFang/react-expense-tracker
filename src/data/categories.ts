import { Category } from "../types/Category"

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true, name: 'food' },
    rent: { title: 'Aluguel', color: 'brown', expense: true, name: 'rent' },
    salary: { title: 'Salário', color: 'green', expense: false, name: 'salary' },
}