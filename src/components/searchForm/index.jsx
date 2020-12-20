import React, {Component} from 'react';
import './index.css';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchInputFocus: false,
            nearInputFocus: false,
            searchInputValue: '',
            nearInputValue: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
    }

    onInputChange(type, value) {
        console.log(type, value)
        this.setState({
            [type]: value
        })
    }

    onInputFocus(type) {
        console.log(type, 'focus')
        this.setState({
            [type]: !this.state[type]
        })
    }

    render() {
        const {
            searchInputFocus,
            searchInputValue,
            nearInputValue
        } = this.state;
        const {
            isIndex,
            searchValue,
            nearValue
        } = this.props;
        return (
            <form className="input-form d-flex position-relative"
                  style={(() => !isIndex ? {
                      position: 'relative',
                      top: 0,
                      left: 0,
                      transform: 'none',
                      margin: '10px auto'
                  } : {})()}>
                <label htmlFor="search" className="d-flex align-items-center flex-grow-1 m-0">
                    <span className="input-text">Find</span>
                    <input type="text" className=" flex-grow-1 form-control" id="search" autoComplete="off"
                           onChange={(e) => this.onInputChange('searchInputValue', e.target.value)}
                           placeholder="plumbers, delivery, takeout..."
                           name="search"
                           value={searchInputValue || searchValue}
                           onFocus={() => this.onInputFocus('searchInputFocus')}
                    />
                    {searchInputFocus && <ul className="searchType list-style-none cursor-pointer">
                        <li onClick={() => this.onInputChange('searchInputValue', 'Restaurants')}>Restaurants</li>
                        <li onClick={() => this.onInputChange('searchInputValue', 'Delivery')}>Delivery</li>
                        <li onClick={() => this.onInputChange('searchInputValue', 'Takeout')}>Takeout</li>
                        <li onClick={() => this.onInputChange('searchInputValue', 'Accountants')}>Accountants</li>
                        <li onClick={() => this.onInputChange('searchInputValue', 'Plumbers')}>Plumbers</li>
                        <li onClick={() => this.onInputChange('searchInputValue', 'Auto Repair')}>Auto Repair</li>
                    </ul>}
                </label>
                <label htmlFor="near" className="d-flex align-items-center flex-grow-1 m-0">
                    <span className="input-text">Near</span>
                    <input type="text" className=" flex-grow-1 form-control" id="near" autoComplete="off"
                           onChange={(event => this.onInputChange('nearInputValue', event.target.value))}
                           value={nearInputValue || nearValue}
                           name="near"
                           onFocus={() => this.onInputFocus('nearInputFocus')}
                    />
                </label>
                <button type="submit" onClick={(event) => { event.preventDefault(); this.props.searchPlace(searchInputValue, nearInputValue)}} className="btn btn-outline-dark">Search</button>
            </form>

        );
    }
}

export default SearchForm;