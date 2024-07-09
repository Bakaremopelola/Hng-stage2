import "./Category.css";
import Cabbage from "../assets/Cabbage.png";
import Orange from "../assets/Orange.png";
import Bay from "../assets/Bay.png";
import Bottle from "../assets/Bottle.png";

const Category = () => {
  return (
    <div>
      <h1 className='category'>Category</h1>
      <div className="categoryBox">
        <div className="categoryItem1">
          <img src={Orange} alt="" draggable="false" className='categoryImg'/>
          <p className="categoryInfo">fruit</p>
        </div>

        <div className="categoryItem2">
          <img src={Cabbage} alt="" draggable="false" className='categoryImg'/>
          <p className="categoryInfo">vegetables</p>
        </div>

        <div className="categoryItem3">
          <img src={Bottle} alt="" draggable="false" className='categoryImg'/>
          <p className="categoryInfo">drinks</p>
        </div>

        <div className="categoryItem4">
          <img src={Bay} alt="" draggable="false"/>
          <p className="categoryInfo_two">spices</p>
        </div>
      </div>
    </div>
  );
};

export default Category;





