function firstWednesday(month) {
    var d = new Date();
    d.setMonth(month)
    d.setDate(1);

    while (d.getDay() !== 3) {
        d.setDate(d.getDate() + 1);
        d.setHours(23, 59, 59, 999);
    }

    return d;
}

function checkDate(date) {
    var month = date.getMonth();
    wednesday = firstWednesday(month);
    if (date > wednesday) {
        month = month + 1;
    }
    wednesday = firstWednesday(month);
    return wednesday;
}

module.exports = checkDate;