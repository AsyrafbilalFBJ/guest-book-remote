const currentImports = {};
      const exportSet = new Set(['Module', '__esModule', 'default', '_export_sfc']);
      let moduleMap = {
"./Button":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './Button');
      return __federation_import('./__federation_expose_Button-CyD_nSLS.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./Login":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './Login');
      return __federation_import('./__federation_expose_Login-Bzm7R5O0.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./Header":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './Header');
      return __federation_import('./__federation_expose_Header-qnEV3y0M.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./Messages":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './Messages');
      return __federation_import('./__federation_expose_Messages-Xi-GWU55.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./AddMessage":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './AddMessage');
      return __federation_import('./__federation_expose_AddMessage-C3n44Ktt.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./AddGuest":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './AddGuest');
      return __federation_import('./__federation_expose_AddGuest-BmTLq19_.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./store":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './store');
      return __federation_import('./__federation_expose_Store-B1tcZE6m.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./axios":()=>{
      dynamicLoadingCss(["style-Ctx2KGYS.css"], false, './axios');
      return __federation_import('./__federation_expose_Axios-Bdzr2k_D.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},};
    const seen = {};
    const dynamicLoadingCss = (cssFilePaths, dontAppendStylesToHead, exposeItemName) => {
      const metaUrl = import.meta.url;
      if (typeof metaUrl == 'undefined') {
        console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
        return
      }
      const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf('remoteEntry.js'));

      cssFilePaths.forEach(cssFilePath => {
        const href = curUrl + cssFilePath;
        if (href in seen) return
        seen[href] = true;
        if (dontAppendStylesToHead) {
          const key = 'css__remote-app__' + exposeItemName;
          if (window[key] == null) window[key] = [];
          window[key].push(href);
        } else {
          const element = document.head.appendChild(document.createElement('link'));
          element.href = href;
          element.rel = 'stylesheet';
        }
      });
    };
    async function __federation_import(name) {
        currentImports[name] ??= import(name);
        return currentImports[name]
    }    const get =(module) => {
      if(!moduleMap[module]) throw new Error('Can not find remote module ' + module)
      return moduleMap[module]();
    };
    const init =(shareScope) => {
      globalThis.__federation_shared__= globalThis.__federation_shared__|| {};
      Object.entries(shareScope).forEach(([key, value]) => {
        const versionKey = Object.keys(value)[0];
        const versionValue = Object.values(value)[0];
        const scope = versionValue.scope || 'default';
        globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
        const shared= globalThis.__federation_shared__[scope];
        (shared[key] = shared[key]||{})[versionKey] = versionValue;
      });
    };

export { dynamicLoadingCss, get, init };
