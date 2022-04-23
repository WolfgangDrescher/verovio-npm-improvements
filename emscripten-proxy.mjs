export const createEmscriptenProxy = (Module) => {
    console.log(Module);
    return new Proxy({}, {
        get: (target, method) => {
            console.log(method);
            return (...args) => {
                return getToolkitFunction(Module, method)(args);
            };
        },
    });
}

function getToolkitFunction(Module, method) {
    const functionMapping = {};

    // Constructor and destructor
    // Toolkit *constructor()
    functionMapping.constructor = Module.cwrap('vrvToolkit_constructor', 'number', []);

    // void destructor(Toolkit *ic)
    functionMapping.destructor = Module.cwrap('vrvToolkit_destructor', null, ['number']);

    // bool edit(Toolkit *ic, const char *editorAction) 
    functionMapping.edit = Module.cwrap('vrvToolkit_edit', 'number', ['number', 'string']);

    // char *editInfo(Toolkit *ic)
    functionMapping.editInfo = Module.cwrap('vrvToolkit_editInfo', 'string', ['number']);

    // char *getAvailableOptions(Toolkit *ic)
    functionMapping.getAvailableOptions = Module.cwrap('vrvToolkit_getAvailableOptions', 'string', ['number']);

    // char *getDescriptiveFeatures(Toolkit *ic, const char *options)
    functionMapping.getDescriptiveFeatures = Module.cwrap('vrvToolkit_getDescriptiveFeatures', 'string', ['number', 'string']);

    // char *getElementAttr(Toolkit *ic, const char *xmlId)
    functionMapping.getElementAttr = Module.cwrap('vrvToolkit_getElementAttr', 'string', ['number', 'string']);

    // char *getElementsAtTime(Toolkit *ic, int time)
    functionMapping.getElementsAtTime = Module.cwrap('vrvToolkit_getElementsAtTime', 'string', ['number', 'number']);

    // char *vrvToolkit_getExpansionIdsForElement(Toolkit *tk, const char *xmlId);
    functionMapping.getExpansionIdsForElement = Module.cwrap('vrvToolkit_getExpansionIdsForElement', 'string', ['number', 'string']);

    // char *getHumdrum(Toolkit *ic)
    functionMapping.getHumdrum = Module.cwrap('vrvToolkit_getHumdrum', 'string');

    // char *convertMEIToHumdrum(Toolkit *ic, const char *meiData)
    functionMapping.convertMEIToHumdrum = Module.cwrap('vrvToolkit_convertMEIToHumdrum', 'string', ['number', 'string']);

    // char *convertHumdrumToHumdrum(Toolkit *ic, const char *humdrumData)
    functionMapping.convertHumdrumToHumdrum = Module.cwrap('vrvToolkit_convertHumdrumToHumdrum', 'string', ['number', 'string']);

    // char *getLog(Toolkit *ic)
    functionMapping.getLog = Module.cwrap('vrvToolkit_getLog', 'string', ['number']);

    // char *getMEI(Toolkit *ic, const char *options)
    functionMapping.getMEI = Module.cwrap('vrvToolkit_getMEI', 'string', ['number', 'string']);

    // char *vrvToolkit_getNotatedIdForElement(Toolkit *tk, const char *xmlId);
    functionMapping.getNotatedIdForElement = Module.cwrap('vrvToolkit_getNotatedIdForElement', 'string', ['number', 'string']);

    // char *getOptions(Toolkit *ic, int defaultValues)
    functionMapping.getOptions = Module.cwrap('vrvToolkit_getOptions', 'string', ['number', 'number']);

    // int getPageCount(Toolkit *ic)
    functionMapping.getPageCount = Module.cwrap('vrvToolkit_getPageCount', 'number', ['number']);

    // int getPageWithElement(Toolkit *ic, const char *xmlId)
    functionMapping.getPageWithElement = Module.cwrap('vrvToolkit_getPageWithElement', 'number', ['number', 'string']);

    // double getTimeForElement(Toolkit *ic, const char *xmlId)
    functionMapping.getTimeForElement = Module.cwrap('vrvToolkit_getTimeForElement', 'number', ['number', 'string']);

    // char *getTimesForElement(Toolkit *ic, const char *xmlId)
    functionMapping.getTimesForElement = Module.cwrap('vrvToolkit_getTimesForElement', 'string', ['number', 'string']);

    // char *getMIDIValuesForElement(Toolkit *ic, const char *xmlId)
    functionMapping.getMIDIValuesForElement = Module.cwrap('vrvToolkit_getMIDIValuesForElement', 'string', ['number', 'string']);

    // char *getVersion(Toolkit *ic)
    functionMapping.getVersion = Module.cwrap('vrvToolkit_getVersion', 'string', ['number']);

    // bool loadData(Toolkit *ic, const char *data)
    functionMapping.loadData = Module.cwrap('vrvToolkit_loadData', 'number', ['number', 'string']);

    // bool loadZipDataBase64(Toolkit *ic, const char *data)
    functionMapping.loadZipDataBase64 = Module.cwrap('vrvToolkit_loadZipDataBase64', 'number', ['number', 'string']);

    // bool loadZipDataBuffer(Toolkit *ic, const unsigned char *data, int length)
    functionMapping.loadZipDataBuffer = Module.cwrap('vrvToolkit_loadZipDataBuffer', 'number', ['number', 'number', 'number']);

    // void redoLayout(Toolkit *ic)
    functionMapping.redoLayout = Module.cwrap('vrvToolkit_redoLayout', null, ['number', 'string']);

    // void redoPagePitchPosLayout(Toolkit *ic)
    functionMapping.redoPagePitchPosLayout = Module.cwrap('vrvToolkit_redoPagePitchPosLayout', null, ['number']);

    // char *renderData(Toolkit *ic, const char *data, const char *options)
    functionMapping.renderData = Module.cwrap('vrvToolkit_renderData', 'string', ['number', 'string', 'string']);

    // char *renderToMidi(Toolkit *ic, const char *rendering_options)
    functionMapping.renderToMIDI = Module.cwrap('vrvToolkit_renderToMIDI', 'string', ['number', 'string']);

    // char *renderToPAE(Toolkit *ic)
    functionMapping.renderToPAE = Module.cwrap('vrvToolkit_renderToPAE', 'string');

    // char *renderToSvg(Toolkit *ic, int pageNo, const char *rendering_options)
    functionMapping.renderToSVG = Module.cwrap('vrvToolkit_renderToSVG', 'string', ['number', 'number', 'string']);

    // char *renderToTimemap(Toolkit *ic)
    functionMapping.renderToTimemap = Module.cwrap('vrvToolkit_renderToTimemap', 'string', ['number', 'string']);

    // void resetXmlIdSeed(Toolkit *ic, int seed) 
    functionMapping.resetXmlIdSeed = Module.cwrap('vrvToolkit_resetXmlIdSeed', null, ['number', 'number']);

    // void setOptions(Toolkit *ic, const char *options) 
    functionMapping.setOptions = Module.cwrap('vrvToolkit_setOptions', null, ['number', 'string']);

    // char *validatePAE(Toolkit *ic, const char *options)
    functionMapping.validatePAE = Module.cwrap('vrvToolkit_validatePAE', 'string', ['number', 'string']);

    return functionMapping[method];
}
