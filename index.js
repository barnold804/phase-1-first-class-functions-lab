const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice (0, 2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers);
}
