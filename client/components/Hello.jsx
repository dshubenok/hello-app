import React from 'react';

import './Hello.less';

const Hello = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };

        return (
            <div className='Hello' style={style}>
                <span className='Hello__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                    ?
                        <h4 className='Hello__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className='Hello__text'>{this.props.children}</div>
            </div>
        );
    }
});

export default Hello;
