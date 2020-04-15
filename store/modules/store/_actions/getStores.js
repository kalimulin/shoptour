import API from 'api'

import model from '@/store/modules/store/model'

const Store = model.Store
const ContactInfo = model.ContactInfo
const Percent = model.Percent
const ContactInfoType = model.ContactInfoType

export default function({commit, dispatch, rootGetters}, context) {
    if (context) {
        commit('loading', {status: true}, {root: true})
        let storesList = []
        return new Promise((resolve, reject) => {
            API.GetStores({
                CityId: (context && context !== 'top') ? context : undefined
            }, data => {
                commit('loading', {status: false}, {root: true})
                storesList.push(new Store(
                    data.Id,
                    data.CityId,
                    data.CountryId,
                    data.Name,
                    data.ContactInfo.map(p => new ContactInfo(new ContactInfoType(p.Type.Id, p.Type.Type), p.Value)),
                    data.GoodIds,
                    data.Percents.map(p => new Percent(p.CategoryId, p.Percent)),
                ))
            }, error => {
                commit('loading', {status: false},{root: true})
                if (error && error.code === 16) {
                    dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
                } else if (error) {
                    reject(error)
                    console.error('Request error', error)
                }
                resolve(storesList)
                commit('storesList', storesList)
            }, status => {
                // console.log('Stores::status', status)
            }, {
                sessionToken: rootGetters['auth/sessionToken']
            })
        })
    }
}

