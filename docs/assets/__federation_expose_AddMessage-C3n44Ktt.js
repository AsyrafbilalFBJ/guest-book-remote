import { importShared } from './__federation_fn_import-Dn22YDBF.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const axios = await importShared('axios');

const _sfc_main = {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        async handleAddMessage() {
            try {
                if (this.$store.state.accessToken) {
                    const response = await axios.post("/comments/add", {
                        body: this.message,
                        postId: 3,
                        userId: 5,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                    },
                    });
                    console.log(response);
                }
                console.log('Adding data successful!');
            } 
            catch (error) {
                console.error('Failed adding data:', error);
            }
        }
    }
};

const {createElementVNode:_createElementVNode,vModelText:_vModelText,withDirectives:_withDirectives,withModifiers:_withModifiers,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "card bg-base-100 w-10/12 shadow-xl my-2" };
const _hoisted_2 = { class: "card-body" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[3] || (_cache[3] = _createElementVNode("h2", { class: "card-title text-center" }, "Add Message", -1)),
      _createElementVNode("form", {
        onSubmit: _cache[1] || (_cache[1] = _withModifiers((...args) => ($options.handleAddMessage && $options.handleAddMessage(...args)), ["prevent"]))
      }, [
        _withDirectives(_createElementVNode("textarea", {
          class: "textarea textarea-bordered w-full",
          placeholder: "Message",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.message) = $event))
        }, null, 512), [
          [_vModelText, $data.message]
        ]),
        _cache[2] || (_cache[2] = _createElementVNode("div", { class: "card-actions justify-end" }, [
          _createElementVNode("button", {
            type: "submit",
            class: "btn btn-accent w-full"
          }, "Add")
        ], -1))
      ], 32)
    ])
  ]))
}
const AddMessage = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { AddMessage as default };
