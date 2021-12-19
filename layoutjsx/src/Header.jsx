import React from "react"


const arrow = {
    a : "<"
}
function Header() {
    return (

        <div className="container">
            <div className="head">
                <p className="arrow"> {arrow.a} </p>
            </div>
            <div className="head">
                <h2 className="Cname"> SAMSUNG</h2>
                <p id ="num" >239293321</p>
            </div>
            <div className="head">
                <button className="btn" href="#">Print</button>
            </div>
            

        </div>

    )
}

export default Header;
