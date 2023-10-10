import React, { useEffect, useState } from 'react';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../app/github/github.api';
import { useDebounce } from '../hooks/debounse';
import RepoCard from '../components/RepoCard';

const Home = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const [dropDown, setDropDown] = useState(false)
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })
    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()
    useEffect(() => {
        setDropDown(debounced.length > 3 && data?.length! > 0)
    }, [debounced, data])
    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropDown(false)
    }
    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-600'>Ошибка загрузки</p>}
            <div className='relative w-[700px]'>
                <input 
                type='text' 
                className='border py-2 px-4 w-full h-[42px] mb-2' 
                placeholder='Найти пользователя'
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
                { dropDown && <ul className=' list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'>
                    {isLoading && <p className='text-center'>загрузка...</p>}
                    {data?.map(user => (
                        <li 
                        key={user.id} 
                        className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
                        onClick={() => clickHandler(user.login)}>
                            {user.login}
                        </li>
                    ))}
                </ul>}
                <div>
                    {areReposLoading && <p className='text-center'>Загрузка репозитариев...</p>}
                    {repos?.map((repo) => (
                        <RepoCard repo={repo} key={repo.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;