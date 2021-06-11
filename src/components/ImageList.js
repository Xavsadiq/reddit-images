import './ImageList.css';
import React from 'react';
import ImageItem from './ImageItem';
import Masonary from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
};

const ImageList = ({ images }) => {
    const renderedList = images.map((image) => {
        if(image.data.post_hint === "image"){
            return (
            <ImageItem key={image.data.id} image={image} />
            );
        } else {
            return null;
        };
    });

    return (
        <div className="ui segment">
            <Masonary
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {renderedList}
            </Masonary>
        </div>
    );
}

export default ImageList;
