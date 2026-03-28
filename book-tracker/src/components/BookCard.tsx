import type { Book } from '../types/types'
import './BookCard.css'

function statusLabel(status: Book['status']): string {
  switch (status) {
    case 'want_to_read':
      return 'Quiero leer'
    case 'reading':
      return 'Leyendo'
    case 'read':
      return 'Leído'
  }
}

type BookCardProps = {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const stars = '⭐'.repeat(book.rating)

  return (
    <article className="book-card">
      <h2 className="book-card__title">{book.title}</h2>
      <p className="book-card__author">{book.author}</p>
      <p className="book-card__meta">
        <span className="book-card__label">Estado:</span>{' '}
        <span className="book-card__status">{statusLabel(book.status)}</span>
      </p>
      <p className="book-card__meta" aria-label={`${book.rating} de 5 estrellas`}>
        <span className="book-card__label">Valoración:</span>{' '}
        <span className="book-card__rating">{stars}</span>
      </p>
    </article>
  )
}
