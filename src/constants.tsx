import {SummOption} from "./types/salary";

export const ENABLE_REDUX_DEV_TOOLS = true

export const personalGainTax = 13

export const summOptions: SummOption[] = [
    {calculationType: "perMonth", label:"Оклад за месяц", labelValue:"₽"},
    {calculationType: "minimal", label: "МРОТ", labelValue: ""},
    {calculationType: "perDay", label: "Оплата за день", labelValue: "₽ в день"},
    {calculationType: "perHour", label: "Оплата за час", labelValue: "₽ в час"}
]
