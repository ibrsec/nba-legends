import cardStyle from "./Card.module.scss";
 
const Card = ({ legend }) => {
 


  const {
    name,
    img,
    statistics: [points, rebaunds, assist, allStar],
  } = legend;
 
  const detailsToggle = function(e)  {   
    
    if(e.target.closest("#card").querySelector("#details").classList.contains("active")){
        e.target.closest("#card").querySelector("#details").style.transform="translateX(110%)"

    }else{
        e.target.closest("#card").querySelector("#details").style.transform="translateX(0)"

    }
        e.target.closest("#card").querySelector("#details").classList.toggle("active");
  } 

  return (
    <div className={cardStyle.card} onClick={detailsToggle} id="card">
      <div className={cardStyle.imgContainer}>
        <img src={img} alt=""  />

        <div className={cardStyle.details} id="details">
          <div>
            <span>🏀 {points}</span>
            <span>🏀 {rebaunds}</span>
            <span>🏀 {assist}</span>
            <span>🏀 {allStar}</span>{" "}
          </div>
        </div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
