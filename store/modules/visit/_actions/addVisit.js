import API from 'api'

export default function({commit, dispatch, rootGetters}, visit) {
    return new Promise((resolve, reject) => {
        commit('loading', {status: true}, {root: true})
        API.AddVisit({
            ClientId: visit.client.id,
            TourAgencyId: visit.tourAgency.id,
            Visit: {
                CityId: visit.city.id || '',
                CountryId: visit.city.countryId || '',
                CheckInTime: visit.checkInTime || '',
                CheckOutTime: visit.checkOutTime || '',
                HotelId: visit.hotel.id || '',
                Info: {
                    TourCost: {
                        Amount: 0,
                        Currency: 'RUB'
                    },
                    AmountOfAdults: visit.amountOfAdults,
                    AmountOfChildren: visit.amountOfChildren,
                    AmountOfInfants: visit.amountOfInfants,
                    TourPartnerIds: visit.tourPartners,
                    LastTimeBeenHere: visit.lastTimeBeenHere,
                    LastVisitedCountries: visit.lastVisitedCountries,
                    MonthlyIncome: {
                        Amount: visit.monthlyIncome.amount,
                        Currency: visit.monthlyIncome.currency
                    },
                    FlightNumber: visit.flightNumber,
                    MethodOfCommunication: visit.methodOfCommunication,
                    PsychologicalPicture: visit.psychologicalPicture,
                    Appearance: visit.appearance,
                    AirlineId: visit.airline.id || ''
                }
            }
        }, data => {
            commit('loading', {status: false}, {root: true})
            resolve(data)
        }, error => {
            commit('loading', {status: false},{root: true})
            if (error && error.code === 16) {
                dispatch(`auth/AUTH_LOGOUT`, null, {root: true})
            } else if (error) {
                console.error('Request error', error)
            }
            reject(error)
        }, status => {
            // console.log('AddVisit::status', status)
        }, {
            sessionToken: rootGetters['auth/sessionToken']
        })
    })
}

