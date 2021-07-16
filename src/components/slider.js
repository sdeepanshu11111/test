import Asset from "../img/asset.jpg";

const Slider = () => {
  return (
    <div className="grid-container">
      <main className="grid-item main">
        <div className="items">
          <div className="item item1">
            <img src={Asset} alt="" />
            <div className="caption">
              <p>$3999390</p>
            </div>
          </div>
          <div className="item item2">
            <img src={Asset} alt="" />
            <div className="caption">
              <p>$32220</p>
            </div>
          </div>
          <div className="item item3">
            <img src={Asset} alt="" />
            <div className="caption">
              <p>$309990</p>
            </div>
          </div>
          <div className="item item4">
            <img src={Asset} alt="" />
            <div className="caption">
              <p>$30390</p>
            </div>
          </div>
          <div className="item item5">
            <img src={Asset} alt="" />
            <div className="caption">
              <p>$30390</p>
            </div>
          </div>
          <div className="item item6">
            <img src={Asset} alt="" />
            <div className="caption">
              <p>$30390</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slider;
