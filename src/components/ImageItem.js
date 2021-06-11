import React from 'react';

const ImageItem = ({ image }) => {
    return (
        <div>
            <a href={image.data.url}><img alt={image.data.title} src={image.data.url} /></a>
        </div>
    );
};

export default ImageItem;
