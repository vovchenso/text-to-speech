import React from 'react';
import ReactDOM from 'react-dom';
import InputArea from './input/InputArea';

import './main.less';

class Content extends React.Component {
    render() {
        return (
            <div>
                <InputArea/>
            </div>
        )
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);