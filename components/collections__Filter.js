const getCheckBoxOptions = (arr) => {
    return arr.map((item, index) => {
      return (
        <div className="filter__checkbox-row" key={index}>
          <input
            className="filter__checkbox"
            type="checkbox"
            name={item}
            value={item}
            id={item}
          ></input>
          <label className="filter__label" htmlFor={item}>{item}</label>
      </div>
    );
  });
};

const Filter = () => {
    return (
      <section className="filter">
        <div className="filter__br filter__br--first" />
        <div className="filter__section">
          <h4 className="filter__title">SIZE</h4>
          {getCheckBoxOptions(["All", "XS", "S", "M", "L", "XL"])}
        </div>
        <div className="filter__br" />
        <div className="filter__section">
          <h4 className="filter__title">COLORS</h4>
          {getCheckBoxOptions(["all", "black", "blue", "white", "pink", "brown", "red", "yellow", "green", "gray", "purple"])}
        </div>
        <div className="filter__br" />
        <div className="filter__section">
          <h4 className="filter__title">PRICE</h4>
          {getCheckBoxOptions(["all", "$0-$25", "$25-$50", "$50-$100", "$100-150", "$150-200"])}
        </div>
      </section>
    );
};

export default Filter;