import Module from './wasm-module.mjs';

export { emscriptenProxy };

const emscriptenProxy = {};

// Constructor and destructor
// Toolkit *constructor()
emscriptenProxy.constructor = async () => (await Module).cwrap('vrvToolkit_constructor', 'number', []);

// void destructor(Toolkit *ic)
emscriptenProxy.destructor = async () => (await Module).cwrap('vrvToolkit_destructor', null, ['number']);

// bool edit(Toolkit *ic, const char *editorAction) 
emscriptenProxy.edit = async () => (await Module).cwrap('vrvToolkit_edit', 'number', ['number', 'string']);

// char *editInfo(Toolkit *ic)
emscriptenProxy.editInfo = async () => (await Module).cwrap('vrvToolkit_editInfo', 'string', ['number']);

// char *getAvailableOptions(Toolkit *ic)
emscriptenProxy.getAvailableOptions = async () => (await Module).cwrap('vrvToolkit_getAvailableOptions', 'string', ['number']);

// char *getDescriptiveFeatures(Toolkit *ic, const char *options)
emscriptenProxy.getDescriptiveFeatures = async () => (await Module).cwrap('vrvToolkit_getDescriptiveFeatures', 'string', ['number', 'string']);

// char *getElementAttr(Toolkit *ic, const char *xmlId)
emscriptenProxy.getElementAttr = async () => (await Module).cwrap('vrvToolkit_getElementAttr', 'string', ['number', 'string']);

// char *getElementsAtTime(Toolkit *ic, int time)
emscriptenProxy.getElementsAtTime = async () => (await Module).cwrap('vrvToolkit_getElementsAtTime', 'string', ['number', 'number']);

// char *vrvToolkit_getExpansionIdsForElement(Toolkit *tk, const char *xmlId);
emscriptenProxy.getExpansionIdsForElement = async () => (await Module).cwrap('vrvToolkit_getExpansionIdsForElement', 'string', ['number', 'string']);

// char *getHumdrum(Toolkit *ic)
emscriptenProxy.getHumdrum = async () => (await Module).cwrap('vrvToolkit_getHumdrum', 'string');

// char *convertMEIToHumdrum(Toolkit *ic, const char *meiData)
emscriptenProxy.convertMEIToHumdrum = async () => (await Module).cwrap('vrvToolkit_convertMEIToHumdrum', 'string', ['number', 'string']);

// char *convertHumdrumToHumdrum(Toolkit *ic, const char *humdrumData)
emscriptenProxy.convertHumdrumToHumdrum = async () => (await Module).cwrap('vrvToolkit_convertHumdrumToHumdrum', 'string', ['number', 'string']);

// char *getLog(Toolkit *ic)
emscriptenProxy.getLog = async () => (await Module).cwrap('vrvToolkit_getLog', 'string', ['number']);

// char *getMEI(Toolkit *ic, const char *options)
emscriptenProxy.getMEI = async () => (await Module).cwrap('vrvToolkit_getMEI', 'string', ['number', 'string']);

// char *vrvToolkit_getNotatedIdForElement(Toolkit *tk, const char *xmlId);
emscriptenProxy.getNotatedIdForElement = async () => (await Module).cwrap('vrvToolkit_getNotatedIdForElement', 'string', ['number', 'string']);

// char *getOptions(Toolkit *ic, int defaultValues)
emscriptenProxy.getOptions = async () => (await Module).cwrap('vrvToolkit_getOptions', 'string', ['number', 'number']);

// int getPageCount(Toolkit *ic)
emscriptenProxy.getPageCount = async () => (await Module).cwrap('vrvToolkit_getPageCount', 'number', ['number']);

// int getPageWithElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getPageWithElement = async () => (await Module).cwrap('vrvToolkit_getPageWithElement', 'number', ['number', 'string']);

// double getTimeForElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getTimeForElement = async () => (await Module).cwrap('vrvToolkit_getTimeForElement', 'number', ['number', 'string']);

// char *getTimesForElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getTimesForElement = async () => (await Module).cwrap('vrvToolkit_getTimesForElement', 'string', ['number', 'string']);

// char *getMIDIValuesForElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getMIDIValuesForElement = async () => (await Module).cwrap('vrvToolkit_getMIDIValuesForElement', 'string', ['number', 'string']);

// char *getVersion(Toolkit *ic)
emscriptenProxy.getVersion = async () => (await Module).cwrap('vrvToolkit_getVersion', 'string', ['number']);

// bool loadData(Toolkit *ic, const char *data)
emscriptenProxy.loadData = async () => (await Module).cwrap('vrvToolkit_loadData', 'number', ['number', 'string']);

// bool loadZipDataBase64(Toolkit *ic, const char *data)
emscriptenProxy.loadZipDataBase64 = async () => (await Module).cwrap('vrvToolkit_loadZipDataBase64', 'number', ['number', 'string']);

// bool loadZipDataBuffer(Toolkit *ic, const unsigned char *data, int length)
emscriptenProxy.loadZipDataBuffer = async () => (await Module).cwrap('vrvToolkit_loadZipDataBuffer', 'number', ['number', 'number', 'number']);

// void redoLayout(Toolkit *ic)
emscriptenProxy.redoLayout = async () => (await Module).cwrap('vrvToolkit_redoLayout', null, ['number', 'string']);

// void redoPagePitchPosLayout(Toolkit *ic)
emscriptenProxy.redoPagePitchPosLayout = async () => (await Module).cwrap('vrvToolkit_redoPagePitchPosLayout', null, ['number']);

// char *renderData(Toolkit *ic, const char *data, const char *options)
emscriptenProxy.renderData = async () => (await Module).cwrap('vrvToolkit_renderData', 'string', ['number', 'string', 'string']);

// char *renderToMidi(Toolkit *ic, const char *rendering_options)
emscriptenProxy.renderToMIDI = async () => (await Module).cwrap('vrvToolkit_renderToMIDI', 'string', ['number', 'string']);

// char *renderToPAE(Toolkit *ic)
emscriptenProxy.renderToPAE = async () => (await Module).cwrap('vrvToolkit_renderToPAE', 'string');

// char *renderToSvg(Toolkit *ic, int pageNo, const char *rendering_options)
emscriptenProxy.renderToSVG = async () => (await Module).cwrap('vrvToolkit_renderToSVG', 'string', ['number', 'number', 'string']);

// char *renderToTimemap(Toolkit *ic)
emscriptenProxy.renderToTimemap = async () => (await Module).cwrap('vrvToolkit_renderToTimemap', 'string', ['number', 'string']);

// void resetXmlIdSeed(Toolkit *ic, int seed) 
emscriptenProxy.resetXmlIdSeed = async () => (await Module).cwrap('vrvToolkit_resetXmlIdSeed', null, ['number', 'number']);

// void setOptions(Toolkit *ic, const char *options) 
emscriptenProxy.setOptions = async () => (await Module).cwrap('vrvToolkit_setOptions', null, ['number', 'string']);

// char *validatePAE(Toolkit *ic, const char *options)
emscriptenProxy.validatePAE = async () => (await Module).cwrap('vrvToolkit_validatePAE', 'string', ['number', 'string']);
