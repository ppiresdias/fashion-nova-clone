const Swatch = (props) => {
    return (
      <div className={`swatch${props.first ? " swatch--first swatch--active" : ""}`} style={{ backgroundColor: props.color }} key={props.key}></div>
    );
};

export default Swatch;