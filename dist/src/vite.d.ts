import type { Plugin } from 'vite';
/** Every icon that has its own module under `dist/csr`, by base name (`Heart`, not `HeartIcon`). */
export declare function phosphorIconNames(): ReadonlySet<string>;
/**
 * Rewrite the icon imports of one module. Pure: the same code and icon set
 * give the same output, and code without icon imports comes back unchanged.
 */
export declare function rewriteIconImports(code: string, icons: ReadonlySet<string>): string;
/**
 * The Vite plugin. Runs before every other transform, on the app's own
 * modules and the workspace packages Vite bundles; never on `node_modules`,
 * whose icon imports are already per icon or are the index itself.
 */
export declare function phosphorPerIcon(): Plugin;
//# sourceMappingURL=vite.d.ts.map