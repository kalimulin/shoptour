import API from 'api'

import model from '@/store/modules/store/model'

const Store = model.Store
const ContactInfo = model.ContactInfo
const Percent = model.Percent
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, storeId) {
    return new Promise((resolve, reject) => {
        if (storeId) {
            commit('loading', {status: true}, {root: true})
            // console.log('-------', storeId)
            let store = {}
            API.GetStore({Id: storeId}, data => {
                commit('loading', {status: false}, {root: true})
                store = new Store(
                    data.Id,
                    data.CityId,
                    data.CountryId,
                    data.Name,
                    data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                    data.GoodIds,
                    data.Percents.map(p => new Percent(p.CategoryId, p.Percent)),
                )
            }, error => {
                commit('loading', {status: false}, {root: true})
                if (error && error.code === 16) {
                    dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
                } else if (error) {
                    console.error('Request error', error)
                    reject(error)
                } else {
                    commit('store', store)
                    resolve(store)
                }
            }, status => {
                // console.log('Store::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        } else {
            reject('No store Id')
        }
    })
}

