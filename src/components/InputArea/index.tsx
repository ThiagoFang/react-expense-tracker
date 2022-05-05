import { useState, useEffect } from 'react';

import { categories } from '../../data/categories';
import { Category } from '../../types/Category';
import { Item } from '../../types/Item';
import * as C from './styles'

type Props = {
    onAdd: (item: Item) => void
}

type CategorieOption = {
    category: string,
    title: string
}

export const InputArea = ({ onAdd }: Props) => {
    const [categoriesList, setCategoriesList] = useState<CategorieOption[]>([]);
    
    const [error,setError] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const [taskValue, setTaskValue] = useState(0)
    const [title, setTitle] = useState('')

    useEffect(()=>{
        getCategoriesList()
    }, [])

    const handleAddEvent = () => {
        if(selectedCategory !== '' && selectedDate !== '' && taskValue !== 0 && title !== '') {
            const [year, month, day] = selectedDate.split('-')
            const newItem:Item = {
                date: new Date(parseInt(year), parseInt(month), parseInt(day)),
                category: selectedCategory,
                title: title,
                value: taskValue
            }
            clearInputs()
            setError(false)
            onAdd(newItem)
        } else {
            setError(true)
        }
    }

    const getCategoriesList = () => {
        let newCategoriesList = [];
        for(let i in categories) {
            newCategoriesList.push({
                category: categories[i].name,
                title: categories[i].title
            })
        }
        setCategoriesList(newCategoriesList)
    }

    const clearInputs = () => {
        setSelectedCategory('')
        setSelectedDate('')
        setTaskValue(0)
        setTitle('')
    }

    return(
        <C.Container>
            <C.InputCampArea>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input 
                    type="date"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    error={error}
                />
            </C.InputCampArea>

            <C.InputCampArea>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.InputSelect 
                    value={selectedCategory} 
                    onChange={e => setSelectedCategory(e.target.value)}
                    error={error}
                >
                    <option></option>
                    {categoriesList.map((item: CategorieOption, index: number)=>(
                        <option value={item.category} key={index}>{item.title}</option>
                    ))}
                </C.InputSelect>
            </C.InputCampArea>

            <C.InputCampArea>
                <C.InputTitle>Titulo</C.InputTitle>
                <C.Input 
                    type="text" 
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    error={error}
                />
            </C.InputCampArea>

            <C.InputCampArea>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input 
                    type="number"
                    value={taskValue}
                    onChange={e=>setTaskValue(parseFloat(e.target.value))}
                    error={error}
                />
            </C.InputCampArea>

            <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.Container>
    );
}