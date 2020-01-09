import React from 'react';
import "./SearchPage.css";
var GifPlayer = require('react-gif-player');

class Display extends React.Component {


    // select = (search) => {
    //     var keyword = search;
    //     var offset = 0;
    //     var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${keyword}&limit=24&offset=${offset}`;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(content => {
    //             console.log("data", content.data);
    //             //const response = await axios.get(url)

    //         });
    //     offset += 25;
    // }

    componentDidMount = () => {
        console.log("did mount ", this.props)
    }

    render() {
        // var data = [{
        //     title: this.props.title,
        //     url: this.props.url,
        //     preview: this.props.preview.url,
        // }]
        // console.log(data);
        return (
            <div className="container">
                <div className="fig">
                    <GifPlayer gif={this.props.preview} />

                </div>

            </div>

        );
    }
    // console.log("data", content.data);
}
export default Display;