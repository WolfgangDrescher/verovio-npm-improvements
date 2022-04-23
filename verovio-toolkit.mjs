import { emscriptenProxy } from './emscripten-proxy.mjs';
import Module from './wasm-module.mjs';

export { VerovioToolkit };

VerovioToolkit.instances = [];

class VerovioToolkit {

    constructor() {
        this.ptr = emscriptenProxy.constructor();
        console.debug('Creating toolkit instance');
        VerovioToolkit.instances.push(this.ptr);
    }

    destroy() {
        VerovioToolkit.instances.splice(VerovioToolkit.instances.indexOf(this.ptr), 1);
        console.debug('Deleting toolkit instance');
        emscriptenProxy.destructor(this.ptr);
    }

    edit(editorAction) {
        return emscriptenProxy.edit(this.ptr, JSON.stringify(editorAction));
    }

    editInfo() {
        return JSON.parse(emscriptenProxy.editInfo(this.ptr));
    }

    getAvailableOptions() {
        return JSON.parse(emscriptenProxy.getAvailableOptions(this.ptr));
    }

    getDescriptiveFeatures(options) {
        return JSON.parse(emscriptenProxy.getDescriptiveFeatures(this.ptr, JSON.stringify(options)));
    }

    getElementAttr(xmlId) {
        return JSON.parse(emscriptenProxy.getElementAttr(this.ptr, xmlId));
    }

    getElementsAtTime(millisec) {
        return JSON.parse(emscriptenProxy.getElementsAtTime(this.ptr, millisec));
    }

    getExpansionIdsForElement(xmlId) {
        return JSON.parse(emscriptenProxy.getExpansionIdsForElement(this.ptr, xmlId));
    }

    getHumdrum() {
        return emscriptenProxy.getHumdrum(this.ptr);
    }

    convertHumdrumToHumdrum(data) {
        return emscriptenProxy.convertHumdrumToHumdrum(this.ptr, data);
    }

    convertMEIToHumdrum(data) {
        return emscriptenProxy.convertMEIToHumdrum(this.ptr, data);
    }

    getLog() {
        return emscriptenProxy.getLog(this.ptr);
    }

    getMEI(param1) {
        return emscriptenProxy.getMEI(this.ptr, JSON.stringify(param1));
    }

    getMIDIValuesForElement(xmlId) {
        return JSON.parse(emscriptenProxy.getMIDIValuesForElement(this.ptr, xmlId));
    }

    getNotatedIdForElement(xmlId) {
        return emscriptenProxy.getNotatedIdForElement(this.ptr, xmlId);
    }

    getOptions(defaultValues) {
        return JSON.parse(emscriptenProxy.getOptions(this.ptr, defaultValues));
    }

    getPageCount() {
        return emscriptenProxy.getPageCount(this.ptr);
    }

    getPageWithElement(xmlId) {
        return emscriptenProxy.getPageWithElement(this.ptr, xmlId);
    }

    getTimeForElement(xmlId) {
        return emscriptenProxy.getTimeForElement(this.ptr, xmlId);
    }

    getTimesForElement(xmlId) {
        return JSON.parse(emscriptenProxy.getTimesForElement(this.ptr, xmlId));
    }

    getVersion() {
        return emscriptenProxy.getVersion(this.ptr);
    }

    loadData(data) {
        return emscriptenProxy.loadData(this.ptr, data);
    }

    loadZipDataBase64(data) {
        return emscriptenProxy.loadZipDataBase64(this.ptr, data);
    }

    loadZipDataBuffer(data) {
        if (!(data instanceof ArrayBuffer)) {
            console.error('Parameter for loadZipDataBuffer has to be of type ArrayBuffer');
            return false;
        }
        var dataArray = new Uint8Array(data); 
        var dataSize = dataArray.length * dataArray.BYTES_PER_ELEMENT;
        var dataPtr = Module._malloc(dataSize);
        Module.HEAPU8.set(dataArray, dataPtr);
        var res = emscriptenProxy.loadZipDataBuffer(this.ptr, dataPtr, dataSize);
        Module._free(dataPtr);
        return res;
    }

    redoLayout(options = {}) {
        emscriptenProxy.redoLayout(this.ptr, JSON.stringify(options));
    }

    redoPagePitchPosLayout() {
        emscriptenProxy.redoPagePitchPosLayout(this.ptr);
    }

    renderData(data, options) {
        return emscriptenProxy.renderData(this.ptr, data, JSON.stringify(options));
    }

    renderPage(pageNo, options) {
        console.warn('Method renderPage is deprecated; use renderToSVG instead');
        return emscriptenProxy.renderToSVG(this.ptr, pageNo, JSON.stringify(options));
    }

    renderToMIDI(options) {
        return emscriptenProxy.renderToMIDI(this.ptr, JSON.stringify(options));
    }

    renderToMidi(options) {
        console.warn('Method renderToMidi is deprecated; use renderToMIDI instead');
        return emscriptenProxy.renderToMIDI(this.ptr, JSON.stringify(options));
    }

    renderToPAE() {
        return emscriptenProxy.renderToPAE(this.ptr);
    }

    renderToSVG(pageNo, options) {
        return emscriptenProxy.renderToSVG(this.ptr, pageNo, JSON.stringify(options));
    }

    renderToTimemap(options = {}) {
        return JSON.parse(emscriptenProxy.renderToTimemap(this.ptr, JSON.stringify(options)));
    }

    resetXmlIdSeed(seed) {
        return emscriptenProxy.resetXmlIdSeed(this.ptr, seed);
    }

    setOptions(options) {
        emscriptenProxy.setOptions(this.ptr, JSON.stringify(options));
    }

    validatePAE(data) {
        if (data instanceof Object) {
            data = JSON.stringify(data)
        }
        return JSON.parse(emscriptenProxy.validatePAE(this.ptr, data));
    }
}
