import { FC } from "react";

interface Props {
    className?: string
    options: string[]
    selected: string
    setSelected: (selected: string) => void
}

export const Select: FC<Props> = ({ options, selected, setSelected, className }) => {
    return (<>
        <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className={['form-select form-select-white form-select-sm w-125px', className].join(' ')}
            defaultValue={selected}
            onChange={(e) => setSelected(e.target.value)}
        >
            {options.map(x => <option value={x}>{x}</option>)}
        </select>
    </>)
}