import React from 'react';

import ColorPicker from './ColorPicker.jsx';

import './HelloEditor.less';

const HelloEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    },

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    },

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },

    handleColorChange(color) {
        this.setState({ color });
    },

    handleHelloAdd() {
        const newHello = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onHelloAdd(newHello);
        this.setState({ text: '', title: '', color: '#FFFFFF' });
    },

    render() {
        return (
            <div className='HelloEditor'>
                <input
                    type='text'
                    className='HelloEditor__title'
                    placeholder=''
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Введите имя'
                    rows={5}
                    className='HelloEditor__text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className='HelloEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className='HelloEditor__button'
                        disabled={!this.state.text}
                        onClick={this.handleHelloAdd}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        );
    }
});

export default HelloEditor;
