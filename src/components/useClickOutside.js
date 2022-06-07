
/** 
 * 
 *@param {*} el_target_ref 
 * @param {*} callback_fn
 *@returns
*/

import { onBeforeMount, onMounted } from "vue";

export function UseClickOutside(el_target_ref, callback_fn) {
    if (!el_target_ref) return;

    let listener = (e) => {
        if (e.target == el_target_ref.value || e.componentPath().includes(el_target_ref.value)) {

            return
        }
        if (typeof callback_fn == 'function') {
            callback_fn();
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
    })
    onBeforeMount(() => {
        window.removeEventListener('click', listener)
    })
    return {
        listener
    }
}