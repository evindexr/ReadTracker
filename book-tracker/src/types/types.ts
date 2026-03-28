/** Estado del libro en tu biblioteca personal. */
export type BookStatus = 'want_to_read' | 'reading' | 'read'

/** Valoración de 1 a 5 estrellas. */
export type BookRating = 1 | 2 | 3 | 4 | 5

export interface Book {
  id: string
  title: string
  author: string
  coverUrl?: string
  totalPages: number
  rating: BookRating
  status: BookStatus
  startDate?: string
  endDate?: string
  notes?: string
  createdAt: string
}

export interface Category {
  id: string
  name: string
  color: string
}

export interface ReadingLog {
  id: string
  bookId: string
  logDate: string
  pagesRead: number
  minutesRead: number
  notes?: string
  createdAt: string
}
