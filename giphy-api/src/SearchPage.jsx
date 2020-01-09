import React from 'react';
// import axios from 'axios';
// import { debounce } from 'throttle-debounce';
import "./SearchPage.css";
import Display from './Display';
import { debounce } from 'throttle-debounce';
// import ReactTimeout from 'react-timeout'
// import Loader from 'react-loader-spinner'
// import InfiniteScroll from 'react-infinite-scroll-component';
// import select from './Display';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            datas: [],
            offset: 0,
            loading: false
        }
        // this.handlechange = this.handlechange.bind(this)

    }

    // componentDidMount() {
    //     // Detect when scrolled to bottom.
    //     this.refs.myscroll.addEventListener("scroll", () => {
    //         if (
    //             this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
    //             this.refs.myscroll.scrollHeight
    //         ) {
    //             this.loadMore();
    //         }
    //     });
    // }
    // loadMore() {
    //     this.setState({ loading: true });
    //     setTimeout(() => {
    //         this.setState({ offset: this.state.offset + 1, loading: false });
    //     }, 2000);
    // }
    handlescroll = () => {
        let main = this;
        var el = document.getElementById('page');
        console.log(el);
        window.addEventListener('scroll', function () {
            var isbottom = (el.getBoundingClientRect().bottom - window.innerHeight) <= 2
            // console.log(isbottom);
            if (isbottom) {
                main.page(main.state.search);
                // console.log(el.getBoundingClientRect().bottom);
            }
            // console.log(el.getBoundingClientRect().bottom);
            // console.log(window.innerHeight);
        })


    }
    page = (set) => {
        // console.log(set);
        // var cmp = [];
        var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${set}&limit=20&offset=${this.state.offset}`;
        // cmp.push(<div>
        //     <div className="loader"></div>
        // </div>);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                // console.log("content ", content.data);
                var detail = content.data;
                // var image = content.data.image;  

                this.setState({ datas: [...this.state.datas, ...detail] })
                // console.log(...this.state.datas, detail);
            });
        this.setState({ offset: this.state.offset + 1 })

    }
    select = (set) => {
        console.log(set);
        // var cmp = [];
        var url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${set}&limit=20&offset=${this.state.offset}`;
        // cmp.push(<div>
        //     <div className="loader"></div>
        // </div>);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log("content ", content.data);
                var detail = content.data;
                // var image = content.data.image;  

                this.setState({ ...this.state, datas: detail })
            });
        this.setState({ offset: this.state.offset + 1 })

    }
    handlechange = (e) => {
        this.setState({ search: e.target.value });
        debounce(this.select(e.target.value), 600);
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
            <div id="page" className="bodytag">
                <div className="Search-container" >
                    <input type="search" className="search" placeholder="search for GIPHY" onChange={(e) => this.handlechange(e)} />
                    <button type="button" className="buttonn fa fa-search" onClick={() => this.select(this.state.search)}>
                        <i className="fa ">
                        </i>
                    </button>

                </div>

                <div className="gif-container" ref={this.handlescroll}>
                    {/* {console.log("data ", this.state.datas)} */}
                    {this.state.datas !== undefined && this.state.datas.length !== 0 ? (
                        this.state.datas.map((data, index) => {
                            return (

                                <div className="contain" key={index}>
                                    <Display preview={data.images.fixed_height_downsampled.url} />
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

/* {this.state.setTimeout(<div><div className="loader"></div></div>, 300)} */