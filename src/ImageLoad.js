import React, { useState, useEffect } from 'react';

const ImageLoad = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the image's src and set loading to false
      // this.setState({ currentSrc: src, loading: false });
      setLoading(false);
      updateSrc(src);
    }
  }, [])

  return (
    <img
      src={currentSrc}
      className="ProgressiveImage"
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .15s linear"
      }}
      alt={alt}
    />
  )
});

export default ImageLoad;