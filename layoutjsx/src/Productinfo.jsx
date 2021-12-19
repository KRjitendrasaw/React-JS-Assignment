import React from "react"

const prod = {
    arrow: ">",
    Pname: 'SAMSUNG Galaxy S3+',
    details: " Package inside the product conatins the one Adapter and one Headset and Manual card and one USB with warranty card .",
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
}

function Productinfo() {
    return (
        <div className="product-info">
            <div className="item1">
                <input id= "checkbox" type="checkbox" />
            </div>
            <div className="item1">
                <img src={prod.profileImg} alt="pmage"/>
            </div>
            <div className="item1">
                <div id="last">
                    <h3 >{prod.Pname}</h3>
                    <p id="details">{prod.details} </p>
                    <p id="arrow">{prod.arrow}</p> 
                </div>
            </div>
        </div>

    )
}

export default Productinfo;
