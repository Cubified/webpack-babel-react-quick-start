import React from 'react';
import ReactDOM from 'react-dom';

var d = (a)=> {
    return document.getElementById(a)
};

var Placeholder = React.createClass({
    render: function () {
        return (
            <div>
                Hello!
            </div>
        );
    }
});

ReactDOM.render(<Placeholder />, d('container'));