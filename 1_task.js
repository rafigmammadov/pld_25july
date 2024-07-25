const array = [
    {name: 'Laptop', price: 1000, category: 'Electronics' },
    {name: 'Shirt', price: 50, category: 'Clothing' },
    {name: 'Phone', price:500, category: 'Electronics' }
];

const filtered_array = array.filter((item) => item.category == 'Electronics');
console.log(filtered_array);

const mapped_array = filtered_array.map((item) => item.price);
console.log(mapped_array);

const reduced_array = mapped_array.reduce((accumulator, sum) => sum += accumulator);
console.log(reduced_array);
