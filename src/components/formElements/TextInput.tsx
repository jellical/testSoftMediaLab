import React, {useState} from 'react'

const TextInput = (
    {
        id,
        valueLabel,
        input
    } : {
        id: string,
        valueLabel: false | string,
        input: {
            value: string,
            onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
        }
    }) => {

    const [isTyping, setIsTyping] = useState(false)
    const formattedValue = input.value && parseInt(input.value).toLocaleString('ru-RU')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (!e.target.value || Number(e.target.value)) {
            return input.onChange(e)
        }
    }

    return (
        <div className='row align-items-center'>
                <input
                    type = 'text'
                    className = 'form-control custom-value-input'
                    value = { isTyping ?  input.value : formattedValue }

                    onChange = { handleChange }
                    onBlur = { ()=>setIsTyping(false) }
                    onFocus = { ()=>setIsTyping(true) }
                    id = { id }
                />


                {valueLabel &&
                    <label
                        htmlFor = { id }
                        className = 'custom-value-input-label'
                    >
                        { valueLabel }
                    </label>
                }
            </div>
    )
}

export default TextInput
