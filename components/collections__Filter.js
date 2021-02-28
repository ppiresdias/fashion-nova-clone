import Head from "next/head";
import Swatch from "./collections__swatch";

const seeMore = () => {
  return (
    <div className="show-more">
      <i className="fa fa-plus show-more__icon" aria-hidden="true"></i>
      <span className="show-more__text">Show More</span>
    </div>);
}

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

const getSwatches = (arr) => {
  return arr.map((item, index) => {
    return <div className="filter__swatch-row"><Swatch first={index ? false : true} color={item} key={index} /><label className="filter__label">{item}</label></div>
  });
}

// SEARCH FILTER FOR COLLECTIONS
const Filter = () => {
    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
        </Head>
        <section className="filter">
          <div className="filter__br filter__br--first" />
          <div className="filter__section">
            <h4 className="filter__title">SIZE</h4>
            {getCheckBoxOptions(["All", "XS", "S", "M", "L", "XL"])}
            {seeMore()}
          </div>
          <div className="filter__br" />
          <div className="filter__section">
            <h4 className="filter__title">COLORS</h4>
            {getSwatches(["black", "blue", "white", "pink", "brown", "red", "yellow", "green", "gray", "purple"])}
            {/* {getCheckBoxOptions(["black", "blue", "white", "pink", "brown", "red", "yellow", "green", "gray", "purple"])} */}
            {seeMore()}
          </div>
          <div className="filter__br" />
          <div className="filter__section">
            <h4 className="filter__title">PRICE</h4>
            {getCheckBoxOptions(["all", "$0-$25", "$25-$50", "$50-$100", "$100-150", "$150-200"])}
            {seeMore()}
          </div>
        </section>
      </>
    );
};

export default Filter;