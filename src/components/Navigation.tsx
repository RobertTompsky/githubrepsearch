import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[56px] px-10 shadow-md bg-sky-950 text-white'>
            <h3 className='font-bold text-xl'>Github Search</h3>
            <div className='flex gap-3 font-semibold'>
                <Link className='active:text-slate-400' to='/'>Главная</Link>
                <Link className='active:text-slate-400' to='/favourites'>Избранное</Link>
            </div>
        </nav>
    );
};

export default Navigation;