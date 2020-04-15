

function pack_string(_, v)   { return v }
function unpack_string(v) { return v }

function pack_bool(_, v)   { return v }
function unpack_bool(v) { return v }

function pack_int64(_, v)   { return v }
function unpack_int64(v) { return v }

function pack_uint64(_, v)   { return v }
function unpack_uint64(v) { return v }

function pack_float(_, v)   { return v }
function unpack_float(v) { return v }

function bind(func, context) {
    return function() {
        return func.apply(context, arguments)
    }
}

function callWrapper(call) {
    this.cancel = () => {
        call.cancel()
    }
    return this
}

function Meta(options, meta) {
    if (options.deadline !== undefined) {
        if (options.deadline !== 0) {
            meta.deadline = new Date().getTime() + options.deadline
        }
    } else {
        meta.deadline = new Date().getTime() + 7 * 1000
    }
    if (options.sessionToken) {
        meta.SessionToken = options.sessionToken
    }
    return meta
}




function pack_AddContactInfoTypeReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddContactInfoTypeReq()
	// Type 
	m.setType( pack_string( proto, msg.Type ) )
 
	return m
}


function unpack_AddContactInfoTypeReq(msg) {
	const m = {}
 
	m.Type = unpack_string( msg.getType() )
 
	return m
}



function pack_DeleteContactInfoTypeReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteContactInfoTypeReq()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 
	return m
}


function unpack_DeleteContactInfoTypeReq(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
 
	return m
}



function pack_PlannedPayout(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.PlannedPayout()
	// PayoutId 
	m.setPayoutid( pack_string( proto, msg.PayoutId ) )
 	// Month 
	m.setMonth( pack_int64( proto, msg.Month ) )
 	// Year 
	m.setYear( pack_int64( proto, msg.Year ) )
 	// Earnings 
	m.setEarnings( pack_Cost( proto, msg.Earnings ) )
 
	return m
}


function unpack_PlannedPayout(msg) {
	const m = {}
 
	m.PayoutId = unpack_string( msg.getPayoutid() )
  
	m.Month = unpack_int64( msg.getMonth() )
  
	m.Year = unpack_int64( msg.getYear() )
  
	m.Earnings = unpack_Cost( msg.getEarnings() )
 
	return m
}



function pack_ActualPayout(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.ActualPayout()
	// PayoutId 
	m.setPayoutid( pack_string( proto, msg.PayoutId ) )
 	// Month 
	m.setMonth( pack_int64( proto, msg.Month ) )
 	// Year 
	m.setYear( pack_int64( proto, msg.Year ) )
 	// PaidOff 
	m.setPaidoff( pack_Cost( proto, msg.PaidOff ) )
 	// Completed 
	m.setCompleted( pack_bool( proto, msg.Completed ) )
 
	return m
}


function unpack_ActualPayout(msg) {
	const m = {}
 
	m.PayoutId = unpack_string( msg.getPayoutid() )
  
	m.Month = unpack_int64( msg.getMonth() )
  
	m.Year = unpack_int64( msg.getYear() )
  
	m.PaidOff = unpack_Cost( msg.getPaidoff() )
  
	m.Completed = unpack_bool( msg.getCompleted() )
 
	return m
}



function pack_SetPaidOffForEmployeeReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetPaidOffForEmployeeReq()
	// PayoutId 
	m.setPayoutid( pack_string( proto, msg.PayoutId ) )
 	// PaidOff 
	m.setPaidoff( pack_Cost( proto, msg.PaidOff ) )
 	// Completed 
	m.setCompleted( pack_bool( proto, msg.Completed ) )
 
	return m
}


function unpack_SetPaidOffForEmployeeReq(msg) {
	const m = {}
 
	m.PayoutId = unpack_string( msg.getPayoutid() )
  
	m.PaidOff = unpack_Cost( msg.getPaidoff() )
  
	m.Completed = unpack_bool( msg.getCompleted() )
 
	return m
}



function pack_GetPayoutReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPayoutReq()
	// Month 
	m.setMonth( pack_int64( proto, msg.Month ) )
 
	return m
}


function unpack_GetPayoutReq(msg) {
	const m = {}
 
	m.Month = unpack_int64( msg.getMonth() )
 
	return m
}



function pack_GetPayoutRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPayoutRep()
	// PlannedPayout 
	m.setPlannedpayout( pack_PlannedPayout( proto, msg.PlannedPayout ) )
 	// ActualPayout 
	m.setActualpayout( pack_ActualPayout( proto, msg.ActualPayout ) )
 	// Employee 
	m.setEmployee( pack_User( proto, msg.Employee ) )
 
	return m
}


function unpack_GetPayoutRep(msg) {
	const m = {}
 
	m.PlannedPayout = (msg.hasPlannedpayout() ? unpack_PlannedPayout( msg.getPlannedpayout() ) : undefined)
  
	m.ActualPayout = (msg.hasActualpayout() ? unpack_ActualPayout( msg.getActualpayout() ) : undefined)
  
	m.Employee = unpack_User( msg.getEmployee() )
 
	return m
}



function pack_SetTripInStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetTripInStoreReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// TripInStore 
	m.setTripinstore( pack_TripInStore( proto, msg.TripInStore ) )
 
	return m
}


function unpack_SetTripInStoreReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	m.TripInStore = unpack_TripInStore( msg.getTripinstore() )
 
	return m
}



function pack_DeleteTripInStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteTripInStoreReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// TripInStore 
	m.setTripinstore( pack_TripInStore( proto, msg.TripInStore ) )
 
	return m
}


function unpack_DeleteTripInStoreReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	m.TripInStore = unpack_TripInStore( msg.getTripinstore() )
 
	return m
}



function pack_GetTotalProfitRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTotalProfitRep()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// TotalCost 
	m.setTotalcost( pack_Cost( proto, msg.TotalCost ) )
 	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// Date 
	m.setDate( pack_string( proto, msg.Date ) )
 	// StorePersent 
	m.setStorepersent( pack_int64( proto, msg.StorePersent ) )
 	// Profit 
	m.setProfit( pack_Cost( proto, msg.Profit ) )
 	// Agency 
	m.setAgency( pack_TourAgency( proto, msg.Agency ) )
 	// EmployeeId 
	m.setEmployeeid( pack_string( proto, msg.EmployeeId ) )
 	// Store 
	m.setStore( pack_Store( proto, msg.Store ) )
 
	return m
}


function unpack_GetTotalProfitRep(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.TotalCost = unpack_Cost( msg.getTotalcost() )
  
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.Date = unpack_string( msg.getDate() )
  
	m.StorePersent = unpack_int64( msg.getStorepersent() )
  
	m.Profit = unpack_Cost( msg.getProfit() )
  
	m.Agency = unpack_TourAgency( msg.getAgency() )
  
	m.EmployeeId = unpack_string( msg.getEmployeeid() )
  
	m.Store = unpack_Store( msg.getStore() )
 
	return m
}



function pack_GetProfitByStoreRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetProfitByStoreRep()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// TotalCost 
	m.setTotalcost( pack_Cost( proto, msg.TotalCost ) )
 	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// Date 
	m.setDate( pack_string( proto, msg.Date ) )
 	// StorePersent 
	m.setStorepersent( pack_int64( proto, msg.StorePersent ) )
 	// Profit 
	m.setProfit( pack_Cost( proto, msg.Profit ) )
 	// Agency 
	m.setAgency( pack_TourAgency( proto, msg.Agency ) )
 	// EmployeeId 
	m.setEmployeeid( pack_string( proto, msg.EmployeeId ) )
 
	return m
}


function unpack_GetProfitByStoreRep(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.TotalCost = unpack_Cost( msg.getTotalcost() )
  
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.Date = unpack_string( msg.getDate() )
  
	m.StorePersent = unpack_int64( msg.getStorepersent() )
  
	m.Profit = unpack_Cost( msg.getProfit() )
  
	m.Agency = unpack_TourAgency( msg.getAgency() )
  
	m.EmployeeId = unpack_string( msg.getEmployeeid() )
 
	return m
}



function pack_GetAgencyProfitRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetAgencyProfitRep()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// TotalCost 
	m.setTotalcost( pack_Cost( proto, msg.TotalCost ) )
 	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// Date 
	m.setDate( pack_string( proto, msg.Date ) )
 	// AgencyPersent 
	m.setAgencypersent( pack_int64( proto, msg.AgencyPersent ) )
 	// AgencyProfit 
	m.setAgencyprofit( pack_Cost( proto, msg.AgencyProfit ) )
 	// Store 
	m.setStore( pack_Store( proto, msg.Store ) )
 	// EmployeeId 
	m.setEmployeeid( pack_string( proto, msg.EmployeeId ) )
 
	return m
}


function unpack_GetAgencyProfitRep(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.TotalCost = unpack_Cost( msg.getTotalcost() )
  
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.Date = unpack_string( msg.getDate() )
  
	m.AgencyPersent = unpack_int64( msg.getAgencypersent() )
  
	m.AgencyProfit = unpack_Cost( msg.getAgencyprofit() )
  
	m.Store = unpack_Store( msg.getStore() )
  
	m.EmployeeId = unpack_string( msg.getEmployeeid() )
 
	return m
}



function pack_GetEmployeeProfitRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetEmployeeProfitRep()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// TotalCost 
	m.setTotalcost( pack_Cost( proto, msg.TotalCost ) )
 	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// Date 
	m.setDate( pack_string( proto, msg.Date ) )
 	// EmployeePersent 
	m.setEmployeepersent( pack_int64( proto, msg.EmployeePersent ) )
 	// EmployeeProfit 
	m.setEmployeeprofit( pack_Cost( proto, msg.EmployeeProfit ) )
 	// Store 
	m.setStore( pack_Store( proto, msg.Store ) )
 
	return m
}


function unpack_GetEmployeeProfitRep(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.TotalCost = unpack_Cost( msg.getTotalcost() )
  
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.Date = unpack_string( msg.getDate() )
  
	m.EmployeePersent = unpack_int64( msg.getEmployeepersent() )
  
	m.EmployeeProfit = unpack_Cost( msg.getEmployeeprofit() )
  
	m.Store = unpack_Store( msg.getStore() )
 
	return m
}



function pack_GetTotalProfitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTotalProfitReq()
	// StartDate 
	m.setStartdate( pack_string( proto, msg.StartDate ) )
 	// EndDate 
	m.setEnddate( pack_string( proto, msg.EndDate ) )
 
	return m
}


function unpack_GetTotalProfitReq(msg) {
	const m = {}
 
	m.StartDate = unpack_string( msg.getStartdate() )
  
	m.EndDate = unpack_string( msg.getEnddate() )
 
	return m
}



function pack_GetProfitByStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetProfitByStoreReq()
	// StartDate 
	m.setStartdate( pack_string( proto, msg.StartDate ) )
 	// EndDate 
	m.setEnddate( pack_string( proto, msg.EndDate ) )
 	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_GetProfitByStoreReq(msg) {
	const m = {}
 
	m.StartDate = unpack_string( msg.getStartdate() )
  
	m.EndDate = unpack_string( msg.getEnddate() )
  
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



function pack_GetAgencyProfitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetAgencyProfitReq()
	// StartDate 
	m.setStartdate( pack_string( proto, msg.StartDate ) )
 	// EndDate 
	m.setEnddate( pack_string( proto, msg.EndDate ) )
 	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_GetAgencyProfitReq(msg) {
	const m = {}
 
	m.StartDate = unpack_string( msg.getStartdate() )
  
	m.EndDate = unpack_string( msg.getEnddate() )
  
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_GetEmployeeProfitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetEmployeeProfitReq()
	// StartDate 
	m.setStartdate( pack_string( proto, msg.StartDate ) )
 	// EndDate 
	m.setEnddate( pack_string( proto, msg.EndDate ) )
 	// EmployeeId 
	m.setEmployeeid( pack_string( proto, msg.EmployeeId ) )
 
	return m
}


function unpack_GetEmployeeProfitReq(msg) {
	const m = {}
 
	m.StartDate = unpack_string( msg.getStartdate() )
  
	m.EndDate = unpack_string( msg.getEnddate() )
  
	m.EmployeeId = unpack_string( msg.getEmployeeid() )
 
	return m
}



function pack_GetVisitsByTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetVisitsByTourAgencyReq()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_GetVisitsByTourAgencyReq(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_GetCompletenessOfInfoReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCompletenessOfInfoReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 
	return m
}


function unpack_GetCompletenessOfInfoReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
 
	return m
}



function pack_GetCompletenessOfInfoRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCompletenessOfInfoRep()
	// Complete 
	m.setComplete( pack_int64( proto, msg.Complete ) )
 	// Total 
	m.setTotal( pack_int64( proto, msg.Total ) )
 
	return m
}


function unpack_GetCompletenessOfInfoRep(msg) {
	const m = {}
 
	m.Complete = unpack_int64( msg.getComplete() )
  
	m.Total = unpack_int64( msg.getTotal() )
 
	return m
}



function pack_UpdateInfoInVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateInfoInVisitReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 	// Info 
	m.setInfo( pack_VisitInfo( proto, msg.Info ) )
 
	return m
}


function unpack_UpdateInfoInVisitReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
  
	m.Info = unpack_VisitInfo( msg.getInfo() )
 
	return m
}



function pack_GetPurchasesByClientIdReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPurchasesByClientIdReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 
	return m
}


function unpack_GetPurchasesByClientIdReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
 
	return m
}



function pack_GetVisitByIdReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetVisitByIdReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 
	return m
}


function unpack_GetVisitByIdReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
 
	return m
}



function pack_SetPlaceAndTimeInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetPlaceAndTimeInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// PlannedTime 
	m.setPlannedtime( pack_string( proto, msg.PlannedTime ) )
 	// PlannedPlace 
	m.setPlannedplace( pack_string( proto, msg.PlannedPlace ) )
 
	return m
}


function unpack_SetPlaceAndTimeInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	m.PlannedTime = unpack_string( msg.getPlannedtime() )
  
	m.PlannedPlace = unpack_string( msg.getPlannedplace() )
 
	return m
}



function pack_SetEndPlaceAndTimeInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetEndPlaceAndTimeInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// PlannedTimeEnd 
	m.setPlannedtimeend( pack_string( proto, msg.PlannedTimeEnd ) )
 	// PlannedPlaceEnd 
	m.setPlannedplaceend( pack_string( proto, msg.PlannedPlaceEnd ) )
 
	return m
}


function unpack_SetEndPlaceAndTimeInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	m.PlannedTimeEnd = unpack_string( msg.getPlannedtimeend() )
  
	m.PlannedPlaceEnd = unpack_string( msg.getPlannedplaceend() )
 
	return m
}



function pack_UpdateTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateTourAgencyReq()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_UpdateTourAgencyReq(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_UpdateStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_UpdateStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_UpdateHotelReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateHotelReq()
	// HotelId 
	m.setHotelid( pack_string( proto, msg.HotelId ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_UpdateHotelReq(msg) {
	const m = {}
 
	m.HotelId = unpack_string( msg.getHotelid() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_UpdateTourPartnerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateTourPartnerReq()
	// TourPartnerId 
	m.setTourpartnerid( pack_string( proto, msg.TourPartnerId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_UpdateTourPartnerReq(msg) {
	const m = {}
 
	m.TourPartnerId = unpack_string( msg.getTourpartnerid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_UpdateAirlineReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateAirlineReq()
	// AirlineId 
	m.setAirlineid( pack_string( proto, msg.AirlineId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_UpdateAirlineReq(msg) {
	const m = {}
 
	m.AirlineId = unpack_string( msg.getAirlineid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_UpdateCityReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateCityReq()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_UpdateCityReq(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_UpdateCountryReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateCountryReq()
	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_UpdateCountryReq(msg) {
	const m = {}
 
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_DeleteHotelReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteHotelReq()
	// HotelId 
	m.setHotelid( pack_string( proto, msg.HotelId ) )
 
	return m
}


function unpack_DeleteHotelReq(msg) {
	const m = {}
 
	m.HotelId = unpack_string( msg.getHotelid() )
 
	return m
}



function pack_DeleteCityReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteCityReq()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_DeleteCityReq(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_DeleteCountryReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteCountryReq()
	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 
	return m
}


function unpack_DeleteCountryReq(msg) {
	const m = {}
 
	m.CountryId = unpack_string( msg.getCountryid() )
 
	return m
}



function pack_UpdateCategoryReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateCategoryReq()
	// CategoryId 
	m.setCategoryid( pack_string( proto, msg.CategoryId ) )
 	// Name 
	m.setName( pack_LS( proto, msg.Name ) )
 
	return m
}


function unpack_UpdateCategoryReq(msg) {
	const m = {}
 
	m.CategoryId = unpack_string( msg.getCategoryid() )
  
	m.Name = unpack_LS( msg.getName() )
 
	return m
}



function pack_UpdateGoodReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateGoodReq()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// CategoryId 
	m.setCategoryid( pack_string( proto, msg.CategoryId ) )
 	// Name 
	m.setName( pack_LS( proto, msg.Name ) )
 
	return m
}


function unpack_UpdateGoodReq(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.CategoryId = unpack_string( msg.getCategoryid() )
  
	m.Name = unpack_LS( msg.getName() )
 
	return m
}



function pack_DeleteCategoryReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteCategoryReq()
	// CategoryId 
	m.setCategoryid( pack_string( proto, msg.CategoryId ) )
 
	return m
}


function unpack_DeleteCategoryReq(msg) {
	const m = {}
 
	m.CategoryId = unpack_string( msg.getCategoryid() )
 
	return m
}



function pack_DeleteGoodReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteGoodReq()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 
	return m
}


function unpack_DeleteGoodReq(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
 
	return m
}



function pack_AddCategoryReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddCategoryReq()
	// Name 
	m.setName( pack_LS( proto, msg.Name ) )
 
	return m
}


function unpack_AddCategoryReq(msg) {
	const m = {}
 
	m.Name = unpack_LS( msg.getName() )
 
	return m
}



function pack_AddGoodReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddGoodReq()
	// Name 
	m.setName( pack_LS( proto, msg.Name ) )
 	// CategoryId 
	m.setCategoryid( pack_string( proto, msg.CategoryId ) )
 
	return m
}


function unpack_AddGoodReq(msg) {
	const m = {}
 
	m.Name = unpack_LS( msg.getName() )
  
	m.CategoryId = unpack_string( msg.getCategoryid() )
 
	return m
}



function pack_AddVisitObjectiveRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddVisitObjectiveRep()
	// Visit 
	m.setVisit( pack_Visit( proto, msg.Visit ) )
 	// VisitObjective 
	m.setVisitobjective( pack_VisitObjective( proto, msg.VisitObjective ) )
 
	return m
}


function unpack_AddVisitObjectiveRep(msg) {
	const m = {}
 
	m.Visit = unpack_Visit( msg.getVisit() )
  
	m.VisitObjective = unpack_VisitObjective( msg.getVisitobjective() )
 
	return m
}



function pack_SetCompletedWithGoodsStatusInVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetCompletedWithGoodsStatusInVisitReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 
	return m
}


function unpack_SetCompletedWithGoodsStatusInVisitReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
 
	return m
}



function pack_SetCompletedWithoutGoodsStatusInVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetCompletedWithoutGoodsStatusInVisitReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 
	return m
}


function unpack_SetCompletedWithoutGoodsStatusInVisitReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
 
	return m
}



function pack_SetInProcessStatusInVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetInProcessStatusInVisitReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 
	return m
}


function unpack_SetInProcessStatusInVisitReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
 
	return m
}



function pack_SetPlanStatusInVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetPlanStatusInVisitReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 
	return m
}


function unpack_SetPlanStatusInVisitReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
 
	return m
}



function pack_AddVisitObjectiveReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddVisitObjectiveReq()
	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 	// ObjectiveType 
	m.setObjectivetype( pack_string( proto, msg.ObjectiveType ) )
 	// Comment 
	m.setComment( pack_LS( proto, msg.Comment ) )
 
	return m
}


function unpack_AddVisitObjectiveReq(msg) {
	const m = {}
 
	m.VisitId = unpack_string( msg.getVisitid() )
  
	m.ObjectiveType = unpack_string( msg.getObjectivetype() )
  
	m.Comment = unpack_LS( msg.getComment() )
 
	return m
}



function pack_DeleteVisitObjectiveReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteVisitObjectiveReq()
	// VisitObjectiveId 
	m.setVisitobjectiveid( pack_string( proto, msg.VisitObjectiveId ) )
 
	return m
}


function unpack_DeleteVisitObjectiveReq(msg) {
	const m = {}
 
	m.VisitObjectiveId = unpack_string( msg.getVisitobjectiveid() )
 
	return m
}



function pack_SetCompletedStateInObjectiveReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetCompletedStateInObjectiveReq()
	// VisitObjectiveId 
	m.setVisitobjectiveid( pack_string( proto, msg.VisitObjectiveId ) )
 	// Completed 
	m.setCompleted( pack_bool( proto, msg.Completed ) )
 	// Comment 
	m.setComment( pack_LS( proto, msg.Comment ) )
 
	return m
}


function unpack_SetCompletedStateInObjectiveReq(msg) {
	const m = {}
 
	m.VisitObjectiveId = unpack_string( msg.getVisitobjectiveid() )
  
	m.Completed = unpack_bool( msg.getCompleted() )
  
	m.Comment = unpack_LS( msg.getComment() )
 
	return m
}



function pack_SetCancelledStateInObjectiveReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetCancelledStateInObjectiveReq()
	// VisitObjectiveId 
	m.setVisitobjectiveid( pack_string( proto, msg.VisitObjectiveId ) )
 	// Cancelled 
	m.setCancelled( pack_bool( proto, msg.Cancelled ) )
 	// Comment 
	m.setComment( pack_LS( proto, msg.Comment ) )
 
	return m
}


function unpack_SetCancelledStateInObjectiveReq(msg) {
	const m = {}
 
	m.VisitObjectiveId = unpack_string( msg.getVisitobjectiveid() )
  
	m.Cancelled = unpack_bool( msg.getCancelled() )
  
	m.Comment = unpack_LS( msg.getComment() )
 
	return m
}



function pack_VisitObjective(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.VisitObjective()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// Objective 
	m.setObjective( pack_Objective( proto, msg.Objective ) )
 	// Completed 
	m.setCompleted( pack_bool( proto, msg.Completed ) )
 	// Cancelled 
	m.setCancelled( pack_bool( proto, msg.Cancelled ) )
 	// Comment 
	m.setComment( pack_LS( proto, msg.Comment ) )
 
	return m
}


function unpack_VisitObjective(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.Objective = unpack_Objective( msg.getObjective() )
  
	m.Completed = unpack_bool( msg.getCompleted() )
  
	m.Cancelled = unpack_bool( msg.getCancelled() )
  
	m.Comment = unpack_LS( msg.getComment() )
 
	return m
}



function pack_Objective(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Objective()
	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// Comment 
	m.setComment( pack_LS( proto, msg.Comment ) )
 
	return m
}


function unpack_Objective(msg) {
	const m = {}
 
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.Comment = unpack_LS( msg.getComment() )
 
	return m
}



function pack_GetObjectivesReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetObjectivesReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 
	return m
}


function unpack_GetObjectivesReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
 
	return m
}



function pack_AddTripRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddTripRep()
	// Visit 
	m.setVisit( pack_Visit( proto, msg.Visit ) )
 	// Trip 
	m.setTrip( pack_Trip( proto, msg.Trip ) )
 
	return m
}


function unpack_AddTripRep(msg) {
	const m = {}
 
	m.Visit = unpack_Visit( msg.getVisit() )
  
	m.Trip = unpack_Trip( msg.getTrip() )
 
	return m
}



function pack_TripInStore(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.TripInStore()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 	// Date 
	m.setDate( pack_string( proto, msg.Date ) )
 
	return m
}


function unpack_TripInStore(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
  
	m.Date = unpack_string( msg.getDate() )
 
	return m
}



function pack_AddTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddTripReq()
	// PlannedTime 
	m.setPlannedtime( pack_string( proto, msg.PlannedTime ) )
 	// PlannedPlace 
	m.setPlannedplace( pack_string( proto, msg.PlannedPlace ) )
 	// VisitObjectiveIds 
	for (let val in msg.VisitObjectiveIds) {
		m.addVisitobjectiveids( pack_string( proto, msg.VisitObjectiveIds[val] ) )
	}
 	// Stores 
	for (let val in msg.Stores) {
		m.addStores( pack_TripInStore( proto, msg.Stores[val] ) )
	}
 
	return m
}


function unpack_AddTripReq(msg) {
	const m = {}
 
	m.PlannedTime = unpack_string( msg.getPlannedtime() )
  
	m.PlannedPlace = unpack_string( msg.getPlannedplace() )
  
	{
		m.VisitObjectiveIds = []
		const arr = msg.getVisitobjectiveidsList()
		for (let i = 0; i < arr.length; i++) {
			m.VisitObjectiveIds.push(unpack_string(arr[i]))
		}
	}
  
	{
		m.Stores = []
		const arr = msg.getStoresList()
		for (let i = 0; i < arr.length; i++) {
			m.Stores.push(unpack_TripInStore(arr[i]))
		}
	}
 
	return m
}



function pack_SetVisitObjectivesInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetVisitObjectivesInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// VisitObjectiveIds 
	for (let val in msg.VisitObjectiveIds) {
		m.addVisitobjectiveids( pack_string( proto, msg.VisitObjectiveIds[val] ) )
	}
 
	return m
}


function unpack_SetVisitObjectivesInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	{
		m.VisitObjectiveIds = []
		const arr = msg.getVisitobjectiveidsList()
		for (let i = 0; i < arr.length; i++) {
			m.VisitObjectiveIds.push(unpack_string(arr[i]))
		}
	}
 
	return m
}



function pack_Trip(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Trip()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// VisitObjectiveIds 
	for (let val in msg.VisitObjectiveIds) {
		m.addVisitobjectiveids( pack_string( proto, msg.VisitObjectiveIds[val] ) )
	}
 	// PlannedTime 
	m.setPlannedtime( pack_string( proto, msg.PlannedTime ) )
 	// PlannedPlace 
	m.setPlannedplace( pack_string( proto, msg.PlannedPlace ) )
 	// TripStatus 
	m.setTripstatus( pack_string( proto, msg.TripStatus ) )
 	// StatusChangeTime 
	m.setStatuschangetime( pack_string( proto, msg.StatusChangeTime ) )
 	// Stores 
	for (let val in msg.Stores) {
		m.addStores( pack_TripInStore( proto, msg.Stores[val] ) )
	}
 
	return m
}


function unpack_Trip(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	{
		m.VisitObjectiveIds = []
		const arr = msg.getVisitobjectiveidsList()
		for (let i = 0; i < arr.length; i++) {
			m.VisitObjectiveIds.push(unpack_string(arr[i]))
		}
	}
  
	m.PlannedTime = unpack_string( msg.getPlannedtime() )
  
	m.PlannedPlace = unpack_string( msg.getPlannedplace() )
  
	m.TripStatus = unpack_string( msg.getTripstatus() )
  
	m.StatusChangeTime = unpack_string( msg.getStatuschangetime() )
  
	{
		m.Stores = []
		const arr = msg.getStoresList()
		for (let i = 0; i < arr.length; i++) {
			m.Stores.push(unpack_TripInStore(arr[i]))
		}
	}
 
	return m
}



function pack_SetCompletedWithGoodsStatusInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetCompletedWithGoodsStatusInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 
	return m
}


function unpack_SetCompletedWithGoodsStatusInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
 
	return m
}



function pack_SetCompletedWithoutGoodsStatusInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetCompletedWithoutGoodsStatusInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 
	return m
}


function unpack_SetCompletedWithoutGoodsStatusInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
 
	return m
}



function pack_SetInProcessStatusInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetInProcessStatusInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 
	return m
}


function unpack_SetInProcessStatusInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
 
	return m
}



function pack_SetPlanStatusInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetPlanStatusInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 
	return m
}


function unpack_SetPlanStatusInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
 
	return m
}



function pack_AddTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddTourAgencyReq()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// TourAgencyName 
	m.setTouragencyname( pack_string( proto, msg.TourAgencyName ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_AddTourAgencyReq(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
  
	m.TourAgencyName = unpack_string( msg.getTouragencyname() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_DeleteTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteTourAgencyReq()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_DeleteTourAgencyReq(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_TourAgency(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.TourAgency()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 	// Percents 
	for (let val in msg.Percents) {
		m.addPercents( pack_Percent( proto, msg.Percents[val] ) )
	}
 
	return m
}


function unpack_TourAgency(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
  
	{
		m.Percents = []
		const arr = msg.getPercentsList()
		for (let i = 0; i < arr.length; i++) {
			m.Percents.push(unpack_Percent(arr[i]))
		}
	}
 
	return m
}



function pack_GetTourAgenciesReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTourAgenciesReq()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_GetTourAgenciesReq(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_GetMyTourAgenciesReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetMyTourAgenciesReq()

	return m
}


function unpack_GetMyTourAgenciesReq(msg) {
	const m = {}

	return m
}



function pack_GetPercentsByTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPercentsByTourAgencyReq()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_GetPercentsByTourAgencyReq(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_SetPercentInTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetPercentInTourAgencyReq()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 	// Percent 
	m.setPercent( pack_Percent( proto, msg.Percent ) )
 
	return m
}


function unpack_SetPercentInTourAgencyReq(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
  
	m.Percent = unpack_Percent( msg.getPercent() )
 
	return m
}



function pack_GetGoodsReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetGoodsReq()

	return m
}


function unpack_GetGoodsReq(msg) {
	const m = {}

	return m
}



function pack_GetCategoriesReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCategoriesReq()

	return m
}


function unpack_GetCategoriesReq(msg) {
	const m = {}

	return m
}



function pack_GetPurchasesReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPurchasesReq()

	return m
}


function unpack_GetPurchasesReq(msg) {
	const m = {}

	return m
}



function pack_Store(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Store()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 	// GoodIds 
	for (let val in msg.GoodIds) {
		m.addGoodids( pack_string( proto, msg.GoodIds[val] ) )
	}
 	// Percents 
	for (let val in msg.Percents) {
		m.addPercents( pack_Percent( proto, msg.Percents[val] ) )
	}
 
	return m
}


function unpack_Store(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
  
	{
		m.GoodIds = []
		const arr = msg.getGoodidsList()
		for (let i = 0; i < arr.length; i++) {
			m.GoodIds.push(unpack_string(arr[i]))
		}
	}
  
	{
		m.Percents = []
		const arr = msg.getPercentsList()
		for (let i = 0; i < arr.length; i++) {
			m.Percents.push(unpack_Percent(arr[i]))
		}
	}
 
	return m
}



function pack_AddGoodInStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddGoodInStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 
	return m
}


function unpack_AddGoodInStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
  
	m.GoodId = unpack_string( msg.getGoodid() )
 
	return m
}



function pack_SetPercentInStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetPercentInStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 	// Percent 
	m.setPercent( pack_Percent( proto, msg.Percent ) )
 
	return m
}


function unpack_SetPercentInStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
  
	m.Percent = unpack_Percent( msg.getPercent() )
 
	return m
}



function pack_DeleteGoodFromStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteGoodFromStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 
	return m
}


function unpack_DeleteGoodFromStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
  
	m.GoodId = unpack_string( msg.getGoodid() )
 
	return m
}



function pack_LS(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.LS()
	// EN 
	m.setEn( pack_string( proto, msg.EN ) )
 	// RU 
	m.setRu( pack_string( proto, msg.RU ) )
 	// TR 
	m.setTr( pack_string( proto, msg.TR ) )
 
	return m
}


function unpack_LS(msg) {
	const m = {}
 
	m.EN = unpack_string( msg.getEn() )
  
	m.RU = unpack_string( msg.getRu() )
  
	m.TR = unpack_string( msg.getTr() )
 
	return m
}



function pack_Category(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Category()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// Name 
	m.setName( pack_LS( proto, msg.Name ) )
 
	return m
}


function unpack_Category(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.Name = unpack_LS( msg.getName() )
 
	return m
}



function pack_Good(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Good()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// CategoryId 
	m.setCategoryid( pack_string( proto, msg.CategoryId ) )
 	// Name 
	m.setName( pack_LS( proto, msg.Name ) )
 
	return m
}


function unpack_Good(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.CategoryId = unpack_string( msg.getCategoryid() )
  
	m.Name = unpack_LS( msg.getName() )
 
	return m
}



function pack_Percent(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Percent()
	// CategoryId 
	m.setCategoryid( pack_string( proto, msg.CategoryId ) )
 	// Percent 
	m.setPercent( pack_float( proto, msg.Percent ) )
 
	return m
}


function unpack_Percent(msg) {
	const m = {}
 
	m.CategoryId = unpack_string( msg.getCategoryid() )
  
	m.Percent = unpack_float( msg.getPercent() )
 
	return m
}



function pack_GetGoodsByStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetGoodsByStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_GetGoodsByStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



function pack_GetPercentsByStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPercentsByStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_GetPercentsByStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



function pack_GetPurchasesByCardInStoreRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPurchasesByCardInStoreRep()
	// Client 
	m.setClient( pack_Client( proto, msg.Client ) )
 	// Purchases 
	for (let val in msg.Purchases) {
		m.addPurchases( pack_Purchase( proto, msg.Purchases[val] ) )
	}
 
	return m
}


function unpack_GetPurchasesByCardInStoreRep(msg) {
	const m = {}
 
	m.Client = unpack_Client( msg.getClient() )
  
	{
		m.Purchases = []
		const arr = msg.getPurchasesList()
		for (let i = 0; i < arr.length; i++) {
			m.Purchases.push(unpack_Purchase(arr[i]))
		}
	}
 
	return m
}



function pack_GetPurchasesByCardInStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetPurchasesByCardInStoreReq()
	// CardNumber 
	m.setCardnumber( pack_int64( proto, msg.CardNumber ) )
 	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_GetPurchasesByCardInStoreReq(msg) {
	const m = {}
 
	m.CardNumber = unpack_int64( msg.getCardnumber() )
  
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



function pack_Purchase(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Purchase()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// GoodId 
	m.setGoodid( pack_string( proto, msg.GoodId ) )
 	// Cash 
	m.setCash( pack_Cost( proto, msg.Cash ) )
 	// Card 
	m.setCard( pack_Cost( proto, msg.Card ) )
 	// Delivery 
	m.setDelivery( pack_Cost( proto, msg.Delivery ) )
 	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 	// VisitId 
	m.setVisitid( pack_string( proto, msg.VisitId ) )
 	// EmployeeId 
	m.setEmployeeid( pack_string( proto, msg.EmployeeId ) )
 	// RefererId 
	m.setRefererid( pack_string( proto, msg.RefererId ) )
 	// Date 
	m.setDate( pack_string( proto, msg.Date ) )
 	// Comment 
	m.setComment( pack_LS( proto, msg.Comment ) )
 
	return m
}


function unpack_Purchase(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.GoodId = unpack_string( msg.getGoodid() )
  
	m.Cash = unpack_Cost( msg.getCash() )
  
	m.Card = unpack_Cost( msg.getCard() )
  
	m.Delivery = unpack_Cost( msg.getDelivery() )
  
	m.StoreId = unpack_string( msg.getStoreid() )
  
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
  
	m.VisitId = unpack_string( msg.getVisitid() )
  
	m.EmployeeId = unpack_string( msg.getEmployeeid() )
  
	m.RefererId = unpack_string( msg.getRefererid() )
  
	m.Date = unpack_string( msg.getDate() )
  
	m.Comment = unpack_LS( msg.getComment() )
 
	return m
}



function pack_AddPurchaseReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddPurchaseReq()
	// Purchase 
	m.setPurchase( pack_Purchase( proto, msg.Purchase ) )
 
	return m
}


function unpack_AddPurchaseReq(msg) {
	const m = {}
 
	m.Purchase = unpack_Purchase( msg.getPurchase() )
 
	return m
}



function pack_AddStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddStoreReq()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// StoreName 
	m.setStorename( pack_string( proto, msg.StoreName ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_AddStoreReq(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
  
	m.StoreName = unpack_string( msg.getStorename() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_DeleteStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteStoreReq()
	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_DeleteStoreReq(msg) {
	const m = {}
 
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



function pack_GetStoresReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetStoresReq()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_GetStoresReq(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_GetStoreReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetStoreReq()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 
	return m
}


function unpack_GetStoreReq(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
 
	return m
}



function pack_GetMyVisitsReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetMyVisitsReq()
	// TransferManagerId 
	m.setTransfermanagerid( pack_string( proto, msg.TransferManagerId ) )
 
	return m
}


function unpack_GetMyVisitsReq(msg) {
	const m = {}
 
	m.TransferManagerId = unpack_string( msg.getTransfermanagerid() )
 
	return m
}



function pack_ReassignTransferManagerInTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.ReassignTransferManagerInTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// NewTransferManagerId 
	m.setNewtransfermanagerid( pack_string( proto, msg.NewTransferManagerId ) )
 
	return m
}


function unpack_ReassignTransferManagerInTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	m.NewTransferManagerId = unpack_string( msg.getNewtransfermanagerid() )
 
	return m
}



function pack_RescheduleTripReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.RescheduleTripReq()
	// TripId 
	m.setTripid( pack_string( proto, msg.TripId ) )
 	// NewTime 
	m.setNewtime( pack_string( proto, msg.NewTime ) )
 
	return m
}


function unpack_RescheduleTripReq(msg) {
	const m = {}
 
	m.TripId = unpack_string( msg.getTripid() )
  
	m.NewTime = unpack_string( msg.getNewtime() )
 
	return m
}



function pack_CheckUserRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.CheckUserRep()
	// User 
	m.setUser( pack_User( proto, msg.User ) )
 	// Store 
	m.setStore( pack_Store( proto, msg.Store ) )
 	// City 
	m.setCity( pack_City( proto, msg.City ) )
 	// TourAgency 
	m.setTouragency( pack_TourAgency( proto, msg.TourAgency ) )
 
	return m
}


function unpack_CheckUserRep(msg) {
	const m = {}
 
	m.User = (msg.hasUser() ? unpack_User( msg.getUser() ) : undefined)
  
	m.Store = (msg.hasStore() ? unpack_Store( msg.getStore() ) : undefined)
  
	m.City = (msg.hasCity() ? unpack_City( msg.getCity() ) : undefined)
  
	m.TourAgency = (msg.hasTouragency() ? unpack_TourAgency( msg.getTouragency() ) : undefined)
 
	return m
}



function pack_SearchClientReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SearchClientReq()
	// SearchData 
	m.setSearchdata( pack_string( proto, msg.SearchData ) )
 
	return m
}


function unpack_SearchClientReq(msg) {
	const m = {}
 
	m.SearchData = unpack_string( msg.getSearchdata() )
 
	return m
}



function pack_GetTransferManagersReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTransferManagersReq()

	return m
}


function unpack_GetTransferManagersReq(msg) {
	const m = {}

	return m
}



function pack_GetHostingPartyManagersReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetHostingPartyManagersReq()

	return m
}


function unpack_GetHostingPartyManagersReq(msg) {
	const m = {}

	return m
}



function pack_GetDispatchingPartyManagersReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetDispatchingPartyManagersReq()

	return m
}


function unpack_GetDispatchingPartyManagersReq(msg) {
	const m = {}

	return m
}



function pack_GetClientByIdReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetClientByIdReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 
	return m
}


function unpack_GetClientByIdReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
 
	return m
}



function pack_GetVisitsByClientReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetVisitsByClientReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 
	return m
}


function unpack_GetVisitsByClientReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
 
	return m
}



function pack_GetTourAgencyReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTourAgencyReq()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 
	return m
}


function unpack_GetTourAgencyReq(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
 
	return m
}



function pack_GetCardByClientReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCardByClientReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 
	return m
}


function unpack_GetCardByClientReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
 
	return m
}



function pack_GetClientByCardReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetClientByCardReq()
	// CardNumber 
	m.setCardnumber( pack_int64( proto, msg.CardNumber ) )
 
	return m
}


function unpack_GetClientByCardReq(msg) {
	const m = {}
 
	m.CardNumber = unpack_int64( msg.getCardnumber() )
 
	return m
}



function pack_AddCardForClientReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddCardForClientReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// CardNumber 
	m.setCardnumber( pack_int64( proto, msg.CardNumber ) )
 
	return m
}


function unpack_AddCardForClientReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.CardNumber = unpack_int64( msg.getCardnumber() )
 
	return m
}



function pack_GenerateCardNumbersReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GenerateCardNumbersReq()
	// Quantity 
	m.setQuantity( pack_int64( proto, msg.Quantity ) )
 
	return m
}


function unpack_GenerateCardNumbersReq(msg) {
	const m = {}
 
	m.Quantity = unpack_int64( msg.getQuantity() )
 
	return m
}



function pack_Card(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Card()
	// CardNumber 
	m.setCardnumber( pack_int64( proto, msg.CardNumber ) )
 
	return m
}


function unpack_Card(msg) {
	const m = {}
 
	m.CardNumber = unpack_int64( msg.getCardnumber() )
 
	return m
}



function pack_GetTripsReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTripsReq()
	// CLientId 
	m.setClientid( pack_string( proto, msg.CLientId ) )
 
	return m
}


function unpack_GetTripsReq(msg) {
	const m = {}
 
	m.CLientId = unpack_string( msg.getClientid() )
 
	return m
}



function pack_Dummy(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Dummy()

	return m
}


function unpack_Dummy(msg) {
	const m = {}

	return m
}



function pack_CheckUserReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.CheckUserReq()

	return m
}


function unpack_CheckUserReq(msg) {
	const m = {}

	return m
}



function pack_GetClientsListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetClientsListReq()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_GetClientsListReq(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_GetHotelsListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetHotelsListReq()

	return m
}


function unpack_GetHotelsListReq(msg) {
	const m = {}

	return m
}



function pack_GetTourPartnersListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetTourPartnersListReq()

	return m
}


function unpack_GetTourPartnersListReq(msg) {
	const m = {}

	return m
}



function pack_GetAirlinesListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetAirlinesListReq()

	return m
}


function unpack_GetAirlinesListReq(msg) {
	const m = {}

	return m
}



function pack_GetCitiesListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCitiesListReq()

	return m
}


function unpack_GetCitiesListReq(msg) {
	const m = {}

	return m
}



function pack_GetCountriesListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCountriesListReq()

	return m
}


function unpack_GetCountriesListReq(msg) {
	const m = {}

	return m
}



function pack_GetHotelsByNameReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetHotelsByNameReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_GetHotelsByNameReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_GetCitiesByNameReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCitiesByNameReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_GetCitiesByNameReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_GetCountriesByNameReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetCountriesByNameReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_GetCountriesByNameReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_LogOutReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.LogOutReq()

	return m
}


function unpack_LogOutReq(msg) {
	const m = {}

	return m
}



function pack_GetUserByIdReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetUserByIdReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 
	return m
}


function unpack_GetUserByIdReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
 
	return m
}



function pack_AuthenticateReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AuthenticateReq()
	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// Password 
	m.setPassword( pack_string( proto, msg.Password ) )
 
	return m
}


function unpack_AuthenticateReq(msg) {
	const m = {}
 
	m.Email = unpack_string( msg.getEmail() )
  
	m.Password = unpack_string( msg.getPassword() )
 
	return m
}



function pack_AddRoleReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddRoleReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 	// UserRole 
	m.setUserrole( pack_Role( proto, msg.UserRole ) )
 
	return m
}


function unpack_AddRoleReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
  
	m.UserRole = unpack_Role( msg.getUserrole() )
 
	return m
}



function pack_DeleteRoleReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.DeleteRoleReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 	// UserRole 
	m.setUserrole( pack_Role( proto, msg.UserRole ) )
 
	return m
}


function unpack_DeleteRoleReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
  
	m.UserRole = unpack_Role( msg.getUserrole() )
 
	return m
}



function pack_GetVisitsReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetVisitsReq()
	// Time 
	m.setTime( pack_string( proto, msg.Time ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_GetVisitsReq(msg) {
	const m = {}
 
	m.Time = unpack_string( msg.getTime() )
  
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_GetMyStoresReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetMyStoresReq()

	return m
}


function unpack_GetMyStoresReq(msg) {
	const m = {}

	return m
}



function pack_IdentityData(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.IdentityData()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 
	return m
}


function unpack_IdentityData(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
 
	return m
}



function pack_User(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.User()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// IdentityData 
	m.setIdentitydata( pack_IdentityData( proto, msg.IdentityData ) )
 	// RegistrationDate 
	m.setRegistrationdate( pack_string( proto, msg.RegistrationDate ) )
 	// Roles 
	for (let val in msg.Roles) {
		m.addRoles( pack_Role( proto, msg.Roles[val] ) )
	}
 	// SessionToken 
	m.setSessiontoken( pack_string( proto, msg.SessionToken ) )
 	// Percent 
	m.setPercent( pack_int64( proto, msg.Percent ) )
 
	return m
}


function unpack_User(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.IdentityData = unpack_IdentityData( msg.getIdentitydata() )
  
	m.RegistrationDate = unpack_string( msg.getRegistrationdate() )
  
	{
		m.Roles = []
		const arr = msg.getRolesList()
		for (let i = 0; i < arr.length; i++) {
			m.Roles.push(unpack_Role(arr[i]))
		}
	}
  
	m.SessionToken = unpack_string( msg.getSessiontoken() )
  
	m.Percent = unpack_int64( msg.getPercent() )
 
	return m
}



function pack_Cost(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Cost()
	// Amount 
	m.setAmount( pack_string( proto, msg.Amount ) )
 	// Currency 
	m.setCurrency( pack_string( proto, msg.Currency ) )
 
	return m
}


function unpack_Cost(msg) {
	const m = {}
 
	m.Amount = unpack_string( msg.getAmount() )
  
	m.Currency = unpack_string( msg.getCurrency() )
 
	return m
}



function pack_Referer(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Referer()
	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 	// EmployeeId 
	m.setEmployeeid( pack_string( proto, msg.EmployeeId ) )
 
	return m
}


function unpack_Referer(msg) {
	const m = {}
 
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
  
	m.EmployeeId = unpack_string( msg.getEmployeeid() )
 
	return m
}



function pack_Client(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Client()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Age 
	m.setAge( pack_uint64( proto, msg.Age ) )
 	// Gender 
	m.setGender( pack_string( proto, msg.Gender ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 	// RegistrationDate 
	m.setRegistrationdate( pack_string( proto, msg.RegistrationDate ) )
 	// Referer 
	m.setReferer( pack_Referer( proto, msg.Referer ) )
 
	return m
}


function unpack_Client(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Age = unpack_uint64( msg.getAge() )
  
	m.Gender = unpack_string( msg.getGender() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
  
	m.RegistrationDate = unpack_string( msg.getRegistrationdate() )
  
	m.Referer = unpack_Referer( msg.getReferer() )
 
	return m
}



function pack_AddHotelReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddHotelReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_AddHotelReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_AddTourPartnerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddTourPartnerReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_AddTourPartnerReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_AddAirlineReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddAirlineReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_AddAirlineReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_TourPartner(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.TourPartner()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_TourPartner(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_Airline(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Airline()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_Airline(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_Hotel(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Hotel()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_Hotel(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_Role(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Role()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// Context 
	m.setContext( pack_string( proto, msg.Context ) )
 
	return m
}


function unpack_Role(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
  
	m.Context = unpack_string( msg.getContext() )
 
	return m
}



function pack_AddCityReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddCityReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 
	return m
}


function unpack_AddCityReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
 
	return m
}



function pack_City(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.City()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_City(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_AddCountryReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddCountryReq()
	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_AddCountryReq(msg) {
	const m = {}
 
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_Country(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Country()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// Name 
	m.setName( pack_string( proto, msg.Name ) )
 
	return m
}


function unpack_Country(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.Name = unpack_string( msg.getName() )
 
	return m
}



function pack_GetUsersListReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.GetUsersListReq()
	// UsersRole 
	m.setUsersrole( pack_Role( proto, msg.UsersRole ) )
 
	return m
}


function unpack_GetUsersListReq(msg) {
	const m = {}
 
	m.UsersRole = unpack_Role( msg.getUsersrole() )
 
	return m
}



function pack_AddNewDispatchingPartyManagerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewDispatchingPartyManagerReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_AddNewDispatchingPartyManagerReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_AddNewTourAgencyManagerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewTourAgencyManagerReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_AddNewTourAgencyManagerReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_UpdateFullNameReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateFullNameReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 	// NewFullName 
	m.setNewfullname( pack_string( proto, msg.NewFullName ) )
 
	return m
}


function unpack_UpdateFullNameReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
  
	m.NewFullName = unpack_string( msg.getNewfullname() )
 
	return m
}



function pack_SetEmployeePercentReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.SetEmployeePercentReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 	// Percent 
	m.setPercent( pack_int64( proto, msg.Percent ) )
 
	return m
}


function unpack_SetEmployeePercentReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
  
	m.Percent = unpack_int64( msg.getPercent() )
 
	return m
}



function pack_UpdateEmailReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateEmailReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 	// NewEmail 
	m.setNewemail( pack_string( proto, msg.NewEmail ) )
 
	return m
}


function unpack_UpdateEmailReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
  
	m.NewEmail = unpack_string( msg.getNewemail() )
 
	return m
}



function pack_UpdatePasswordReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdatePasswordReq()
	// UserId 
	m.setUserid( pack_string( proto, msg.UserId ) )
 	// NewPassword 
	m.setNewpassword( pack_string( proto, msg.NewPassword ) )
 
	return m
}


function unpack_UpdatePasswordReq(msg) {
	const m = {}
 
	m.UserId = unpack_string( msg.getUserid() )
  
	m.NewPassword = unpack_string( msg.getNewpassword() )
 
	return m
}



function pack_AddNewTourAgencyEmployeeReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewTourAgencyEmployeeReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 	// Percent 
	m.setPercent( pack_int64( proto, msg.Percent ) )
 
	return m
}


function unpack_AddNewTourAgencyEmployeeReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
  
	m.Percent = unpack_int64( msg.getPercent() )
 
	return m
}



function pack_UpdateClientFullNameReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateClientFullNameReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// NewFullName 
	m.setNewfullname( pack_string( proto, msg.NewFullName ) )
 
	return m
}


function unpack_UpdateClientFullNameReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.NewFullName = unpack_string( msg.getNewfullname() )
 
	return m
}



function pack_UpdateClientAgeReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateClientAgeReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// NewAge 
	m.setNewage( pack_int64( proto, msg.NewAge ) )
 
	return m
}


function unpack_UpdateClientAgeReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.NewAge = unpack_int64( msg.getNewage() )
 
	return m
}



function pack_UpdateClientGenderReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateClientGenderReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// NewGender 
	m.setNewgender( pack_string( proto, msg.NewGender ) )
 
	return m
}


function unpack_UpdateClientGenderReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.NewGender = unpack_string( msg.getNewgender() )
 
	return m
}



function pack_UpdateClientContactInfoReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateClientContactInfoReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 
	return m
}


function unpack_UpdateClientContactInfoReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
 
	return m
}



function pack_UpdateClientPhoneReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.UpdateClientPhoneReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// NewPhone 
	m.setNewphone( pack_string( proto, msg.NewPhone ) )
 
	return m
}


function unpack_UpdateClientPhoneReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.NewPhone = unpack_string( msg.getNewphone() )
 
	return m
}



function pack_AddClientAndVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddClientAndVisitReq()
	// Client 
	m.setClient( pack_AddClientReq( proto, msg.Client ) )
 	// Visit 
	m.setVisit( pack_NewVisit( proto, msg.Visit ) )
 
	return m
}


function unpack_AddClientAndVisitReq(msg) {
	const m = {}
 
	m.Client = unpack_AddClientReq( msg.getClient() )
  
	m.Visit = unpack_NewVisit( msg.getVisit() )
 
	return m
}



function pack_AddClientAndVisitRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddClientAndVisitRep()
	// Client 
	m.setClient( pack_Client( proto, msg.Client ) )
 	// Visit 
	m.setVisit( pack_Visit( proto, msg.Visit ) )
 
	return m
}


function unpack_AddClientAndVisitRep(msg) {
	const m = {}
 
	m.Client = unpack_Client( msg.getClient() )
  
	m.Visit = unpack_Visit( msg.getVisit() )
 
	return m
}



function pack_NewVisit(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.NewVisit()
	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// CheckInTime 
	m.setCheckintime( pack_string( proto, msg.CheckInTime ) )
 	// CheckOutTime 
	m.setCheckouttime( pack_string( proto, msg.CheckOutTime ) )
 	// HotelId 
	m.setHotelid( pack_string( proto, msg.HotelId ) )
 	// Objectives 
	for (let val in msg.Objectives) {
		m.addObjectives( pack_Objective( proto, msg.Objectives[val] ) )
	}
 	// Info 
	m.setInfo( pack_VisitInfo( proto, msg.Info ) )
 
	return m
}


function unpack_NewVisit(msg) {
	const m = {}
 
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.CheckInTime = unpack_string( msg.getCheckintime() )
  
	m.CheckOutTime = unpack_string( msg.getCheckouttime() )
  
	m.HotelId = unpack_string( msg.getHotelid() )
  
	{
		m.Objectives = []
		const arr = msg.getObjectivesList()
		for (let i = 0; i < arr.length; i++) {
			m.Objectives.push(unpack_Objective(arr[i]))
		}
	}
  
	m.Info = unpack_VisitInfo( msg.getInfo() )
 
	return m
}



function pack_AddClientReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddClientReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Age 
	m.setAge( pack_uint64( proto, msg.Age ) )
 	// Gender 
	m.setGender( pack_string( proto, msg.Gender ) )
 	// ContactInfo 
	for (let val in msg.ContactInfo) {
		m.addContactinfo( pack_ContactInfo( proto, msg.ContactInfo[val] ) )
	}
 	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 
	return m
}


function unpack_AddClientReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Age = unpack_uint64( msg.getAge() )
  
	m.Gender = unpack_string( msg.getGender() )
  
	{
		m.ContactInfo = []
		const arr = msg.getContactinfoList()
		for (let i = 0; i < arr.length; i++) {
			m.ContactInfo.push(unpack_ContactInfo(arr[i]))
		}
	}
  
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
 
	return m
}



function pack_VisitInfo(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.VisitInfo()
	// TourCost 
	m.setTourcost( pack_Cost( proto, msg.TourCost ) )
 	// AmountOfAdults 
	m.setAmountofadults( pack_int64( proto, msg.AmountOfAdults ) )
 	// AmountOfChildren 
	m.setAmountofchildren( pack_int64( proto, msg.AmountOfChildren ) )
 	// AmountOfInfants 
	m.setAmountofinfants( pack_int64( proto, msg.AmountOfInfants ) )
 	// TourPartnerIds 
	for (let val in msg.TourPartnerIds) {
		m.addTourpartnerids( pack_string( proto, msg.TourPartnerIds[val] ) )
	}
 	// LastTimeBeenHere 
	m.setLasttimebeenhere( pack_string( proto, msg.LastTimeBeenHere ) )
 	// LastVisitedCountries 
	m.setLastvisitedcountries( pack_string( proto, msg.LastVisitedCountries ) )
 	// MonthlyIncome 
	m.setMonthlyincome( pack_Cost( proto, msg.MonthlyIncome ) )
 	// FlightNumber 
	m.setFlightnumber( pack_string( proto, msg.FlightNumber ) )
 	// MethodOfCommunication 
	m.setMethodofcommunication( pack_string( proto, msg.MethodOfCommunication ) )
 	// PsychologicalPicture 
	m.setPsychologicalpicture( pack_string( proto, msg.PsychologicalPicture ) )
 	// Appearance 
	m.setAppearance( pack_string( proto, msg.Appearance ) )
 	// AirlineId 
	m.setAirlineid( pack_string( proto, msg.AirlineId ) )
 
	return m
}


function unpack_VisitInfo(msg) {
	const m = {}
 
	m.TourCost = unpack_Cost( msg.getTourcost() )
  
	m.AmountOfAdults = unpack_int64( msg.getAmountofadults() )
  
	m.AmountOfChildren = unpack_int64( msg.getAmountofchildren() )
  
	m.AmountOfInfants = unpack_int64( msg.getAmountofinfants() )
  
	{
		m.TourPartnerIds = []
		const arr = msg.getTourpartneridsList()
		for (let i = 0; i < arr.length; i++) {
			m.TourPartnerIds.push(unpack_string(arr[i]))
		}
	}
  
	m.LastTimeBeenHere = unpack_string( msg.getLasttimebeenhere() )
  
	m.LastVisitedCountries = unpack_string( msg.getLastvisitedcountries() )
  
	m.MonthlyIncome = unpack_Cost( msg.getMonthlyincome() )
  
	m.FlightNumber = unpack_string( msg.getFlightnumber() )
  
	m.MethodOfCommunication = unpack_string( msg.getMethodofcommunication() )
  
	m.PsychologicalPicture = unpack_string( msg.getPsychologicalpicture() )
  
	m.Appearance = unpack_string( msg.getAppearance() )
  
	m.AirlineId = unpack_string( msg.getAirlineid() )
 
	return m
}



function pack_ContactInfo(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.ContactInfo()
	// Type 
	m.setType( pack_ContactInfoType( proto, msg.Type ) )
 	// Value 
	m.setValue( pack_string( proto, msg.Value ) )
 
	return m
}


function unpack_ContactInfo(msg) {
	const m = {}
 
	m.Type = unpack_ContactInfoType( msg.getType() )
  
	m.Value = unpack_string( msg.getValue() )
 
	return m
}



function pack_ContactInfoType(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.ContactInfoType()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// Type 
	m.setType( pack_string( proto, msg.Type ) )
 
	return m
}


function unpack_ContactInfoType(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.Type = unpack_string( msg.getType() )
 
	return m
}



function pack_Visit(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.Visit()
	// Id 
	m.setId( pack_string( proto, msg.Id ) )
 	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 	// CountryId 
	m.setCountryid( pack_string( proto, msg.CountryId ) )
 	// CheckInTime 
	m.setCheckintime( pack_string( proto, msg.CheckInTime ) )
 	// CheckOutTime 
	m.setCheckouttime( pack_string( proto, msg.CheckOutTime ) )
 	// HotelId 
	m.setHotelid( pack_string( proto, msg.HotelId ) )
 	// Objectives 
	for (let val in msg.Objectives) {
		m.addObjectives( pack_VisitObjective( proto, msg.Objectives[val] ) )
	}
 	// Trips 
	for (let val in msg.Trips) {
		m.addTrips( pack_Trip( proto, msg.Trips[val] ) )
	}
 	// Info 
	m.setInfo( pack_VisitInfo( proto, msg.Info ) )
 	// VisitStatus 
	m.setVisitstatus( pack_string( proto, msg.VisitStatus ) )
 	// StatusChangeTime 
	m.setStatuschangetime( pack_string( proto, msg.StatusChangeTime ) )
 	// Referer 
	m.setReferer( pack_Referer( proto, msg.Referer ) )
 
	return m
}


function unpack_Visit(msg) {
	const m = {}
 
	m.Id = unpack_string( msg.getId() )
  
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.CityId = unpack_string( msg.getCityid() )
  
	m.CountryId = unpack_string( msg.getCountryid() )
  
	m.CheckInTime = unpack_string( msg.getCheckintime() )
  
	m.CheckOutTime = unpack_string( msg.getCheckouttime() )
  
	m.HotelId = unpack_string( msg.getHotelid() )
  
	{
		m.Objectives = []
		const arr = msg.getObjectivesList()
		for (let i = 0; i < arr.length; i++) {
			m.Objectives.push(unpack_VisitObjective(arr[i]))
		}
	}
  
	{
		m.Trips = []
		const arr = msg.getTripsList()
		for (let i = 0; i < arr.length; i++) {
			m.Trips.push(unpack_Trip(arr[i]))
		}
	}
  
	m.Info = unpack_VisitInfo( msg.getInfo() )
  
	m.VisitStatus = unpack_string( msg.getVisitstatus() )
  
	m.StatusChangeTime = unpack_string( msg.getStatuschangetime() )
  
	m.Referer = unpack_Referer( msg.getReferer() )
 
	return m
}



function pack_VisitRep(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.VisitRep()
	// Visit 
	m.setVisit( pack_Visit( proto, msg.Visit ) )
 	// TourAgency 
	m.setTouragency( pack_TourAgency( proto, msg.TourAgency ) )
 	// Client 
	m.setClient( pack_Client( proto, msg.Client ) )
 
	return m
}


function unpack_VisitRep(msg) {
	const m = {}
 
	m.Visit = (msg.hasVisit() ? unpack_Visit( msg.getVisit() ) : undefined)
  
	m.TourAgency = (msg.hasTouragency() ? unpack_TourAgency( msg.getTouragency() ) : undefined)
  
	m.Client = (msg.hasClient() ? unpack_Client( msg.getClient() ) : undefined)
 
	return m
}



function pack_AddVisitReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddVisitReq()
	// ClientId 
	m.setClientid( pack_string( proto, msg.ClientId ) )
 	// TourAgencyId 
	m.setTouragencyid( pack_string( proto, msg.TourAgencyId ) )
 	// Visit 
	m.setVisit( pack_NewVisit( proto, msg.Visit ) )
 
	return m
}


function unpack_AddVisitReq(msg) {
	const m = {}
 
	m.ClientId = unpack_string( msg.getClientid() )
  
	m.TourAgencyId = unpack_string( msg.getTouragencyid() )
  
	m.Visit = unpack_NewVisit( msg.getVisit() )
 
	return m
}



function pack_AddNewHostingPartyManagerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewHostingPartyManagerReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_AddNewHostingPartyManagerReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_AddNewStoreManagerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewStoreManagerReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_AddNewStoreManagerReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



function pack_AddNewTransferManagerReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewTransferManagerReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// CityId 
	m.setCityid( pack_string( proto, msg.CityId ) )
 
	return m
}


function unpack_AddNewTransferManagerReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.CityId = unpack_string( msg.getCityid() )
 
	return m
}



function pack_AddNewStoreEmployeeReq(proto, msg) {
	if (msg === undefined) {
		return undefined
	}
	const m = new proto.AddNewStoreEmployeeReq()
	// FullName 
	m.setFullname( pack_string( proto, msg.FullName ) )
 	// Email 
	m.setEmail( pack_string( proto, msg.Email ) )
 	// StoreId 
	m.setStoreid( pack_string( proto, msg.StoreId ) )
 
	return m
}


function unpack_AddNewStoreEmployeeReq(msg) {
	const m = {}
 
	m.FullName = unpack_string( msg.getFullname() )
  
	m.Email = unpack_string( msg.getEmail() )
  
	m.StoreId = unpack_string( msg.getStoreid() )
 
	return m
}



export default class {
	constructor(proto, address, requestCallback) {
		this.config = {
			proto: proto,
			address: address,
			requestCallback: requestCallback,
		}
	}
	

	get API() {
		return new class {
			constructor(config) {
				this.config = config
			}
			
			SetEmployeePercent(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setEmployeePercent( pack_SetEmployeePercentReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateFullName(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateFullName( pack_UpdateFullNameReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateEmail(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateEmail( pack_UpdateEmailReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdatePassword(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updatePassword( pack_UpdatePasswordReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddNewDispatchingPartyManager(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addNewDispatchingPartyManager( pack_AddNewDispatchingPartyManagerReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddNewTourAgencyManager(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addNewTourAgencyManager( pack_AddNewTourAgencyManagerReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddNewTourAgencyEmployee(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addNewTourAgencyEmployee( pack_AddNewTourAgencyEmployeeReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddClient(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addClient( pack_AddClientReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateClientFullName(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateClientFullName( pack_UpdateClientFullNameReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateClientAge(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateClientAge( pack_UpdateClientAgeReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateClientGender(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateClientGender( pack_UpdateClientGenderReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateClientContactInfo(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateClientContactInfo( pack_UpdateClientContactInfoReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddVisit(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addVisit( pack_AddVisitReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddClientAndVisit(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addClientAndVisit( pack_AddClientAndVisitReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_AddClientAndVisitRep( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddNewHostingPartyManager(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addNewHostingPartyManager( pack_AddNewHostingPartyManagerReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetUsersList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getUsersList( pack_GetUsersListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_User( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetClientsList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getClientsList( pack_GetClientsListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Client( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetHotelsList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getHotelsList( pack_GetHotelsListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Hotel( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetTourPartnersList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getTourPartnersList( pack_GetTourPartnersListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_TourPartner( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetAirlinesList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getAirlinesList( pack_GetAirlinesListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Airline( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetCitiesList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getCitiesList( pack_GetCitiesListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_City( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetCountriesList(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getCountriesList( pack_GetCountriesListReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Country( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetHotelsByName(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getHotelsByName( pack_GetHotelsByNameReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Hotel( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetCitiesByName(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getCitiesByName( pack_GetCitiesByNameReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_City( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetCountriesByName(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getCountriesByName( pack_GetCountriesByNameReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Country( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetVisits(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getVisits( pack_GetVisitsReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_VisitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetVisitsByClient(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getVisitsByClient( pack_GetVisitsByClientReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Visit( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			AddRole(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addRole( pack_AddRoleReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteRole(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteRole( pack_DeleteRoleReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddCountry(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addCountry( pack_AddCountryReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Country( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddCity(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addCity( pack_AddCityReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_City( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddHotel(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addHotel( pack_AddHotelReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Hotel( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddTourPartner(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addTourPartner( pack_AddTourPartnerReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_TourPartner( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddAirline(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addAirline( pack_AddAirlineReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Airline( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			Authenticate(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.authenticate( pack_AuthenticateReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_User( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetUserById(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getUserById( pack_GetUserByIdReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_User( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			LogOut(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.logOut( pack_LogOutReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			CheckUser(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.checkUser( pack_CheckUserReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_CheckUserRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			AddCardForClient(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addCardForClient( pack_AddCardForClientReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GenerateCardNumbers(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.generateCardNumbers( pack_GenerateCardNumbersReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Card( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetClientByCard(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getClientByCard( pack_GetClientByCardReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetClientById(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getClientById( pack_GetClientByIdReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Client( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetCardByClient(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getCardByClient( pack_GetCardByClientReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Card( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetHostingPartyManagers(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getHostingPartyManagers( pack_GetHostingPartyManagersReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_User( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetDispatchingPartyManagers(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getDispatchingPartyManagers( pack_GetDispatchingPartyManagersReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_User( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			SearchClient(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.searchClient( pack_SearchClientReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Client( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetMyVisits(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getMyVisits( pack_GetMyVisitsReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_VisitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetVisitsForDisp(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getVisitsForDisp( pack_GetVisitsReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_VisitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			UpdateCountry(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateCountry( pack_UpdateCountryReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Country( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateCity(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateCity( pack_UpdateCityReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_City( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateHotel(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateHotel( pack_UpdateHotelReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Hotel( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateTourPartner(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateTourPartner( pack_UpdateTourPartnerReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_TourPartner( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateAirline(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateAirline( pack_UpdateAirlineReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Airline( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteCountry(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteCountry( pack_DeleteCountryReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteCity(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteCity( pack_DeleteCityReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteHotel(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteHotel( pack_DeleteHotelReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddCategory(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addCategory( pack_AddCategoryReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Category( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddGood(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addGood( pack_AddGoodReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Good( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateCategory(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateCategory( pack_UpdateCategoryReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Category( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateGood(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateGood( pack_UpdateGoodReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Good( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteCategory(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteCategory( pack_DeleteCategoryReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteGood(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteGood( pack_DeleteGoodReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddPurchase(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addPurchase( pack_AddPurchaseReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Purchase( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetPurchasesByCardInStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getPurchasesByCardInStore( pack_GetPurchasesByCardInStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_GetPurchasesByCardInStoreRep( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetStores(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getStores( pack_GetStoresReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Store( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getStore( pack_GetStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Store( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addStore( pack_AddStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Store( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateStore( pack_UpdateStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Store( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteStore( pack_DeleteStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetPercentsByStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getPercentsByStore( pack_GetPercentsByStoreReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Percent( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetGoodsByStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getGoodsByStore( pack_GetGoodsByStoreReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Good( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetGoods(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getGoods( pack_GetGoodsReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Good( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetCategories(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getCategories( pack_GetCategoriesReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Category( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetPurchases(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getPurchases( pack_GetPurchasesReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Purchase( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetPurchasesByClientId(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getPurchasesByClientId( pack_GetPurchasesByClientIdReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Purchase( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			AddGoodInStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addGoodInStore( pack_AddGoodInStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Store( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteGoodFromStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteGoodFromStore( pack_DeleteGoodFromStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Store( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetPercentInStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setPercentInStore( pack_SetPercentInStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Store( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addTourAgency( pack_AddTourAgencyReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_TourAgency( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateTourAgency( pack_UpdateTourAgencyReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_TourAgency( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteTourAgency( pack_DeleteTourAgencyReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetTourAgencies(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getTourAgencies( pack_GetTourAgenciesReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_TourAgency( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getTourAgency( pack_GetTourAgencyReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_TourAgency( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetPercentsByTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getPercentsByTourAgency( pack_GetPercentsByTourAgencyReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Percent( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			SetPercentInTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setPercentInTourAgency( pack_SetPercentInTourAgencyReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_TourAgency( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetTrips(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getTrips( pack_GetTripsReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_Trip( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			AddTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addTrip( pack_AddTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_AddTripRep( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetCompletedWithGoodsStatusInTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setCompletedWithGoodsStatusInTrip( pack_SetCompletedWithGoodsStatusInTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetCompletedWithoutGoodsStatusInTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setCompletedWithoutGoodsStatusInTrip( pack_SetCompletedWithoutGoodsStatusInTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetInProcessStatusInTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setInProcessStatusInTrip( pack_SetInProcessStatusInTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetPlanStatusInTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setPlanStatusInTrip( pack_SetPlanStatusInTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetPlaceAndTimeInTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setPlaceAndTimeInTrip( pack_SetPlaceAndTimeInTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetTripInStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setTripInStore( pack_SetTripInStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteTripInStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteTripInStore( pack_DeleteTripInStoreReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetVisitObjectivesInTrip(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setVisitObjectivesInTrip( pack_SetVisitObjectivesInTripReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			AddVisitObjective(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addVisitObjective( pack_AddVisitObjectiveReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_AddVisitObjectiveRep( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteVisitObjective(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteVisitObjective( pack_DeleteVisitObjectiveReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetCompletedStateInObjective(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setCompletedStateInObjective( pack_SetCompletedStateInObjectiveReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			SetCancelledStateInObjective(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setCancelledStateInObjective( pack_SetCancelledStateInObjectiveReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetObjectives(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getObjectives( pack_GetObjectivesReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_VisitObjective( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetVisitsByTourAgency(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getVisitsByTourAgency( pack_GetVisitsByTourAgencyReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_VisitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetVisitById(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getVisitById( pack_GetVisitByIdReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			UpdateInfoInVisit(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.updateInfoInVisit( pack_UpdateInfoInVisitReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Visit( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetCompletenessOfInfo(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.getCompletenessOfInfo( pack_GetCompletenessOfInfoReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_GetCompletenessOfInfoRep( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetTotalProfit(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getTotalProfit( pack_GetTotalProfitReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_GetTotalProfitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetProfitByStore(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getProfitByStore( pack_GetProfitByStoreReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_GetProfitByStoreRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetAgencyProfit(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getAgencyProfit( pack_GetAgencyProfitReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_GetAgencyProfitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetEmployeeProfit(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getEmployeeProfit( pack_GetEmployeeProfitReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_GetEmployeeProfitRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetPlannedPayout(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getPlannedPayout( pack_GetPayoutReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_GetPayoutRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			GetActualPayout(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getActualPayout( pack_GetPayoutReq( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_GetPayoutRep( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			SetPaidOffForEmployee(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.setPaidOffForEmployee( pack_SetPaidOffForEmployeeReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_ActualPayout( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			GetContactInfoTypes(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				const call = client.getContactInfoTypes( pack_Dummy( this.config.proto, msg ), meta )
				call.on('data', msg => {
					data( unpack_ContactInfoType( msg ) )
				})
				call.on('end', () => {
					callDone()
				})
				call.on('status', stat => {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})
				call.on('error', error => {
					callDone(error)
				})

				return new callWrapper(call)
			}
			AddContactInfoType(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.addContactInfoType( pack_AddContactInfoTypeReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_ContactInfoType( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
			DeleteContactInfoType(msg, data, done, status, options) {
				options = (options || {})
				const meta = Meta(options, {})
				if (typeof this.config.requestCallback === typeof function() {}) {
					this.config.requestCallback(meta)
				}
				const callDone = (arg) => {
					if (typeof done === typeof function() {}) {
						done(arg)
						done = undefined
					}
				}
				// console.log('META', meta)
				// bind(fn, client)
				const client = new this.config.proto.APIClient(this.config.address)

				let call = client.deleteContactInfoType( pack_DeleteContactInfoTypeReq( this.config.proto, msg ), meta, function(error, msg) {
					if (!error) {
						data( unpack_Dummy( msg ) )
						callDone()
					} else {
						callDone(error)
					}
				})
				call.on("status", function(stat) {
					if (typeof status === typeof function() {}) {
						status(stat)
					}
					callDone()
				})

				return new callWrapper(call)
			}
		} (this.config)
	}
}

