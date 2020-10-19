export interface SalaryInterface {
    calculationType: 'perMonth' | 'minimal' | 'perDay' | 'perHour',
    includePersonalGainTaxes: boolean,
    value?: number | ""
}

export interface SummOption {
    calculationType: 'perMonth' | 'minimal' | 'perDay' | 'perHour',
    label: string,
    labelValue: string
}
