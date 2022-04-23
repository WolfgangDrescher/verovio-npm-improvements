import Module from './wasm-module.mjs';

export { emscriptenProxy };

const emscriptenProxy = {};

// Constructor and destructor
// Toolkit *constructor()
emscriptenProxy.constructor = Module.cwrap( 'vrvToolkit_constructor', 'number', [] );

// void destructor(Toolkit *ic)
emscriptenProxy.destructor = Module.cwrap( 'vrvToolkit_destructor', null, ['number'] );

// bool edit(Toolkit *ic, const char *editorAction) 
emscriptenProxy.edit = Module.cwrap( 'vrvToolkit_edit', 'number', ['number', 'string'] );

// char *editInfo(Toolkit *ic)
emscriptenProxy.editInfo = Module.cwrap( 'vrvToolkit_editInfo', 'string', ['number'] );

// char *getAvailableOptions(Toolkit *ic)
emscriptenProxy.getAvailableOptions = Module.cwrap( 'vrvToolkit_getAvailableOptions', 'string', ['number'] );

// char *getDescriptiveFeatures(Toolkit *ic, const char *options)
emscriptenProxy.getDescriptiveFeatures = Module.cwrap( 'vrvToolkit_getDescriptiveFeatures', 'string', ['number', 'string'] );

// char *getElementAttr(Toolkit *ic, const char *xmlId)
emscriptenProxy.getElementAttr = Module.cwrap( 'vrvToolkit_getElementAttr', 'string', ['number', 'string'] );

// char *getElementsAtTime(Toolkit *ic, int time)
emscriptenProxy.getElementsAtTime = Module.cwrap( 'vrvToolkit_getElementsAtTime', 'string', ['number', 'number'] );

// char *vrvToolkit_getExpansionIdsForElement(Toolkit *tk, const char *xmlId);
emscriptenProxy.getExpansionIdsForElement = Module.cwrap( 'vrvToolkit_getExpansionIdsForElement', 'string', ['number', 'string'] );

// char *getHumdrum(Toolkit *ic)
emscriptenProxy.getHumdrum = Module.cwrap( 'vrvToolkit_getHumdrum', 'string' );

// char *convertMEIToHumdrum(Toolkit *ic, const char *meiData)
emscriptenProxy.convertMEIToHumdrum = Module.cwrap( 'vrvToolkit_convertMEIToHumdrum', 'string', ['number', 'string'] );

// char *convertHumdrumToHumdrum(Toolkit *ic, const char *humdrumData)
emscriptenProxy.convertHumdrumToHumdrum = Module.cwrap( 'vrvToolkit_convertHumdrumToHumdrum', 'string', ['number', 'string'] );

// char *getLog(Toolkit *ic)
emscriptenProxy.getLog = Module.cwrap( 'vrvToolkit_getLog', 'string', ['number'] );

// char *getMEI(Toolkit *ic, const char *options)
emscriptenProxy.getMEI = Module.cwrap( 'vrvToolkit_getMEI', 'string', ['number', 'string'] );

// char *vrvToolkit_getNotatedIdForElement(Toolkit *tk, const char *xmlId);
emscriptenProxy.getNotatedIdForElement = Module.cwrap( 'vrvToolkit_getNotatedIdForElement', 'string', ['number', 'string'] );

// char *getOptions(Toolkit *ic, int defaultValues)
emscriptenProxy.getOptions = Module.cwrap( 'vrvToolkit_getOptions', 'string', ['number', 'number'] );

// int getPageCount(Toolkit *ic)
emscriptenProxy.getPageCount = Module.cwrap( 'vrvToolkit_getPageCount', 'number', ['number'] );

// int getPageWithElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getPageWithElement = Module.cwrap( 'vrvToolkit_getPageWithElement', 'number', ['number', 'string'] );

// double getTimeForElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getTimeForElement = Module.cwrap( 'vrvToolkit_getTimeForElement', 'number', ['number', 'string'] );

// char *getTimesForElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getTimesForElement = Module.cwrap( 'vrvToolkit_getTimesForElement', 'string', ['number', 'string'] );

// char *getMIDIValuesForElement(Toolkit *ic, const char *xmlId)
emscriptenProxy.getMIDIValuesForElement = Module.cwrap( 'vrvToolkit_getMIDIValuesForElement', 'string', ['number', 'string'] );

// char *getVersion(Toolkit *ic)
emscriptenProxy.getVersion = Module.cwrap( 'vrvToolkit_getVersion', 'string', ['number'] );

// bool loadData(Toolkit *ic, const char *data)
emscriptenProxy.loadData = Module.cwrap( 'vrvToolkit_loadData', 'number', ['number', 'string'] );

// bool loadZipDataBase64(Toolkit *ic, const char *data)
emscriptenProxy.loadZipDataBase64 = Module.cwrap( 'vrvToolkit_loadZipDataBase64', 'number', ['number', 'string'] );

// bool loadZipDataBuffer(Toolkit *ic, const unsigned char *data, int length)
emscriptenProxy.loadZipDataBuffer = Module.cwrap( 'vrvToolkit_loadZipDataBuffer', 'number', ['number', 'number', 'number'] );

// void redoLayout(Toolkit *ic)
emscriptenProxy.redoLayout = Module.cwrap( 'vrvToolkit_redoLayout', null, ['number', 'string'] );

// void redoPagePitchPosLayout(Toolkit *ic)
emscriptenProxy.redoPagePitchPosLayout = Module.cwrap( 'vrvToolkit_redoPagePitchPosLayout', null, ['number'] );

// char *renderData(Toolkit *ic, const char *data, const char *options)
emscriptenProxy.renderData = Module.cwrap( 'vrvToolkit_renderData', 'string', ['number', 'string', 'string'] );

// char *renderToMidi(Toolkit *ic, const char *rendering_options)
emscriptenProxy.renderToMIDI = Module.cwrap( 'vrvToolkit_renderToMIDI', 'string', ['number', 'string'] );

// char *renderToPAE(Toolkit *ic)
emscriptenProxy.renderToPAE = Module.cwrap( 'vrvToolkit_renderToPAE', 'string' );

// char *renderToSvg(Toolkit *ic, int pageNo, const char *rendering_options)
emscriptenProxy.renderToSVG = Module.cwrap( 'vrvToolkit_renderToSVG', 'string', ['number', 'number', 'string'] );

// char *renderToTimemap(Toolkit *ic)
emscriptenProxy.renderToTimemap = Module.cwrap( 'vrvToolkit_renderToTimemap', 'string', ['number', 'string'] );

// void resetXmlIdSeed(Toolkit *ic, int seed) 
emscriptenProxy.resetXmlIdSeed = Module.cwrap( 'vrvToolkit_resetXmlIdSeed', null, ['number', 'number'] );

// void setOptions(Toolkit *ic, const char *options) 
emscriptenProxy.setOptions = Module.cwrap( 'vrvToolkit_setOptions', null, ['number', 'string'] );

// char *validatePAE(Toolkit *ic, const char *options)
emscriptenProxy.validatePAE = Module.cwrap( 'vrvToolkit_validatePAE', 'string', ['number', 'string'] );
