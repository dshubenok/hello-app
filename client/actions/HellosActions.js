import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const HelloActions = {
    loadHellos() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_HELLOS_REQUEST
        });

        api.listHellos()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_HELLOS_SUCCESS,
                hellos: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_HELLOS_FAIL,
                error: err
            })
        );
    },

    createHello(hello) {
        api.createHello(hello)
        .then(() =>
            this.loadHellos()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteHello(helloId) {
        api.deleteHello(helloId)
        .then(() =>
            this.loadHellos()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default HelloActions;
