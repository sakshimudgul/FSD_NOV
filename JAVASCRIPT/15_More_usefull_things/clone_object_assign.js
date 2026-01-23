// cloning using Object.Assign


const obj = {
    key1 : 'value1',
    key2 : 'value2',
}

// heap memory contains data


// case1:
// const obj2 = obj;
// console.log(obj2);
// satck pointing memory of previous

// case 2 :
// we can clone by
// const obj2 = {...obj};
// console.log(obj2);
// new memory allocated in heap

// case 3:
// other way of cloning 
// before spread operator this way :
const obj2 = Object.assign({}, obj);
obj.key3  = 'value3';

console.log(obj);
console.log(obj2);