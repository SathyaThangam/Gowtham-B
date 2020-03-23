import React from 'react';
import './middle.css';
import Card from '../components/card';
function Pricing() {
    return (
        <div className="features">
            <div className="setheads">
                <h3 className="designs"> Pricing</h3>
            </div>
            <div className="displaypricing">
                <div className="coldis">
                    <Card title="Free" cost="0" f1="100 Screenshots" f2="Full page screenshots"
                        f3="Mobile screenshots" f4="Basic Support" button="Get for free" ></Card>
                </div>
                <div className="coldis">
                    <Card title="Lite" cost="7" f1="1,000 Screenshots" f2="Full page screenshots"
                        f3="Mobile screenshots" f4="Priority support" f5="CSS injection" button="Get started"></Card>
                </div>
                <div className="coldis">
                    <Card title="Medium" cost="35" f1="10,000 Screenshots" f2="Full page screenshots"
                        f3="Mobile screenshots" f4="Priority support" f5="CSS injection" f6="JS injection" button="Get started"></Card>
                </div>
                <div className="coldis">
                    <Card title="Large" cost="180" f1="100,000 Screenshots" f2="Full page screenshots"
                        f3="Mobile screenshots" f4="Premium support" f5="CSS injection" f6="JS injection" button="Get started"></Card>

                </div>

            </div>
            <div className="coldiss">
                <Card title="custom enterprise" type="width" text="Need to make millions of screenshots?
"button="contact us"></Card>
            </div>

        </div>
    )
}
export default Pricing;