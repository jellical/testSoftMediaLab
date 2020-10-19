import clsx from 'clsx'
import React from 'react'

const TaxesSwitch = (
    {
        id,
        input
    }:{
        id: string,
        input: {
            value: boolean,
            onChange: (arg0: boolean) => void }
    }) => {

    const handleChange = () => input.onChange(!input.value)

    return (
        <div className='row switch-custom-group'>
            <div className='left-label'>
                <label
                    className={ clsx(
                        'switch-label',
                        input.value ? 'is-active' : 'text-muted'
                    ) }
                    onClick={handleChange}
                >
                    Указать с НДФЛ
                </label>
            </div>

            <div className={ 'custom-control custom-switch'}>
                <input
                    className = 'custom-control-input'
                    type = 'checkbox'
                    checked = { !input.value }
                    onChange = { handleChange }
                    id = { id }
                />
                <label
                    className = { clsx(
                        "custom-control-label",
                        "switch-label",
                        !input.value ? "is-active" : "text-muted"
                    ) }
                       htmlFor = { id }>
                    Без НДФЛ
                </label>
            </div>
        </div>
    )
}

export default TaxesSwitch
