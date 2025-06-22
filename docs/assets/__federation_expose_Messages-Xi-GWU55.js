import { importShared } from './__federation_fn_import-Dn22YDBF.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const axios = await importShared('axios');


const _sfc_main = {
    data() {
        return {
            messages: {}
        }
    },
    async mounted() {
        try {
            if (this.$store.state.accessToken) {
                const response = await axios.get("/comments");
                this.messages = response.data;
                console.log(response.data);
            }
            console.log('Fetching data successful!');
            } 
        catch (error) {
            console.error('Failed fetching data:', error);
        }
    }
};

const {renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode} = await importShared('vue');


const _hoisted_1 = { class: "card bg-base-100 w-10/12 shadow-xl my-2" };
const _hoisted_2 = { class: "card-body" };
const _hoisted_3 = { class: "card-title" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($data.messages.comments, (message) => {
    return (_openBlock(), _createElementBlock("div", _hoisted_1, [
      _createElementVNode("div", _hoisted_2, [
        _createElementVNode("h2", _hoisted_3, _toDisplayString(message.user.fullName), 1),
        _createElementVNode("p", null, _toDisplayString(message.body), 1)
      ])
    ]))
  }), 256))
}
const Messages = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Messages as default };
