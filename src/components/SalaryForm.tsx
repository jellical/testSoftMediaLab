import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useSelector } from 'react-redux'

import { summOptions } from '../constants'
import { RootState } from '../store'
import TextInput from '../components/formElements/TextInput'
import TaxesSwitch from '../components/formElements/TaxesSwitch'
import PaymentOption from '../components/formElements/PaymentOption'
import SummaryCard from '../components/formElements/SummaryCard'
import { SalaryInterface } from '../types/salary'

const SalaryForm = () => {
    const formValues = useSelector((state:RootState) => state.form.salaryForm.values )
    const selectedSummOption = formValues && summOptions.find(option => option.calculationType === formValues.calculationType)

    return (
        <form className='salary-form'>
            <div className='container-md'>

                <div className='row text-muted form-custom-header'>
                    Сумма
                </div>

                <div className='summ-options'>
                    {summOptions.map(summOption => (
                                <Field
                                    key={summOption.calculationType}
                                    component={PaymentOption}
                                    summOption={summOption}
                                    name='calculationType'
                                />
                ))}
                </div>

                { formValues && formValues.calculationType !== 'minimal' &&
                    <div className = 'tax-selector'>
                         <Field
                             name = 'includePersonalGainTaxes'
                             component = { TaxesSwitch }
                             type = 'checkbox'
                             id = 'includePersonalGainTaxes'
                         />
                    </div>

                }

                { formValues && formValues.calculationType !== "minimal" &&
                    <div className = 'value-input'>
                            <Field
                                className = 'form-control'
                                component = { TextInput }
                                valueLabel = { selectedSummOption && selectedSummOption.labelValue }
                                name = 'value'
                                id = 'value'
                            />
                    </div>
                }

                { formValues && formValues.calculationType === 'perMonth' && formValues.value &&
                    <div className='row summary-card'>
                        <SummaryCard
                            enteredSalary = { parseInt(formValues.value) }
                            includeTaxes={ formValues.includePersonalGainTaxes }
                        />
                    </div>
                }


            </div>
        </form>
    )
}

const initialValues: SalaryInterface = {
    calculationType: summOptions[0].calculationType,
    value: '',
    includePersonalGainTaxes: false
}


export default reduxForm({
    form: 'salaryForm',
    initialValues
})(SalaryForm)
