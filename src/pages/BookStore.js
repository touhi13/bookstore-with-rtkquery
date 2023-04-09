import React from 'react'
import Filter from '../components/filter/Filter'
import Books from '../components/list/Books'

export default function BookStore() {
    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <Filter />
                <Books />
            </div>
        </main>

    )
}
