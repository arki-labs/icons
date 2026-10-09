import type { Flags } from 'flagpack-core';
import * as React from 'react';
import 'react-flagpack/dist/style.css';
export type FlagProps = {
    code: Flags;
    size?: string;
    gradient?: '' | 'top-down' | 'real-circular' | 'real-linear';
    hasBorder?: boolean;
    hasDropShadow?: boolean;
    hasBorderRadius?: boolean;
    className?: string;
};
export declare const Flag: React.FC<FlagProps>;
export { type Flags } from 'flagpack-core';
//# sourceMappingURL=index.d.ts.map