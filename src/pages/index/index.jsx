import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../../components/searchForm'
import './index.css'
import PlaceItem from "../../components/placeItem";

export const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://xiangli-nearbyplaces-api.herokuapp.com';
console.log(URL, 'll', process.env.NODE_ENV)
class Index extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            searchInputValue: '',
            nearInputValue: '',
        }
        this.searchPlace = this.searchPlace.bind(this);
        this.reloadList = this.reloadList.bind(this);
    }
    async searchPlace(searchInputValue, nearInputValue) {
        if (!searchInputValue) {
            alert('plz enter any thing');
            return;
        }
        const list = await axios.get(`${URL}/search/${searchInputValue}/${nearInputValue || 'all'}`);
        console.log(list, 'list')
        if (!list.data.length) {
            alert('no record any more');
        } else {
            this.setState({
                list: list.data,
                searchInputValue,
                nearInputValue,
            })
        }
    }
    reloadList() {
        const {
            searchInputValue,
            nearInputValue,
        } = this.state;
        this.searchPlace(searchInputValue, nearInputValue);
    }
    render() {
        const {
            list
        } = this.state;
        return (
            <div className="index">
                <SearchForm isIndex searchPlace={this.searchPlace} />
                <div className="float-left ml-5 mt-md-n5">
                    <Link to="/addPlace">add new Place</Link>
                </div>
                <div className="list d-flex flex-wrap">
                    {
                        list.map(item => <PlaceItem item={item} reloadList={this.reloadList} />)
                    }
                </div>
            </div>
        );
    }
}

export default Index;