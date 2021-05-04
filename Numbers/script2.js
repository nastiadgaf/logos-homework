function sum(val1, val2){
    val1 = String(val1);
    val2 = String(val2);

    const unit1 = getUnit(val1);
    const unit2 = getUnit(val2);

    if (!(unit1 && unit2) || unit1 !== unit2){
        return 'Error';
    }

    const unit = getUnit(val1);
    const result = parseInt(val1) + parseInt(val2);

    return result + unit;

    function getUnit(str){
        const UNITS = ['em', 'px', '%'];
        let currentUnit;

        for(let unit of UNITS){
            if(str.includes(unit)) currentUnit = unit;
        }

        return currentUnit;
    }

}


console.log(sum('100px', '50px'));// 150px
console.log(sum('10%', '50%'));// 60%
console.log(sum('10%', '100px')); // Error
console.log(sum('10', 1)); // Error