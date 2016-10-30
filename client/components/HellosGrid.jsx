import React from 'react';
import Hello from './Hello.jsx';

import Masonry from 'react-masonry-component';

import './Hellos.less';

const HellosGrid = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Hello',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='HellosGrid'
                options={masonryOptions}
            >
                {
                    this.props.hellos.map(hello =>
                        <Hello
                            key={hello.id}
                            title={hello.title}
                            onDelete={this.props.onHelloDelete.bind(null, hello)}
                            color={hello.color}
                        >
                            {'Hello, ' + hello.text}
                        </Hello>
                    )
                }
            </Masonry>
        );
    }
});

export default HellosGrid;
