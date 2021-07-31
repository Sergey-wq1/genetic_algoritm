function create_child(copy) {
    let copy_one = [];
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            copy_one[i] = copy.slice(0, 2);
        } else if (i === 1) {
            copy_one[i] = copy.slice(2, 5);
        }
    }
    return copy_one;
}

export default create_child;