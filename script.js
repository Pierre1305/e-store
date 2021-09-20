// ______________________________________________________________//
// API / JSON
// ______________________________________________________________//

/* async function getShopData(apiUrl) {
    axios.get(apiUrl)
        .then(response => {
            app.posts = response.data;
            console.log("Hämtar återigen!")
        })
} */

const app = new Vue({
    el: '#app',
    async created() { 
        await axios.get('https://fakestoreapi.com/products')
        .then(res => { app.products = res.data; console.log(res.data); });
    },
    data: {
        products: [],
        cart: [],
    },
    methods: {
        createProduct: function () {
            this.products.push({ 
                // title: this.prodName, price: '4.99' 
            })
        },       
    }
});

const categoryView = Vue.component('category', {
        data: function () {
            return {
                category: category
            }
        },
    template: ''
});

const appComponent = Vue.component('info', {
    data: function () {
        return {
            theShop: app.posts
        }
    },
    template: '<div><ol>'
        + '<li v-for="product in theShop">{{product.title}} ${{product.price}}</li></ol>'
        + '</div>'
});
/* async function GetApiData() {
    await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json));
} */


// ______________________________________________________________//
// PRODUCTS
// ______________________________________________________________//

// ______________________________________________________________//
// PRODUCTS DETAILED
// ______________________________________________________________//

// ______________________________________________________________//
// ADMIN
// ______________________________________________________________//

// ______________________________________________________________//
// CHECKOUT
// ______________________________________________________________//

// ______________________________________________________________//
// PAYMENT & SHIPPING
// ______________________________________________________________//

// ______________________________________________________________//
// SIDE NAVIGATION
// ______________________________________________________________//

function openNav() {
    document.getElementById('mySidenav').style.width = '175px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}
