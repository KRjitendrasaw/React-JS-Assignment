import React from "react"



function Orderinfo() {
    return (

        <div className="order-info">
            <div className="item">
                <h3 className="status">Status</h3>
                <ul><li>In Progress</li></ul>
            </div>
            <div className="item">
                <h3 className="Door">Door</h3>
                <p className="Door">Mark </p>
            </div>
            <div className="item">
                <h3 className="Time">Time</h3>
                <p className="Time"> 10:30 (25-01-2022)</p>
            </div>
        </div>

    )
}

export default Orderinfo;
