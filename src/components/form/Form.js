import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation, useEditBookMutation } from '../../features/api/apiSlice';

export default function Form({ book }) {
    const [addBook, { /* data: book, */ isLoading }] = useAddBookMutation();
    const [editVideo, { isLoading: loading, isError, isSuccess }] =
        useEditBookMutation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [featured, setFeatured] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const { id, name: initialName, author: initialAuthor, thumbnail: initialThumbnail, price: initialPrice, rating: initialRating, featured: initialFeatured } = book || {};

    useEffect(() => {
        if (id) {
            setEditMode(true);
            setName(initialName)
            setAuthor(initialAuthor)
            setThumbnail(initialThumbnail)
            setPrice(initialPrice)
            setRating(initialRating)
            setFeatured(initialFeatured)
        } else {
            setEditMode(false);
            reset();
        }
    }, [id, initialName, initialAuthor, initialThumbnail, initialPrice, initialRating, initialFeatured]);

    const reset = () => {
        setName('')
        setAuthor('')
        setThumbnail('')
        setPrice('')
        setRating('')
        setFeatured(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ name, author, thumbnail, price, rating, featured });
        reset();
        navigate('/');
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        editVideo({
            id,
            data: { name, author, thumbnail, price, rating, featured },
        });
        setEditMode(false);
        reset();
        navigate('/');
    };

    return (
        <form className="book-form" onSubmit={editMode ? handleUpdate : handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input required className="text-input" type="text" id="lws-bookName" name="name" value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input required className="text-input" type="text" id="lws-author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input required className="text-input" type="number" id="lws-price" name="price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}
                    />
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={(e) => setFeatured(e.target.checked)}
                />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit" disabled={isLoading || loading}
            >{editMode ? "Update Book" : "Add Book"}</button>
        </form>
    )
}
