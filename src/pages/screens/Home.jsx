import React from "react";
import { getData, handleLogout } from "../config/helpers";

export default function Home() {
    if (!localStorage.getItem("mfc")){
        window.location = '/login'
    }

    return(
        <>
            <div style={{color:"", float:"left", marginTop:"9%", marginLeft:"15%"}}><b>Welcome {JSON.parse(getData())?.name}</b></div>
            <br />
            <div className="container">
            
            <div className="row">
            <div className="col-lg-6"><h3>FuelCredit <span className="fuelcredit-plan-card--basic" style={{color:"Green"}}>Quick</span></h3><ul><li>For Ride-hailing Drivers on Uber and Bolt</li><li>Maximum credit: ₦5,000</li><li>Pay back in 3 days</li></ul>
            <button>Subscribe</button>
            </div>
            <div className="col-lg-6"><h3>FuelCredit <span className="fuelcredit-plan-card--basic" style={{color:"Orange"}}>Basic</span></h3><ul><li>For Ride-hailing Drivers on Uber and Bolt</li><li>Maximum credit: ₦5,000</li><li>Pay back in 3 days</li></ul><button>Subscribe</button></div>
            <div className="col-lg-6"><h3>FuelCredit <span className="fuelcredit-plan-card--basic" style={{color:"blue"}}>Convenience</span></h3><ul><li>For Ride-hailing Drivers on Uber and Bolt</li><li>Maximum credit: ₦5,000</li><li>Pay back in 3 days</li></ul><button>Subscribe</button></div>
            <div className="col-lg-6"><h3>FuelCredit <span className="fuelcredit-plan-card--basic" style={{color:"Purple"}}>Premium</span></h3><ul><li>For Ride-hailing Drivers on Uber and Bolt</li><li>Maximum credit: ₦5,000</li><li>Pay back in 3 days</li></ul><button>Subscribe</button></div>
            </div>
            <div style={{marginTop:"30px"}}>
            <button className="btn btn-dark" onClick={()=>{ handleLogout('/login') }}>Logout</button>
            </div>
            
        </div>
        </>



    )
}