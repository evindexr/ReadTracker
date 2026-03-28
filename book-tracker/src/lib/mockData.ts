import type { Book } from '../types/types'

export const mockBooks: Book[] = [
  {
    id: 'book-cien-anos',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    totalPages: 471,
    rating: 2,
    status: 'want_to_read',
    createdAt: '2026-03-01T10:00:00.000Z',
  },
  {
    id: 'book-principito',
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    totalPages: 96,
    rating: 5,
    status: 'reading',
    startDate: '2026-03-15',
    createdAt: '2026-03-10T14:30:00.000Z',
  },
  {
    id: 'book-1984',
    title: '1984',
    author: 'George Orwell',
    totalPages: 328,
    rating: 4,
    status: 'read',
    startDate: '2026-02-01',
    endDate: '2026-02-20',
    createdAt: '2026-01-25T09:00:00.000Z',
  },
]
