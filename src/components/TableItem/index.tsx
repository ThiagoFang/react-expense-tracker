import { categories } from '../../data/categories'
import { Item } from '../../types/Item';
import * as C from './styles'

import { formatDate } from '../../helpers/dateFilter'

type Props ={
    item: Item
    deleteItem: (title: string, date: Date) => void
}

export const TableItem = ({ item, deleteItem }: Props) => {
    const handleDeleteItem = () => {
        deleteItem(item.title, item.date)
    }

    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R${item.value.toFixed(2)}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn onClick={handleDeleteItem} pointer={true}>
                🗑️
            </C.TableColumn>
        </C.TableLine>
    );
}