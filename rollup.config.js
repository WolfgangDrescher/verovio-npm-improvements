// import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/verovio.umd.js',
                format: 'umd',
                name: 'verovio',
            },
            {
                file: 'dist/verovio.es.mjs',
                format: 'es',
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
        // plugins: [commonjs({
        //     transformMixedEsModules: true,
        //     ignore: [
        //         'path',
        //         'fs',
        //         'crypto',
        //     ],
        // })],
    },
];
