import {ReactElement} from "react";
import useWidthQuery from "../hooks/useWidthQuery";
import {ColumnMinWidth} from "../constants/width";

interface Props {
    columns: ReactElement[];
}

export const MultiColumn = (props: Props) => {
    const totalWideWith = ColumnMinWidth * props.columns.length
    const isWide = useWidthQuery(`${totalWideWith}px`);

    return (
        <div className={`full-width space-around ${isWide ? 'horizontal' : 'vertical'}`}>
            {
                props.columns.map((element, index) => (
                    <div key={`n-column-${index}`}>
                        {props.columns[index]}
                    </div>
                ))
            }
        </div>
    );
}