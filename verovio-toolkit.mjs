import { createEmscriptenProxy } from './emscripten-proxy.mjs';

export { VerovioToolkit };

class VerovioToolkit {

    constructor(VerovioModule) {
        this.VerovioModule = VerovioModule;
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
            data = JSON.stringify(data)
        }
        return JSON.parse(this.proxy.validatePAE(this.ptr, data));
    }
}

VerovioToolkit.instances = [];
