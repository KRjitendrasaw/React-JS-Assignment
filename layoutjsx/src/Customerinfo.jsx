import React from "react"


const mydata = {
    Appointment: "9:00 (01-01-2022)",
    Email: 'kumarsawji80@gmail.com',
    Phone: 9113749129,
}


function Customerinfo() {
    return (

        <div className="customer-info">
            <div id="appoint-info">
                <h3 className="appp">Appointment : </h3>
                <p id ="ans">{mydata.Appointment} </p>
            </div>
            <div id="mail-info">
                <h3 className="email">Email :</h3>
                <p id ="ans">{mydata.Email} </p>
            </div>
            <div id="phone-info">
                <h3 className="phone">Phone :</h3>
                <p id ="ans">{mydata.Phone} </p>
            </div>
        </div>

    )
}

export default Customerinfo;
