import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterSelected } from '../../features/filter/filterSlice';

export default function Filter() {
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state.filter);
    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
                <button
                    className={
                        filter === false
                            ? 'lws-filter-btn active-filter'
                            : 'lws-filter-btn'
                    }
                    onClick={() => dispatch(filterSelected(false))}
                >
                    All
                </button>
                <button
                    className={
                        filter === true
                            ? 'lws-filter-btn active-filter'
                            : 'lws-filter-btn'
                    }
                    onClick={() => dispatch(filterSelected(true))}
                >
                    Featured
                </button>
                
            </div>
        </div>
    )
}
