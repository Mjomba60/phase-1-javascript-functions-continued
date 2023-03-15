// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective = "*") {
    return function(value = "special"){
        return `You are ${adjective}${value}${adjective}!`;
    }
    
}