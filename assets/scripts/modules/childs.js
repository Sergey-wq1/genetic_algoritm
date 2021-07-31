import create_child from './create_child.js';

function get_child(general_code, k, key) {
    let c;
    for (let i = 0; i < 5; i++) {
        if (i == key) {
            c = create_child(general_code[k].bin);
        }
    }
    return c[key]

}
export default get_child;