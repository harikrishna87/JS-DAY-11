let a = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];

for (i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
}

let b = "harikrishna";

const c = b.split("").reverse().join("");

console.log(c);

let b1 = "indupriya";

const c1 = b1.split("").reverse().join("");

console.log(c1);

let d = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];

for (let keys of d) {
    if (typeof keys === 'object' && !Array.isArray(keys) && keys.hasOwnProperty('age')) {
        console.log(keys.age);
    }
}