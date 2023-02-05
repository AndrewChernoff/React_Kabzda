import { memo, useCallback, useState } from "react"

const UseCallBack = () => {

    const [books, setBooks]  = useState<string[]>(['HTML', 'CSS', 'RECT', 'REDUX'])
    const [counter, setCounter] = useState<number>(0)

    //const onAddBook = () => setBooks([...books, 'Angular'])

    const onAddBook = useCallback(() => {
        setBooks([...books, 'Angular'])
    },[books])

    return <div>
        <h2>UseCallback</h2>
        <p>counter: {counter} <button onClick={()=>setCounter(counter+1)}>+</button></p>
    <Books books={books} onAddBook={onAddBook}/>
    </div>
}

type BooksType = {
    books: string[]
    onAddBook: () => void
}

const Books = memo(({books, onAddBook}: BooksType) => {
    console.log('Books')
    return <div>
        {books.map(b => <ul>{b}</ul>)}
        <button onClick={onAddBook}>+</button>
    </div>
})

export default UseCallBack