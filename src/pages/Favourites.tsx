import React from 'react';
import { useAppSelector } from '../app/hooks';

const Favourites = () => {
    const { favourites} = useAppSelector(state => state.github)
    if (favourites.length === 0) return <p className='text-center font-bold'>Список пуст</p>
    return (
        <div className='w-1/2 text-center mx-auto mt-10'>
            <ul className='list-none grid grid-cols-2 gap-2'>
                {favourites.map(f => (
                    <li className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all content-start text-justify whitespace-pre-wrap' key={f}>
                        <div>
                            <a className='font-semibold' href={f} target='_blank'>{f}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favourites;