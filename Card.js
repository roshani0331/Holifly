// import img1 from "../asserts/GOA.jpg"
// import img2 from "../asserts/ladhak.jpeg";
// import img3 from "../asserts/MANALI.jpg"
// import img4 from "../asserts/SHIMLA.jpg";
// import img5 from "../asserts/UDAIPUR.jpg";

function Card(props){ 
    return(
        <>
         <div className="cards">
            <div className="card">
            <img src = {props.imgsrc}  alt = "GOA"  className=""/>
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_tittle">{props.sname}</h3>
                    <a href={props.link} target="_self">
                        <button>click me</button>
                    </a>
                </div>
            </div>
         </div>
        </>
    )
}

export default Card;