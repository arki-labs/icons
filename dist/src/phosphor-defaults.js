/** Providers that set the default Phosphor size, colour and weight for a design system or a subtree. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { IconContext } from '@phosphor-icons/react';
/**
 * Per-design-system Phosphor defaults.
 *
 * Each design system mounts a single provider near its app root. Picking
 * weight/size here propagates to every Phosphor icon underneath without
 * touching call sites — change one constant, the whole app shifts.
 *
 * Tune these to match the design system's character:
 *   - atelier  → editorial, warm, authored. Filled/duotone reads richer.
 *   - workbench → tool-first, calm utility. Regular reads quietest.
 *   - tribunal → editorial-evidence "case file". Regular line icons,
 *                inherited foreground — the chrome stays sober.
 */
export const ATELIER_PHOSPHOR_DEFAULTS = {
    weight: 'duotone',
    size: 20,
    color: 'currentColor',
};
export const WORKBENCH_PHOSPHOR_DEFAULTS = {
    weight: 'regular',
    size: 20,
    color: 'currentColor',
};
export const TRIBUNAL_PHOSPHOR_DEFAULTS = {
    weight: 'regular',
    size: 20,
    color: 'currentColor',
};
export function AtelierIconDefaults({ children, overrides }) {
    return (_jsx(IconContext.Provider, { value: { ...ATELIER_PHOSPHOR_DEFAULTS, ...overrides }, children: children }));
}
export function WorkbenchIconDefaults({ children, overrides }) {
    return (_jsx(IconContext.Provider, { value: { ...WORKBENCH_PHOSPHOR_DEFAULTS, ...overrides }, children: children }));
}
export function TribunalIconDefaults({ children, overrides }) {
    return (_jsx(IconContext.Provider, { value: { ...TRIBUNAL_PHOSPHOR_DEFAULTS, ...overrides }, children: children }));
}
/**
 * Generic provider for apps that don't use a shared design system.
 * Prefer the named providers above when you can.
 */
export function PhosphorIconDefaults({ children, defaults, }) {
    return _jsx(IconContext.Provider, { value: defaults, children: children });
}
/**
 * Subtree-scoped overrides that *merge* with the inherited Phosphor context
 * instead of replacing it. Use this when one region of the UI should opt out
 * of a design-system default (e.g. logos and footer chrome staying on
 * `weight: 'regular'` even under `AtelierIconDefaults`).
 *
 * Unlike `IconContext.Provider`, which replaces the entire context value,
 * this wrapper preserves the parent's size/color/weight and only changes
 * the fields you pass in `overrides`.
 */
export function PhosphorIconScope({ children, overrides, }) {
    const inherited = useContext(IconContext);
    return (_jsx(IconContext.Provider, { value: { ...inherited, ...overrides }, children: children }));
}
//# sourceMappingURL=phosphor-defaults.js.map