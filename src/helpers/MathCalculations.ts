
const randomNumber = () => Math.floor( Math.random() * 10);

export const generateRandomCalculation = () => { 
    const mathOperators = '+-*'  
    const randomMathOperator = mathOperators[Math.floor(Math.random() * mathOperators.length)]
    
    return `${randomNumber()} ${randomMathOperator} ${randomNumber()}`
}

export const generateCalculations = (quantity: number) => {
    const calculations = []

    for (let i = 0; i < quantity; i++) {
        calculations.push( generateRandomCalculation() )
    }

    return calculations
}