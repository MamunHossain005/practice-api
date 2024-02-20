//task-1: console log secondary school location of sofia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: [
                    {school_name: 'ABC primary school'},
                    {location: 'peters burg'}
                ]
            },
            {
                secondary: [
                    {school_name: 'ABC secondary school'},
                    {location: 'st. joseph'}
                ]
            }
        ]
    }
}

console.log(data.Sophia.study[1].secondary[0].school_name);

//task2: console log output Peterburg, Herry
let students = {
    2222: {
        name: 'Jack',
        section: 'C',
        class: 'IX',
        address: {
            'building no': 12,
            'street': "St. Jonson",
            'city': 'Peterburg',
            'country': 'UK'
        }
    },
    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            "building no": 85,
            "street": "DC road",
            "city": 'Kachukhet',
            "country": 'Bangladesh'
        }
    }
}

console.log(students['2222'].address['city']);
console.log(students['3333'].name);

//task3: access and then show habluder adda
//task4: show beginner
let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: 'habluder adda',
                category: 'XYZ',
                price: '20$', 
            },
            bookCategory: 'Basic'
        },
        {
            bookId: 1,
            bookDetails: {
                name: 'gobbluder adda',
                category: 'ABC',
                price: '40$', 
            },
            bookCategory: 'Beginner'   
        }
    ]
}

console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);