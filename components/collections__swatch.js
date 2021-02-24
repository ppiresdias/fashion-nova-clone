const Swatch = (props) => {
    return (
      <div className={`swatch${props.first ? " swatch--first swatch--active" : ""}`} style={{ backgroundColor: props.color }}></div>
    );
};

export default Swatch;