import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import 'react-flagpack/dist/style.css';
export const Flag = ({ code = 'NL', size = 'l', gradient = 'real-circular', hasBorder = false, hasDropShadow = true, hasBorderRadius = true, className, }) => {
    return (_jsx("span", { className: `flag ${gradient} size-${size} ${hasBorder ? 'border' : ''} ${hasDropShadow ? 'drop-shadow' : ''} ${hasBorderRadius ? 'border-radius' : ''} ${className ? className.replaceAll(/\s{2,}/g, ' ').trim() : ''}`, children: _jsx("img", { src: `/flags/${size}/${code}.svg`, alt: code }) }));
};
export {} from 'flagpack-core';
//# sourceMappingURL=index.js.map