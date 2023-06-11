import React from 'react';

const ImageGallery = () => {
    // Assuming you have an array of image file names in your folder
    const imageFileNames = ['Calice.png', 'Collane.png',
        'contenitore.png', 'coppetta.png',
        'coppetta2.png', 'orecchini.png',
        'piattino.png', 'portachiavi.png',
        'tazza.png', 'tazza2.png',
        'tegliera.png', 'zerosprechi.png'];

    return (
        <>
        {
            imageFileNames.map((fileName, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img style={{ height: '20%', width: '20%', objectFit: 'contain' }} key={index} src={'../../../../assets/images/homepageSlide/' + fileName} alt={`Image ${index}`} />

                </div>
            ))
        }
        </>
    );
};

export default ImageGallery;