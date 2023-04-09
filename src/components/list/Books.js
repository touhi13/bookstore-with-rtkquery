import React from 'react'
import { useSelector } from 'react-redux';
import { useGetBooksQuery } from '../../features/api/apiSlice'
import Book from './Book'

export default function Books() {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const { filter, searchTerm } = useSelector((state) => state.filter);

    const filterByFeatured = (book) => {
        if (filter) {
            return book.featured === filter
        }
        return true;
    }

    const searchByText = (book) => {
        if (searchTerm !== '') {
            return book.name.toLowerCase().includes(searchTerm.toLowerCase())
        }
        return true;
    };
    // decide what to render
    let content = null;

    if (isLoading) {
        content = <p>Loading...</p>

    }

    if (!isLoading && isError) {
        content = <p>There was an error</p>;
    }

    if (!isLoading && !isError && books?.length === 0) {
        content = <p>No books found!</p>;
    }

    if (!isLoading && !isError && books?.length > 0) {
        content = books.filter(filterByFeatured).filter(searchByText).map((book) => <Book key={book.id} book={book} />);
    }
    return (
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content}
        </div>
    )
}
