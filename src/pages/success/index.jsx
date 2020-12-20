import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Success extends Component {
    render() {
        return (
            <div>
                add success, go to <Link to="/">index</Link> or <button onClick={() => history.back()}>click</button> and add more
            </div>
        );
    }
}


export default Success;