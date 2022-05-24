import commonjs from '@rollup/plugin-commonjs';
import addModuleExports from './src/rollup-plugin-add-module-exports.js';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/index.mjs',
                format: 'es',
                name: 'verovio',
            },
            {
                file: 'dist/index.cjs',
                format: 'cjs',
                name: 'verovio',
            },
        ],
    },
    {
        input: 'src/legacy.js',
        output: [
            {
                file: 'dist/verovio-toolkit.js',
                format: 'umd',
                name: 'verovio',
            },
        ],
    },
    {
        input: 'src/legacy-hum.js',
        output: [
            {
                file: 'dist/verovio-toolkit-hum.js',
                format: 'umd',
                name: 'verovio',
            },
        ],
    },
    {
        input: 'src/legacy-light.js',
        output: [
            {
                file: 'dist/verovio-toolkit-light.js',
                format: 'umd',
                name: 'verovio',
            },
        ],
    },
    {
        input: 'src/legacy-wasm.js',
        output: [
            {
                file: 'dist/verovio-toolkit-wasm.js',
                format: 'umd',
                name: 'verovio',
            },
        ],
        plugins: [
            addModuleExports(),
            commonjs({
                // transformMixedEsModules: true,
                ignore: [
                    'path',
                    'fs',
                    'crypto',
                ],
            }),
        ],
    },
];
