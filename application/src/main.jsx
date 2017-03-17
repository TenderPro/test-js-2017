import ReactDOM from 'react-dom';
import React from 'react';

class Application extends React.Component {
    render(){
        return (
            <div>Hello world!</div>
        )
    }
}

ReactDOM.render(<Application/>, document.getElementById('app'));