const hourlyRateInput = document.getElementById('hourlyRate')
const hoursPerDayInput = document.getElementById('hoursPerDay')
const daysPerWeekInput = document.getElementById('daysPerWeek')

const hoursNumEl = document.getElementById('hours-num')
const daysNumEl = document.getElementById('days-num')

hourlyRateInput.addEventListener('input', calculateSalary)
hoursPerDayInput.addEventListener('input', calculateSalary)
daysPerWeekInput.addEventListener('input', calculateSalary)

function calculateSalary() {
    const hourlyRate = parseFloat(hourlyRateInput.value)
    const hoursPerDay = parseFloat(hoursPerDayInput.value)
    const daysPerWeek = parseFloat(daysPerWeekInput.value)

    const hourlyAmount = hourlyRate
    const dailyAmount = hourlyRate * hoursPerDay
    const weeklyAmount = dailyAmount * daysPerWeek
    const monthlyAmount = weeklyAmount * 4
    const annualAmount = monthlyAmount * 12

    hoursNumEl.innerText = hoursPerDay
    daysNumEl.innerText = daysPerWeek

    displayAmounts (hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount)
}

function displayAmounts (hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount) {
    document.getElementById('hourlyAmount').textContent = `$${hourlyAmount.toFixed(2)}`
    document.getElementById('dailyAmount').textContent = `$${dailyAmount.toFixed(2)}`
    document.getElementById('weeklyAmount').textContent = `$${weeklyAmount.toFixed(2)}`
    document.getElementById('monthlyAmount').textContent = `$${monthlyAmount.toFixed(2)}`
    document.getElementById('annualAmount').textContent = `$${annualAmount.toFixed(2)}`
}

calculateSalary()