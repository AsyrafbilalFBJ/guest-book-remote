import { importShared } from './__federation_fn_import-Dn22YDBF.js';
import store from './__federation_expose_Store-B1tcZE6m.js';
import Header from './__federation_expose_Header-qnEV3y0M.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import './__federation_expose_Axios-Bdzr2k_D.js';

const remotesMap = {
'host_app':{url:'https://asyrafbilalfbj.github.io/guest-book-host/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'vue':{'undefined':{get:()=>get(new URL('__federation_shared_vue-x28ksfzk.js', import.meta.url).href, remoteFrom), loaded:1}},'vuex':{'undefined':{get:()=>get(new URL('__federation_shared_vuex-CZqUMuIH.js', import.meta.url).href, remoteFrom), loaded:1}},'axios':{'undefined':{get:()=>get(new URL('__federation_shared_axios-CfVooqbP.js', import.meta.url).href, remoteFrom), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const _sfc_main = {
  components: {
    Header
  }
};

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = _resolveComponent("Header");
  const _component_RouterView = _resolveComponent("RouterView");

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_Header),
    _createElementVNode("div", null, [
      _createVNode(_component_RouterView)
    ])
  ], 64))
}
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

const {createApp} = await importShared('vue');
const __federation_var_host_approuter = await __federation_method_getRemote("host_app" , "./router");
 let router = __federation_method_unwrapDefault(__federation_var_host_approuter); 

createApp(App).use(router).use(store).mount('#app');
