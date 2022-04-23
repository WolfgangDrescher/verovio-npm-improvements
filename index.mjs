import { VerovioToolkit } from './verovio-toolkit.mjs';
import { emscriptenProxy } from './emscripten-proxy.mjs';
import VerovioModule from './wasm-module.mjs';

export {
    VerovioModule,
    VerovioToolkit,
};

// If the window object is defined (if we are not within a WebWorker)...
if ((typeof window !== 'undefined') && window.addEventListener) {
    // Add a listener that will delete the object (if necessary) when the page is closed
    window.addEventListener('unload', function () {
        for (let i = 0; i < VerovioToolkit.instances.length; i++) {
            emscriptenProxy.destructor(VerovioToolkit.instances[i]);
        }
    });
}
