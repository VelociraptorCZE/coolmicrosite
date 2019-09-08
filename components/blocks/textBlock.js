export default ({text, width, fontSize, color, align}) => (
  <p style={{fontSize, color, width}} className={`block ${align}`}>{text}</p>
);