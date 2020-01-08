import React from 'react';
// import axios from 'axios';
// import { debounce } from 'throttle-debounce';
import "./SearchPage.css";
import Display from './Display';
// import select from './Display';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            datas: []
        }
        // this.handlechange = this.handlechange.bind(this)

    }
    select = (set) => {
        console.log(set);
        var offset = 0;
        var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${set}&limit=24&offset=${offset}`;
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log("content ", content);
                var detail = content.data;
                // var image = content.data.image;

                this.setState({ ...this.state, datas: detail, })
            });
        offset += 25;
    }
    handlechange = (e) => {
        this.setState({ search: e.target.value });
    }


    //     handledebounce=(e)=>{

    //         this.props.select.apply(this, [this.state.search]);
    //     }, 500);
    //  },
    //     }{debounce(600, (search) => this.setState({ search }))} 

    // this.handledebounce();
    // createList = (details) => {
    //     details.forEach(
    //         this.setState({
    //             data:[{
    //             titleinput: details.title,
    //             url: details.url,
    //             
    //         }]
    //     }),
    //     );preview: details.downsized_large.url,
    // }
    // var loadMore = function() {
    //     for (var i = 0; i < 20; i++) {
    //       var item = document.createElement('li');
    //       item.innerText = 'Item ' + nextItem++;
    //       listElm.appendChild(item);
    //     }
    //   }
    render() {

        return (
            <div className="bodytag">
                <div className="Search-container" >
                    <input type="search" className="search" placeholder="search for GIPHY" onChange={(e) => this.handlechange(e)} />

                    <button type="button" className="buttonn fa fa-search" onClick={() => this.select(this.state.search)}>
                        <i className="fa ">
                        </i>
                    </button>
                </div>

                <div className="gif-container">
                    {console.log("data ", this.state.datas)}
                    {this.state.datas !== undefined && this.state.datas.length !== 0 ? (
                        this.state.datas.map((data, index) => {
                            return (
                                <div className="contain" key={index}>
                                    {console.log("data ", data.title, data.url)}
                                    <Display title={data.title} preview={data.images.downsized_large.url} />
                                </div>

                            );
                        }
                        )
                    ) : null}

                </div>
            </div>

        );


    }
}
export default SearchPage;

