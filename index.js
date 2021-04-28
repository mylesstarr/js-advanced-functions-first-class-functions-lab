const returnFirstTwoDrivers = (array) => array.slice(0,2)

const returnLastTwoDrivers = (array) => array.slice(array.length - 2)

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

const createFareMultiplier =(multiplier) => {
     const calcFare = (fare) => (parseInt(fare))*(parseInt(multiplier))
return calcFare
}

const fareDoubler = (fare) => {return (createFareMultiplier(2)(fare))}

const fareTripler = (fare) => {return (createFareMultiplier(3)(fare))}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
        
    return returnFirstTwoDrivers(drivers) || returnLastTwoDrivers(drivers)
}