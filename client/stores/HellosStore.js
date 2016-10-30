import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _hellos = [];
let _loadingError = null;
let _isLoading = true;

function formatHello(hello) {
    return {
        id: hello._id,
        title: hello.title,
        text: hello.text,
        color: hello.color || '#ffffff',
        createdAt: hello.createdAt
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getHellos() {
        return _hellos;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_HELLOS_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_HELLOS_SUCCESS: {
            _isLoading = false;
            _hellos = action.hellos.map( formatHello );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_HELLOS_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;
