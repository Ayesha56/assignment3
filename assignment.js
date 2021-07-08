// //question --1//
var abir = kilometerToMeter(34.3546);

function kilometerToMeter(kilo) {
    var meter = Math.round(kilo * 1000);
    return meter;
}

console.log(abir);
// //question --2//


function budgetCalculator(watch, phone, laptop) {
    var totalWatchPrice = watch * 50;
    var totalPhonePrice = phone * 100;
    var totalLaptopPrice = laptop * 500;
    var totalAmount = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalAmount;

}
var korim = budgetCalculator(5, 4, 2);
console.log(korim);

//question 3//

function hotelCost(NumDay) {
    if (NumDay <= 10) {
        var payAmount = NumDay * 100;
        return payAmount;
    } else if (NumDay <= 20) {
        var tenDay = 10 * 100;
        var SecTenDay = NumDay - 10;
        var payAmount = tenDay + SecTenDay * 80;
        return payAmount;
    } else {
        var tenDay = 10 * 100;
        var SecTenDay = 10 * 80;
        var otherDay = NumDay - 20;
        var totalPayAmount = tenDay + SecTenDay + otherDay * 50;
        return totalPayAmount;
    }

}
var imu = hotelCost(21);
console.log(imu);

//question 4//
function megaFriend(frndName) {
    var wordLen = 0;
    var largeName;
    if (frndName.length > 0) {
        for (var i = 0; i < frndName.length; i++) {
            if (frndName[i].length > wordLen) {
                var wordLen = frndName[i].length;
                largeName = frndName;
            }
        }
        return largeName;
    }
}

var frends = megaFriend('imu', 'ayesha', 'tayeba', 'imrankhan')
console.log(frends);