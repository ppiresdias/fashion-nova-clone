// import Head from "next/head";
// import Filter from "../components/collections__Filter";
import Card from "../components/collections__Card";

// COLLECTIONS OR GALLERY PAGE
const Carousel = (props) => {
  const getPhotos = (count=18) => {
    let arr = [];
    let photos = {0: ["Hold on to this vibe tie dye Crop Top - Pink/combo", "001-top1-HoldOnToThisVibeTieDyeCropTop-Pinkcombo_MER.jpg", "001-top2-07-20-20Studio4_EF_CP_11-51-59_36_T8134_PinkCombo_2982_JK_360x.webp"], 1: ["Grind Time Beyond Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio eos culpa dignissimos, laborum fuga, maxime enim recusandae, perferendis consectetur nam!", "002-top1-11-07-19_Studio_1_DV_KYS_14-11-53_24__BNL1117_Nude__7_EH.jpg", "002-top2-11-07-19_Studio_1_DV_KYS_14-11-53_24__BNL1117_Nude__14_EH_360x.jpg"]};
    
    for(let i = 0; i < count; ++i) {
      let index = i % 2;
      let photo = photos[index];
      arr.push(
        <div className="carousel__item">
          <Card title={photo[0]} photo1={photo[1]} photo2={photo[2]} />
      </div>
      );
    }
    return arr;
  }

  return (
    <div className="container-fluid">
      <div className="carousel">
        <h4 className="carousel__header">Top Selling Items</h4>
        <div className="carousel__slider">
          {getPhotos()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;