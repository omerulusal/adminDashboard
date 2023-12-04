export const menu = [
    // SideBar elemanları
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg"
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg"
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg"
            },
            {
                id: 3,
                title: "Orders",
                url: "/",
                icon: "order.svg"
            },
            {
                id: 4,
                title: "Posts",
                url: "/",
                icon: "post2.svg"
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg"
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg"
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg"
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg"
            },
        ],
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/settings",
                icon: "setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg"
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg"
            },
        ],
    },
]

export const topDealUsers = [
    {
        "id": 1,
        "img": "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg",
        "username": "maggie",
        "email": "maggie21@example.com",
        "amount": "$2100"
    },
    {
        "id": 2,
        "img": "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg",
        "username": "elliot",
        "email": "elliotfra@example.com",
        "amount": "$2500"
    },
    {
        "id": 3,
        "img": "https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_960_720.jpg",
        "username": "lisa",
        "email": "lisa871@example.com",
        "amount": "$3300"
    },
    {
        "id": 4,
        "img": "https://cdn.pixabay.com/photo/2021/01/28/03/13/person-5956897_1280.jpg",
        "username": "jack",
        "email": "jackie@example.com",
        "amount": "$1400"
    },
    {
        "id": 5,
        "img": "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg",
        "username": "jane",
        "email": "jane115@example.com",
        "amount": "$1500"
    },
    {
        "id": 6,
        "img": "https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg",
        "username": "debrah",
        "email": "debrah380@example.com",
        "amount": "$5600"
    },
    {
        "id": 7,
        "img": "https://cdn.pixabay.com/photo/2015/08/05/04/02/people-875597_1280.jpg",
        "username": "johnny",
        "email": "johnny1@example.com",
        "amount": "$3700"
    },
]

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total users",
    number: "21.442",
    dataKey: "users",
    percentage: 35,
    chartData: [
        { name: "Sun", users: 300 },
        { name: "Mon", users: 200 },
        { name: "Tue", users: 400 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 500 },
        { name: "Fri", users: 900 },
        { name: "Sat", users: 350 },
    ],
};
export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total products",
    number: "421",
    dataKey: "products",
    percentage: 56,
    chartData: [
        { name: "Sun", products: 300 },
        { name: "Mon", products: 500 },
        { name: "Tue", products: 100 },
        { name: "Wed", products: 400 },
        { name: "Thu", products: 210 },
        { name: "Fri", products: 900 },
        { name: "Sat", products: 350 },
    ],
};
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$71.442",
    dataKey: "revenue",
    percentage: -17,
    chartData: [
        { name: "Sun", revenue: 300 },
        { name: "Mon", revenue: 200 },
        { name: "Tue", revenue: 400 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 500 },
        { name: "Fri", revenue: 900 },
        { name: "Sat", revenue: 350 },
    ],
};
export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "1.2",
    dataKey: "ratio",
    percentage: 26,
    chartData: [
        { name: "Sun", ratio: 300 },
        { name: "Mon", ratio: 200 },
        { name: "Tue", ratio: 400 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 500 },
        { name: "Fri", ratio: 900 },
        { name: "Sat", ratio: 350 },
    ],
};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: 4000 },
        { name: "Mon", profit: 3000 },
        { name: "Tue", profit: 3400 },
        { name: "Wed", profit: 7000 },
        { name: "Thu", profit: 2600 },
        { name: "Fri", profit: 1800 },
        { name: "Sat", profit: 5000 },
    ],
};

export const barChartBoxVisits = {
    title: "Total Visits",
    color: "#FF8042",
    dataKey: "visits",
    chartData: [
        { name: "Sun", visits: 4000 },
        { name: "Mon", visits: 3000 },
        { name: "Tue", visits: 3400 },
        { name: "Wed", visits: 7000 },
        { name: "Thu", visits: 2600 },
        { name: "Fri", visits: 3800 },
        { name: "Sat", visits: 5000 },
    ],
};


export const userRows = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Snow',
        firstName: 'Jon',
        age: 35,
        status: true
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        lastName: 'Xavier',
        firstName: 'Cersei',
        age: 42,
        status: false
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Caleb',
        firstName: 'Harrison',
        age: 45,
        status: false
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Stark',
        firstName: 'Arya',
        age: 16,
        status: true
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        age: 23,
        status: true
    },
    {
        id: 6,
        img: "https:images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: 'Melisandre',
        firstName: "Clara",
        age: 150,
        status: true
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/211816/pexels-photo-211816.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Clifford',
        firstName: 'Ferrara',
        age: 44,
        status: true
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Frances',
        firstName: 'Rossini',
        age: 36,
        status: true
    },
    {
        id: 9,
        img: "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Roxie',
        firstName: 'Harvey',
        age: 65,
        status: true
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/2423535/pexels-photo-2423535.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Bennett',
        firstName: 'Olivia',
        age: 41,
        status: true
    },
    {
        id: 11,
        img: "https://images.pexels.com/photos/1579631/pexels-photo-1579631.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Parker',
        firstName: 'Ethan',
        age: 31,
        status: true
    },
    {
        id: 12,
        img: "https://images.pexels.com/photos/13838319/pexels-photo-13838319.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Miller',
        firstName: 'Sophia',
        age: 25,
        status: true
    },
    {
        id: 13,
        img: "https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Foster',
        firstName: 'Thompson',
        age: 25,
        status: true
    },
    {
        id: 14,
        img: "https://images.pexels.com/photos/3292558/pexels-photo-3292558.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Murphy',
        firstName: 'Ava Martinez',
        age: 34,
        status: true
    },
    {
        id: 15,
        img: "https://images.pexels.com/photos/17630916/pexels-photo-17630916/free-photo-of-gun-batimi-adam-siluet-gol.jpeg?auto=compress&cs=tinysrgb&w=600",
        lastName: 'Carter',
        firstName: 'Reynolds',
        age: 53,
        status: true
    },
];


export const products = [
    {
        id: 1,
        img: "https://s.zst.com.br/cms-assets/2020/11/galaxy-a21s-2.jpg",
        title: "Samsung Galaxy S21",
        color: "Beyaz",
        producer: "Samsung",
        price: "$899.99",
        createdAt: "2022-11-01",
        inStock: true,
    },
    {
        id: 2,
        img: "https://www.karekod.org/blog/wp-content/uploads/2022/06/iphone-13-max-1024x683.jpeg",
        title: "Apple iPhone 13 Pro",
        color: "Gri",
        producer: "Apple",
        price: "$999.99",
        createdAt: "2022-09-15",
        inStock: true,
    },
    {
        id: 3,
        img: "https://www.donanimhaber.com/cache-v2/?t=20201212123435&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/127787/src/xiaomi-mi-11-in-tasarimi-netlesti-iste-amiral-gemisinin-yeni-fotograflari127787_0.jpg",
        title: "Xiaomi Mi 11",
        color: "Mavi",
        producer: "Xiaomi",
        price: "$799.99",
        createdAt: "2022-12-25",
        inStock: true,
    },
    {
        id: 4,
        img: "https://avatars.mds.yandex.net/i?id=ab08d8a0578b9e94f9b881f646de1a808a46b676-5220969-images-thumbs&n=13",
        title: "Sony WH-1000XM4",
        color: "Siyah",
        producer: "Sony",
        price: "$349.99",
        createdAt: "2022-06-10",
        inStock: true,
    },
    {
        id: 5,
        img: "https://ae01.alicdn.com/kf/S1e9163e422c148a3a919561a4aff444bV/Logitech-G-Pro-X-USB-Wired-Gaming-Headset-Blue-VOICE-7-1-Channel-Surround-Sound-For.jpg",
        title: "Logitech G Pro X",
        color: "Siyah",
        producer: "Logitech",
        price: "$129.99",
        createdAt: "2022-08-20",
        inStock: true,
    },
    {
        id: 6,
        img: "https://avatars.mds.yandex.net/i?id=895c8e61c0029cdc06e3ea6a6b4a17a540bd6134-10122207-images-thumbs&n=13",
        title: "LG OLED65C1PUB",
        color: "Siyah",
        producer: "LG",
        price: "$2,499.99",
        createdAt: "2022-10-05",
        inStock: true,
    },
    {
        id: 7,
        img: "https://gizchina.it/wp-content/uploads/2021/07/samsung-galaxy-watch-4-classic-ufficiali-caratteristiche-prezzo-uscita-04-1200x675.jpg",
        title: "Samsung Galaxy Watch 4",
        color: "Gümüş",
        producer: "Samsung",
        price: "$249.99",
        createdAt: "2022-11-15",
        inStock: true,
    },
    {
        id: 8,
        img: "https://www.ixbt.com/img/r30/00/02/25/30/IMG3355.jpg",
        title: "Apple MacBook Pro",
        color: "Gri",
        producer: "Apple",
        price: "$1,299.99",
        createdAt: "2022-12-01",
        inStock: true,
    },
    {
        id: 9,
        img: "https://media.sketchfab.com/models/15796703e3d04a938b9edf9e21f7ca84/thumbnails/a046f8bfdc0840bd8a5912ceedc58920/e3e4ad473333495ea854e760faca6de4.jpeg",
        title: "Sony PlayStation 5",
        color: "Beyaz",
        producer: "Sony",
        price: "$499.99",
        createdAt: "2022-07-20",
        inStock: true,
    },
    {
        id: 10,
        img: "https://avatars.mds.yandex.net/i?id=657f8f8ec052d491e5e57086ff60ee0ba58d299e-11037629-images-thumbs&n=13",
        title: "Xbox Series X",
        color: "Siyah",
        producer: "Microsoft",
        price: "$499.99",
        createdAt: "2022-09-30",
        inStock: true,
    },
    {
        id: 11,
        img: "https://sakhtafzarmag.com/wp-content/uploads/2020/12/Samsung-Galaxy-Buds-Pro-leak-2.jpg",
        title: "Samsung Galaxy Buds Pro",
        color: "Mor",
        producer: "Samsung",
        price: "$199.99",
        createdAt: "2022-08-10",
        inStock: true,
    },
    {
        id: 12,
        img: "https://assets.entrepreneur.com/slideshow/20191101185159-APM-AirPodsPro1.jpeg",
        title: "Apple AirPods Pro",
        color: "Beyaz",
        producer: "Apple",
        price: "$249.99",
        createdAt: "2022-06-25",
        inStock: true,
    },
    {
        id: 13,
        img: "https://basic-tutorials.com/wp-content/uploads/2022/04/xps-13-plus.jpg",
        title: "Dell XPS 13",
        color: "Gümüş",
        producer: "Dell",
        price: "$1,199.99",
        createdAt: "2022-11-20",
        inStock: true,
    },
    {
        id: 14,
        img: "https://avatars.mds.yandex.net/i?id=0a2eb51b7c9008dd291f523acf1343e2dd215370-8819379-images-thumbs&n=13",
        title: "Samsung Galaxy Tab S7",
        color: "Gümüş",
        producer: "Samsung",
        price: "$649.99",
        createdAt: "2022-10-15",
        inStock: true,
    },
    {
        id: 15,
        img: "https://techcrunch.com/wp-content/uploads/2019/10/Logitech-MX-Keys-MX-Master-3-10.jpg",
        title: "Logitech MX Master 3",
        color: "Siyah",
        producer: "Logitech",
        price: "$99.99",
        createdAt: "2022-12-05",
        inStock: true,
    }
];

export const singleUser = {
    id: 1,
    title: "Omer",
    img: "https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg",
    info: {
        username: "Omer1",
        fullname: "Omer Ulusal",
        email: "Omer0101@gmail.com",
        phone: "123 456 789",
        status: "verified",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                clicks: 1400,
            },
            {
                name: "Mon",
                visits: 5000,
                clicks: 3500,

            },
            {
                name: "Tue",
                visits: 5000,
                clicks: 3000,
            },
            {
                name: "Wed",
                visits: 5200,
                clicks: 1400,
            },
            {
                name: "Thu",
                visits: 4000,
                clicks: 3000,
            },
            {
                name: "Fri",
                visits: 1300,
                clicks: 1000,
            },
            {
                name: "Sat",
                visits: 2400,
                clicks: 2000,
            },
        ]
    },
    activities:[
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 week ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"2 week ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"3 week ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 month ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 month ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 year ago",
        }
    ]
}

export const singleProduct = {
    id: 1,
    title: "Macbook",
    img: "https://i.dr.com.tr/cache/500x400-0/originals/0002000635001-1.jpg",
    info: {
        product_Id: "AyFGQ7",
        color: "White",
        price: "$1400",
        producer: "Apple",
        export: "USA",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                orders: 1400,
            },
            {
                name: "Mon",
                visits: 5000,
                orders: 3500,

            },
            {
                name: "Tue",
                visits: 5000,
                orders: 3000,
            },
            {
                name: "Wed",
                visits: 5200,
                orders: 1400,
            },
            {
                name: "Thu",
                visits: 4000,
                orders: 3000,
            },
            {
                name: "Fri",
                visits: 1300,
                orders: 1000,
            },
            {
                name: "Sat",
                visits: 2400,
                orders: 2000,
            },
        ],
    },
    activities:[
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 week ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"2 week ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"3 week ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 month ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 month ago",
        },
        {
            text:"Omer Ulusal purchased Macbook",
            time:"1 year ago",
        }
    ]
}