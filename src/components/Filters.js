import React, { useState } from 'react';
import './SearchBar.css';

const Filters = ({ getResponse }) => {
    const [active, setActive] = useState(true);

    const onFilterNew = () => {
        setActive(!active);
        getResponse('/new.json');
    };

    const onFilterHot = () => {
        setActive(!active);
        getResponse('/hot.json');
    };

    return (
        <div className="filter-item">
            <div className="header item">Sort By:</div>
            <div onClick={onFilterNew} className={`item ${active ? 'active' : ''}`}>New</div>
            <div onClick={onFilterHot} className={`item ${active ? '' : 'active'}`}>Hot</div>  
        </div>
    );
};  

export default Filters;