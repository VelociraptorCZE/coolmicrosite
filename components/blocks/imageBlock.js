export default ({url, width = "100%", height, alt, align}) => (
  <img data-src={url} style={{width, height}} className={`block lazyload ${align}`} alt={alt}/>
);