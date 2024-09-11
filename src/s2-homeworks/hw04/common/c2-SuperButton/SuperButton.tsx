import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {red} from "@mui/material/colors";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'red' | 'secondary' | 'default';
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType = 'default',
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // Determine the final class name based on xType
    const finalClassName = `${s[xType]} ${className || ''}`;
    // Use s[xType] to get the correct class

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // Pass all other props, including children
        />
    );
};

export default SuperButton;