import "./singlepage.scss";
import Slider2 from "../../components/slider/Slider2";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";

function SinglePage() {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider2 images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">R {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical"></div>
          <p className="title">Room Sizes</p>
          <div className="sizes"></div>
          <p className="title">Nearby Places</p>
          <div className="listHorizintal"></div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
