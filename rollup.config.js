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
                file: 'dist/verovio.es.js',
                format: 'es',
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
    },
];
