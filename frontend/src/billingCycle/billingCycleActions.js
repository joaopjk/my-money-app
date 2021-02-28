import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {reset as resetForm, initialize} from 'redux-form';
import {showTabs, selectTab} from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(() => {
                toastr.success('Sucesso', 'Operação realizada com sucesso !');
                dispatch([//Só é possível por causa do redux-mute
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.forEach(error => toastr.error('Erro', error));
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm',billingCycle)
    ]
}

export function init() {

}