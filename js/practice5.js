const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
];

const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product.id));

const selectedProducts = products.filter(product => product.price > 50000);
console.log(selectedProducts);