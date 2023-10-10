import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../app/github/actions';
import { useAppSelector } from '../app/hooks';

const RepoCard = ({ repo }: { repo: IRepo }) => {
    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.github)
    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
    const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavourite(repo.html_url)
        setIsFav(true)
    }
    const removeFromFav = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFavourite(repo.html_url)
        setIsFav(false)
    }
    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <a href={repo.html_url} target='_blank'>
                <h2 className='text-lg font-bold'>{repo.full_name}</h2>
                <p>
                    Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                    Watchers: <span className='font-bold'>{repo.watchers}</span>
                </p>
                <p className='text-sm font-thin'>{repo?.description}</p>
                { !isFav && <button
                    className='mt-2 py-2 font-semibold px-4 bg-amber-200 rounded hover:shadow-md transition-all'
                    onClick={addToFav}>
                        Добавить
                </button>}
                { isFav && <button
                    className='text-white mt-2 py-2 px-4 bg-rose-500 font-semibold rounded hover:shadow-md transition-all'
                    onClick={removeFromFav}>
                        Удалить
                </button>}
            </a>
        </div>
    );
};

export default RepoCard;