import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(term);
    };

    return (
            <div className="item">
                <div className="ui input">
                    <form onSubmit={onSubmit} className="search-box ui form">
                        <div className="field"> 
                            <input 
                                value={term} 
                                onChange={e => {setTerm(e.target.value)}} 
                                type="text" 
                                placeholder="Search /r/wallpapers..." 
                            />
                         </div>
                    </form>
                </div>
            </div>
    );  
};

export default SearchBar;