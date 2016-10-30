import React from 'react';

import HellosStore from '../stores/HellosStore';
import HellosActions from '../actions/HellosActions';

import HelloEditor from './HelloEditor.jsx';
import HellosGrid from './HellosGrid.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: HellosStore.isLoading(),
        hellos: HellosStore.getHellos()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        HellosActions.loadHellos();
    },

    componentDidMount() {
        HellosStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        HellosStore.removeChangeListener(this._onChange);
    },

    handleHelloDelete(hello) {
        HellosActions.deleteHello(hello.id);
    },

    handleHelloAdd(helloData) {
        HellosActions.createHello(helloData);
    },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>HellosApp</h2>
                <HelloEditor onHelloAdd={this.handleHelloAdd} />
                <HellosGrid hellos={this.state.hellos} onHelloDelete={this.handleHelloDelete} />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
