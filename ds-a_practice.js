const createCheckDigit = (membershipId) => {
    let sumMembershipId = aggregator(membershipId);
    console.log(sumMembershipId)
    while (parseInt(sumMembershipId) > 9) sumMembershipId = aggregator(sumMembershipId);
    return sumMembershipId;
}

function aggregator(strMembershipId) {
    return strMembershipId.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
}

console.log(createCheckDigit("55555"))
