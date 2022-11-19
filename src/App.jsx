import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const App = () => {

    const [categories, setCategories] = useState(['cats'])

    const onAddCategory = (newCategory) => {
        if (categories.find(w => newCategory.toLowerCase() == w.toLowerCase())) return

        setCategories(categories => [newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Finder</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
