(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.verovio = {}));
})(this, (function (exports) { 'use strict';

    const createEmscriptenProxy = (Module) => {
        return new Proxy({}, {
            get: (target, method) => {
                return (...args) => {
                    return getToolkitFunction(Module, method)(...args);
                };
            },
        });
    };

    function getToolkitFunction(Module, method) {
        const mapping = {};

        // Constructor and destructor
        // Toolkit *constructor()
        mapping.constructor = Module.cwrap('vrvToolkit_constructor', 'number', []);

        // void destructor(Toolkit *ic)
        mapping.destructor = Module.cwrap('vrvToolkit_destructor', null, ['number']);

        // bool edit(Toolkit *ic, const char *editorAction) 
        mapping.edit = Module.cwrap('vrvToolkit_edit', 'number', ['number', 'string']);

        // char *editInfo(Toolkit *ic)
        mapping.editInfo = Module.cwrap('vrvToolkit_editInfo', 'string', ['number']);

        // char *getAvailableOptions(Toolkit *ic)
        mapping.getAvailableOptions = Module.cwrap('vrvToolkit_getAvailableOptions', 'string', ['number']);

        // char *getDescriptiveFeatures(Toolkit *ic, const char *options)
        mapping.getDescriptiveFeatures = Module.cwrap('vrvToolkit_getDescriptiveFeatures', 'string', ['number', 'string']);

        // char *getElementAttr(Toolkit *ic, const char *xmlId)
        mapping.getElementAttr = Module.cwrap('vrvToolkit_getElementAttr', 'string', ['number', 'string']);

        // char *getElementsAtTime(Toolkit *ic, int time)
        mapping.getElementsAtTime = Module.cwrap('vrvToolkit_getElementsAtTime', 'string', ['number', 'number']);

        // char *vrvToolkit_getExpansionIdsForElement(Toolkit *tk, const char *xmlId);
        mapping.getExpansionIdsForElement = Module.cwrap('vrvToolkit_getExpansionIdsForElement', 'string', ['number', 'string']);

        // char *getHumdrum(Toolkit *ic)
        mapping.getHumdrum = Module.cwrap('vrvToolkit_getHumdrum', 'string');

        // char *convertMEIToHumdrum(Toolkit *ic, const char *meiData)
        mapping.convertMEIToHumdrum = Module.cwrap('vrvToolkit_convertMEIToHumdrum', 'string', ['number', 'string']);

        // char *convertHumdrumToHumdrum(Toolkit *ic, const char *humdrumData)
        mapping.convertHumdrumToHumdrum = Module.cwrap('vrvToolkit_convertHumdrumToHumdrum', 'string', ['number', 'string']);

        // char *getLog(Toolkit *ic)
        mapping.getLog = Module.cwrap('vrvToolkit_getLog', 'string', ['number']);

        // char *getMEI(Toolkit *ic, const char *options)
        mapping.getMEI = Module.cwrap('vrvToolkit_getMEI', 'string', ['number', 'string']);

        // char *vrvToolkit_getNotatedIdForElement(Toolkit *tk, const char *xmlId);
        mapping.getNotatedIdForElement = Module.cwrap('vrvToolkit_getNotatedIdForElement', 'string', ['number', 'string']);

        // char *getOptions(Toolkit *ic, int defaultValues)
        mapping.getOptions = Module.cwrap('vrvToolkit_getOptions', 'string', ['number', 'number']);

        // int getPageCount(Toolkit *ic)
        mapping.getPageCount = Module.cwrap('vrvToolkit_getPageCount', 'number', ['number']);

        // int getPageWithElement(Toolkit *ic, const char *xmlId)
        mapping.getPageWithElement = Module.cwrap('vrvToolkit_getPageWithElement', 'number', ['number', 'string']);

        // double getTimeForElement(Toolkit *ic, const char *xmlId)
        mapping.getTimeForElement = Module.cwrap('vrvToolkit_getTimeForElement', 'number', ['number', 'string']);

        // char *getTimesForElement(Toolkit *ic, const char *xmlId)
        mapping.getTimesForElement = Module.cwrap('vrvToolkit_getTimesForElement', 'string', ['number', 'string']);

        // char *getMIDIValuesForElement(Toolkit *ic, const char *xmlId)
        mapping.getMIDIValuesForElement = Module.cwrap('vrvToolkit_getMIDIValuesForElement', 'string', ['number', 'string']);

        // char *getVersion(Toolkit *ic)
        mapping.getVersion = Module.cwrap('vrvToolkit_getVersion', 'string', ['number']);

        // bool loadData(Toolkit *ic, const char *data)
        mapping.loadData = Module.cwrap('vrvToolkit_loadData', 'number', ['number', 'string']);

        // bool loadZipDataBase64(Toolkit *ic, const char *data)
        mapping.loadZipDataBase64 = Module.cwrap('vrvToolkit_loadZipDataBase64', 'number', ['number', 'string']);

        // bool loadZipDataBuffer(Toolkit *ic, const unsigned char *data, int length)
        mapping.loadZipDataBuffer = Module.cwrap('vrvToolkit_loadZipDataBuffer', 'number', ['number', 'number', 'number']);

        // void redoLayout(Toolkit *ic)
        mapping.redoLayout = Module.cwrap('vrvToolkit_redoLayout', null, ['number', 'string']);

        // void redoPagePitchPosLayout(Toolkit *ic)
        mapping.redoPagePitchPosLayout = Module.cwrap('vrvToolkit_redoPagePitchPosLayout', null, ['number']);

        // char *renderData(Toolkit *ic, const char *data, const char *options)
        mapping.renderData = Module.cwrap('vrvToolkit_renderData', 'string', ['number', 'string', 'string']);

        // char *renderToMidi(Toolkit *ic, const char *rendering_options)
        mapping.renderToMIDI = Module.cwrap('vrvToolkit_renderToMIDI', 'string', ['number', 'string']);

        // char *renderToPAE(Toolkit *ic)
        mapping.renderToPAE = Module.cwrap('vrvToolkit_renderToPAE', 'string');

        // char *renderToSvg(Toolkit *ic, int pageNo, const char *rendering_options)
        mapping.renderToSVG = Module.cwrap('vrvToolkit_renderToSVG', 'string', ['number', 'number', 'string']);

        // char *renderToTimemap(Toolkit *ic)
        mapping.renderToTimemap = Module.cwrap('vrvToolkit_renderToTimemap', 'string', ['number', 'string']);

        // void resetXmlIdSeed(Toolkit *ic, int seed) 
        mapping.resetXmlIdSeed = Module.cwrap('vrvToolkit_resetXmlIdSeed', null, ['number', 'number']);

        // void setOptions(Toolkit *ic, const char *options) 
        mapping.setOptions = Module.cwrap('vrvToolkit_setOptions', null, ['number', 'string']);

        // char *validatePAE(Toolkit *ic, const char *options)
        mapping.validatePAE = Module.cwrap('vrvToolkit_validatePAE', 'string', ['number', 'string']);

        return mapping[method];
    }

    class VerovioToolkit {

        constructor(VerovioModule) {
            this.VerovioModule = VerovioModule || (typeof Module !== 'undefined' ? Module : null);
            if(!this.VerovioModule) {
                throw new Error('VerovioToolkit could not find emscripten module.');
            }
            this.proxy = createEmscriptenProxy(VerovioModule);
            this.ptr = this.proxy.constructor();
            console.debug('Creating toolkit instance');
            VerovioToolkit.instances.push(this.ptr);
        }

        destroy() {
            VerovioToolkit.instances.splice(VerovioToolkit.instances.indexOf(this.ptr), 1);
            console.debug('Deleting toolkit instance');
            this.proxy.destructor(this.ptr);
        }

        edit(editorAction) {
            return this.proxy.edit(this.ptr, JSON.stringify(editorAction));
        }

        editInfo() {
            return JSON.parse(this.proxy.editInfo(this.ptr));
        }

        getAvailableOptions() {
            return JSON.parse(this.proxy.getAvailableOptions(this.ptr));
        }

        getDescriptiveFeatures(options) {
            return JSON.parse(this.proxy.getDescriptiveFeatures(this.ptr, JSON.stringify(options)));
        }

        getElementAttr(xmlId) {
            return JSON.parse(this.proxy.getElementAttr(this.ptr, xmlId));
        }

        getElementsAtTime(millisec) {
            return JSON.parse(this.proxy.getElementsAtTime(this.ptr, millisec));
        }

        getExpansionIdsForElement(xmlId) {
            return JSON.parse(this.proxy.getExpansionIdsForElement(this.ptr, xmlId));
        }

        getHumdrum() {
            return this.proxy.getHumdrum(this.ptr);
        }

        convertHumdrumToHumdrum(data) {
            return this.proxy.convertHumdrumToHumdrum(this.ptr, data);
        }

        convertMEIToHumdrum(data) {
            return this.proxy.convertMEIToHumdrum(this.ptr, data);
        }

        getLog() {
            return this.proxy.getLog(this.ptr);
        }

        getMEI(param1) {
            return this.proxy.getMEI(this.ptr, JSON.stringify(param1));
        }

        getMIDIValuesForElement(xmlId) {
            return JSON.parse(this.proxy.getMIDIValuesForElement(this.ptr, xmlId));
        }

        getNotatedIdForElement(xmlId) {
            return this.proxy.getNotatedIdForElement(this.ptr, xmlId);
        }

        getOptions(defaultValues) {
            return JSON.parse(this.proxy.getOptions(this.ptr, defaultValues));
        }

        getPageCount() {
            return this.proxy.getPageCount(this.ptr);
        }

        getPageWithElement(xmlId) {
            return this.proxy.getPageWithElement(this.ptr, xmlId);
        }

        getTimeForElement(xmlId) {
            return this.proxy.getTimeForElement(this.ptr, xmlId);
        }

        getTimesForElement(xmlId) {
            return JSON.parse(this.proxy.getTimesForElement(this.ptr, xmlId));
        }

        getVersion() {
            return this.proxy.getVersion(this.ptr);
        }

        loadData(data) {
            return this.proxy.loadData(this.ptr, data);
        }

        loadZipDataBase64(data) {
            return this.proxy.loadZipDataBase64(this.ptr, data);
        }

        loadZipDataBuffer(data) {
            if (!(data instanceof ArrayBuffer)) {
                console.error('Parameter for loadZipDataBuffer has to be of type ArrayBuffer');
                return false;
            }
            var dataArray = new Uint8Array(data); 
            var dataSize = dataArray.length * dataArray.BYTES_PER_ELEMENT;
            var dataPtr = this.VerovioModule._malloc(dataSize);
            this.VerovioModule.HEAPU8.set(dataArray, dataPtr);
            var res = this.proxy.loadZipDataBuffer(this.ptr, dataPtr, dataSize);
            this.VerovioModule._free(dataPtr);
            return res;
        }

        redoLayout(options = {}) {
            this.proxy.redoLayout(this.ptr, JSON.stringify(options));
        }

        redoPagePitchPosLayout() {
            this.proxy.redoPagePitchPosLayout(this.ptr);
        }

        renderData(data, options) {
            return this.proxy.renderData(this.ptr, data, JSON.stringify(options));
        }

        renderPage(pageNo, options) {
            console.warn('Method renderPage is deprecated; use renderToSVG instead');
            return this.proxy.renderToSVG(this.ptr, pageNo, JSON.stringify(options));
        }

        renderToMIDI(options) {
            return this.proxy.renderToMIDI(this.ptr, JSON.stringify(options));
        }

        renderToMidi(options) {
            console.warn('Method renderToMidi is deprecated; use renderToMIDI instead');
            return this.proxy.renderToMIDI(this.ptr, JSON.stringify(options));
        }

        renderToPAE() {
            return this.proxy.renderToPAE(this.ptr);
        }

        renderToSVG(pageNo, options) {
            return this.proxy.renderToSVG(this.ptr, pageNo, JSON.stringify(options));
        }

        renderToTimemap(options = {}) {
            return JSON.parse(this.proxy.renderToTimemap(this.ptr, JSON.stringify(options)));
        }

        resetXmlIdSeed(seed) {
            return this.proxy.resetXmlIdSeed(this.ptr, seed);
        }

        setOptions(options) {
            this.proxy.setOptions(this.ptr, JSON.stringify(options));
        }

        validatePAE(data) {
            if (data instanceof Object) {
                data = JSON.stringify(data);
            }
            return JSON.parse(this.proxy.validatePAE(this.ptr, data));
        }
    }

    VerovioToolkit.instances = [];

    exports.VerovioToolkit = VerovioToolkit;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
