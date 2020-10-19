import React from 'react'

import {personalGainTax} from '../../constants'

const SummaryCard = (
    {
        enteredSalary,
        includeTaxes
    }:{
        enteredSalary: number,
        includeTaxes: boolean
    }) => {

    let topay = 0
    let tax = 0
    let summ = 0

    if (includeTaxes) {
        tax = Math.trunc(enteredSalary*personalGainTax/100)
        summ = enteredSalary
        topay = enteredSalary - tax
    } else {
        tax = Math.trunc(enteredSalary*personalGainTax/(100-personalGainTax))
        summ = enteredSalary + tax
        topay = enteredSalary
    }

    return (
        <div className='summary-card-root'>
            <div><span>{ topay.toLocaleString('ru-RU') } ₽</span> сотрудник будет получать на руки</div>
            <div><span>{ tax.toLocaleString('ru-RU') } ₽</span> НДФЛ, {personalGainTax}% от оклада</div>
            <div><span>{ summ.toLocaleString('ru-RU') } ₽</span> за сотрудника в месяц</div>
        </div>
    )
}

export default SummaryCard
