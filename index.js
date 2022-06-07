let cats = ['Milo', 'Otis', 'Garfield'];

let destructivelyAppendCat = (name) => {
    return cats.push(name);
}

let destructivelyPrependCat = (name) => {
    return cats.unshift(name);
}

let destructivelyRemoveLastCat = (name) => {
    cats.pop();
    return cats;
}

let destructivelyRemoveFirstCat = (name) => {
    return cats.shift();
}

let appendCat = (name) => {
    let newCats = [...cats, name];
    return newCats
}

let prependCat = (name) => {
    let newCats = [name, ...cats];
    return newCats
}

let removeLastCat = (name) => {
    let newCats = cats.slice(0, cats.length-1);
    return newCats
}

let removeFirstCat = (name) => {
    let newCats = cats.slice(1, cats.length);
    return newCats
}