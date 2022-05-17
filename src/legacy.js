import Module from '../modules/verovio-toolkit.js'
import { VerovioToolkit } from './verovio-toolkit.js';

class VerovioLegacyToolkit extends VerovioToolkit {
    constructor(VerovioModule = Module) {
        super(VerovioModule);
    }
}

export default {
    module: Module,
    toolkit: VerovioLegacyToolkit,
}
