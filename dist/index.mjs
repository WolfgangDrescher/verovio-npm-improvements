var s=e=>(console.log(e),new Proxy({},{get:(r,t)=>(console.log(t),(...n)=>p(e,t)(n))}));function p(e,r){let t={};return t.constructor=e.cwrap("vrvToolkit_constructor","number",[]),t.destructor=e.cwrap("vrvToolkit_destructor",null,["number"]),t.edit=e.cwrap("vrvToolkit_edit","number",["number","string"]),t.editInfo=e.cwrap("vrvToolkit_editInfo","string",["number"]),t.getAvailableOptions=e.cwrap("vrvToolkit_getAvailableOptions","string",["number"]),t.getDescriptiveFeatures=e.cwrap("vrvToolkit_getDescriptiveFeatures","string",["number","string"]),t.getElementAttr=e.cwrap("vrvToolkit_getElementAttr","string",["number","string"]),t.getElementsAtTime=e.cwrap("vrvToolkit_getElementsAtTime","string",["number","number"]),t.getExpansionIdsForElement=e.cwrap("vrvToolkit_getExpansionIdsForElement","string",["number","string"]),t.getHumdrum=e.cwrap("vrvToolkit_getHumdrum","string"),t.convertMEIToHumdrum=e.cwrap("vrvToolkit_convertMEIToHumdrum","string",["number","string"]),t.convertHumdrumToHumdrum=e.cwrap("vrvToolkit_convertHumdrumToHumdrum","string",["number","string"]),t.getLog=e.cwrap("vrvToolkit_getLog","string",["number"]),t.getMEI=e.cwrap("vrvToolkit_getMEI","string",["number","string"]),t.getNotatedIdForElement=e.cwrap("vrvToolkit_getNotatedIdForElement","string",["number","string"]),t.getOptions=e.cwrap("vrvToolkit_getOptions","string",["number","number"]),t.getPageCount=e.cwrap("vrvToolkit_getPageCount","number",["number"]),t.getPageWithElement=e.cwrap("vrvToolkit_getPageWithElement","number",["number","string"]),t.getTimeForElement=e.cwrap("vrvToolkit_getTimeForElement","number",["number","string"]),t.getTimesForElement=e.cwrap("vrvToolkit_getTimesForElement","string",["number","string"]),t.getMIDIValuesForElement=e.cwrap("vrvToolkit_getMIDIValuesForElement","string",["number","string"]),t.getVersion=e.cwrap("vrvToolkit_getVersion","string",["number"]),t.loadData=e.cwrap("vrvToolkit_loadData","number",["number","string"]),t.loadZipDataBase64=e.cwrap("vrvToolkit_loadZipDataBase64","number",["number","string"]),t.loadZipDataBuffer=e.cwrap("vrvToolkit_loadZipDataBuffer","number",["number","number","number"]),t.redoLayout=e.cwrap("vrvToolkit_redoLayout",null,["number","string"]),t.redoPagePitchPosLayout=e.cwrap("vrvToolkit_redoPagePitchPosLayout",null,["number"]),t.renderData=e.cwrap("vrvToolkit_renderData","string",["number","string","string"]),t.renderToMIDI=e.cwrap("vrvToolkit_renderToMIDI","string",["number","string"]),t.renderToPAE=e.cwrap("vrvToolkit_renderToPAE","string"),t.renderToSVG=e.cwrap("vrvToolkit_renderToSVG","string",["number","number","string"]),t.renderToTimemap=e.cwrap("vrvToolkit_renderToTimemap","string",["number","string"]),t.resetXmlIdSeed=e.cwrap("vrvToolkit_resetXmlIdSeed",null,["number","number"]),t.setOptions=e.cwrap("vrvToolkit_setOptions",null,["number","string"]),t.validatePAE=e.cwrap("vrvToolkit_validatePAE","string",["number","string"]),t[r]}var i=class{constructor(r){this.VerovioModule=r,this.proxy=s(r),this.ptr=this.proxy.constructor(),console.debug("Creating toolkit instance"),i.instances.push(this.ptr)}destroy(){i.instances.splice(i.instances.indexOf(this.ptr),1),console.debug("Deleting toolkit instance"),this.proxy.destructor(this.ptr)}edit(r){return this.proxy.edit(this.ptr,JSON.stringify(r))}editInfo(){return JSON.parse(this.proxy.editInfo(this.ptr))}getAvailableOptions(){return JSON.parse(this.proxy.getAvailableOptions(this.ptr))}getDescriptiveFeatures(r){return JSON.parse(this.proxy.getDescriptiveFeatures(this.ptr,JSON.stringify(r)))}getElementAttr(r){return JSON.parse(this.proxy.getElementAttr(this.ptr,r))}getElementsAtTime(r){return JSON.parse(this.proxy.getElementsAtTime(this.ptr,r))}getExpansionIdsForElement(r){return JSON.parse(this.proxy.getExpansionIdsForElement(this.ptr,r))}getHumdrum(){return this.proxy.getHumdrum(this.ptr)}convertHumdrumToHumdrum(r){return this.proxy.convertHumdrumToHumdrum(this.ptr,r)}convertMEIToHumdrum(r){return this.proxy.convertMEIToHumdrum(this.ptr,r)}getLog(){return this.proxy.getLog(this.ptr)}getMEI(r){return this.proxy.getMEI(this.ptr,JSON.stringify(r))}getMIDIValuesForElement(r){return JSON.parse(this.proxy.getMIDIValuesForElement(this.ptr,r))}getNotatedIdForElement(r){return this.proxy.getNotatedIdForElement(this.ptr,r)}getOptions(r){return JSON.parse(this.proxy.getOptions(this.ptr,r))}getPageCount(){return this.proxy.getPageCount(this.ptr)}getPageWithElement(r){return this.proxy.getPageWithElement(this.ptr,r)}getTimeForElement(r){return this.proxy.getTimeForElement(this.ptr,r)}getTimesForElement(r){return JSON.parse(this.proxy.getTimesForElement(this.ptr,r))}getVersion(){return this.proxy.getVersion(this.ptr)}loadData(r){return this.proxy.loadData(this.ptr,r)}loadZipDataBase64(r){return this.proxy.loadZipDataBase64(this.ptr,r)}loadZipDataBuffer(r){if(!(r instanceof ArrayBuffer))return console.error("Parameter for loadZipDataBuffer has to be of type ArrayBuffer"),!1;var t=new Uint8Array(r),n=t.length*t.BYTES_PER_ELEMENT,o=this.VerovioModule._malloc(n);this.VerovioModule.HEAPU8.set(t,o);var a=this.proxy.loadZipDataBuffer(this.ptr,o,n);return this.VerovioModule._free(o),a}redoLayout(r={}){this.proxy.redoLayout(this.ptr,JSON.stringify(r))}redoPagePitchPosLayout(){this.proxy.redoPagePitchPosLayout(this.ptr)}renderData(r,t){return this.proxy.renderData(this.ptr,r,JSON.stringify(t))}renderPage(r,t){return console.warn("Method renderPage is deprecated; use renderToSVG instead"),this.proxy.renderToSVG(this.ptr,r,JSON.stringify(t))}renderToMIDI(r){return this.proxy.renderToMIDI(this.ptr,JSON.stringify(r))}renderToMidi(r){return console.warn("Method renderToMidi is deprecated; use renderToMIDI instead"),this.proxy.renderToMIDI(this.ptr,JSON.stringify(r))}renderToPAE(){return this.proxy.renderToPAE(this.ptr)}renderToSVG(r,t){return this.proxy.renderToSVG(this.ptr,r,JSON.stringify(t))}renderToTimemap(r={}){return JSON.parse(this.proxy.renderToTimemap(this.ptr,JSON.stringify(r)))}resetXmlIdSeed(r){return this.proxy.resetXmlIdSeed(this.ptr,r)}setOptions(r){this.proxy.setOptions(this.ptr,JSON.stringify(r))}validatePAE(r){return r instanceof Object&&(r=JSON.stringify(r)),JSON.parse(this.proxy.validatePAE(this.ptr,r))}};i.instances=[];export{i as VerovioToolkit};