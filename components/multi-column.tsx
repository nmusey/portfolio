import {ReactElement} from "react";

interface Props {
    columns: ReactElement[];
}

export const MultiColumn = (props: Props) => {
    return (
        <div className="horizontal full-width space-around">
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