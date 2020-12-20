import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <div>
                Something Error, plz go <button onClick={() => history.back()}>back</button> and check...
            </div>
        );
    }
}


export default Error;