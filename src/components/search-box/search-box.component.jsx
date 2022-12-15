import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <input 
            type="search" 
            className={`search-box ${this.props.className}`}
            placeholder={this.props.placeholder} 
            onChange={this.props.onChangeHandler} ></input>
        )
    }
}

export default SearchBox