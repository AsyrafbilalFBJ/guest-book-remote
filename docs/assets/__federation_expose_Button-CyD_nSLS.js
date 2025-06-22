import { importShared } from './__federation_fn_import-Dn22YDBF.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _sfc_main = {
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$store?.state?.count ?? 0
    }
  },
  methods: {
    increment() {
      this.$store?.commit('increment');
    }
  },
};


const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("h1", null, _toDisplayString($props.msg), 1),
    _createElementVNode("button", {
      class: "btn btn-neutral",
      type: "button",
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.increment && $options.increment(...args)))
    }, "count is " + _toDisplayString($options.count), 1)
  ], 64))
}
const Button = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Button as default };
