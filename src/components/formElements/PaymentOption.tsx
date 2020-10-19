import React, {useRef, useState} from 'react'
import clsx from 'clsx'
import {Button, Overlay, Tooltip} from 'react-bootstrap'

import {SummOption} from '../../types/salary'

const PaymentOption = (
    {
        summOption,
        input
    }:{
        summOption:SummOption,
        input:{
            name:string,
            value:SummOption['calculationType'],
            onChange:(arg0:string)=>void}
    }) => {

    const [show, setShow] = useState(false)
    const [showHover, setShowHover] = useState(false)
    const target = useRef(null)

    const handleMouseHover = () => {
        setShowHover(!showHover)
    }

    return (
        <div className={clsx('row', 'custom-control', 'custom-radio')}>
            <input
                className = 'custom-control-input'
                type = 'radio'
                name = { input.name }
                checked = { input.value === summOption.calculationType }
                value = { summOption.label }
                onChange = { () => input.onChange(summOption.calculationType) }
                id = { summOption.calculationType }
            />
            <label
                className = 'custom-control-label'
                htmlFor = { summOption.calculationType }
            >
                { summOption.label }
            </label>

            { summOption.calculationType === 'minimal' &&

            <React.Fragment>
                <Button
                    ref = { target }
                    className = 'btn btn-custom'
                    onMouseEnter = { handleMouseHover }
                    onMouseLeave = { handleMouseHover }
                    onClick = { () => setShow(!show) }
                >
                    { show ? "X" : "i" }
                </Button>

                <Overlay
                    target = { target.current }
                    show = { show || showHover }
                    placement = 'bottom-start'>
                    { (props) => (
                        <Tooltip
                            id='minimal-tooltip'
                            className='tooltip-custom'
                            {...props}
                        >
                            МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
                        </Tooltip>
                    )}
                </Overlay>
            </React.Fragment>
            }
        </div>

    )
}

export default PaymentOption;
