import React, { useState, useEffect } from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import reddit from '../apis/reddit';
import Filters from './Filters';

const App = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getResponse('/new.json');
    }, []);

    const getResponse = async (filter) => {
        const response = await reddit.get(filter);
        setImages(response.data.data.children);
    };

    const onFormSubmit = async (term) => {
        const searchResponse = await reddit.get('/search.json', {
            params: {
                q: term,
                restrict_sr: true
            }
        });

        setImages(searchResponse.data.data.children);
    };

        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <div className="ui menu navbar">
                            <Filters getResponse={getResponse} />
                            <SearchBar onFormSubmit={onFormSubmit} />
                            <a href="https://github.com/xavsadiq" className="right item github icon"><i className="github icon" /></a>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <ImageList images={images} />
                        </div>
                    </div>
                </div>

        );
    };


export default App;