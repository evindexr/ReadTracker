import { BookCard } from './components/BookCard'
import { mockBooks } from './lib/mockData'
import './App.css'

export default function App() {
  return (
    <main className="app">
      <h1 className="app__title">Mi Biblioteca</h1>
      <ul className="app__list">
        {mockBooks.map((book) => (
          <li key={book.id} className="app__list-item">
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </main>
  )
}
