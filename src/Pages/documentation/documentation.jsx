import React from 'react';
import './documentation.css';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Infocard from '../../components/info';
import m from '../../images/ss.png';
function Documentation() {
    return (
        <div className="documentation">
            <div className="abouts">
                <div className="navbard">
                    <Navbar></Navbar>
                </div>
                <div className="bodyset">
                    <div className="space">
                        <Sidebar></Sidebar>
                    </div>
                    <Infocard head="Introduction" content="ApiFlash is a simple yet powerful screenshot API that any modern company can easily use to make pixel perfect website screenshots at scale. An up to date version of Chrome is used to ensure that all modern web features are fully supported and that rendering is exactly as you would expect. It's also built over AWS Lambda to make sure that it truly scales and keeps being stable under heavy workloads."
                        subcontent="We're one of the most cost efficient screenshot API out there and we are dedicated to provide an awesome service to all companies, big or small."></Infocard>
                    <Infocard head="Access" content="The API can be accessed through a unique HTTPS endpoint that supports both GET and POST methods."
                        content2="All API calls needs to be authenticated using a valid access key that can be found in the dashboard. For a GET request, the access key is passed in the query string as all other parameters."
                        content3="For a POST request, the access key is passed as form data as every other parameter."
                        content4="By default the API returns directly the screenshot image data. It also passes along the appropriate Content-Type and Content-Length headers. If the response_type parameter is set to json, then the response contains a JSON document with links to the resulting screenshot."
                    ></Infocard>

                </div>
            </div>
            <div className="message">
                <img src={m}></img>
            </div>
        </div>)
}
export default Documentation;