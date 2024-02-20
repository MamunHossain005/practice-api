const shop = {
    owner: 'Mamun',
    address: {
        street: 'kochkhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 46000,
    isOpen: true,
    isNew: false
};

// console.log(shop);
const jsonShop = JSON.stringify(shop);
console.log(jsonShop);
const shopObj = JSON.parse(jsonShop);
console.log(shopObj);