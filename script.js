// ______________________________________________________________//
// API / JSON
// ______________________________________________________________//
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
        filterProduct: function(product, filter) {
            if(product.category.startsWith(filter)){
                return product;
            }
            else { return; }
        }  
    }
});

const homePage = Vue.component('homepage', {
    data: function () {

    },

    template: '<div><div class="category_grid">'
            + '<figure class="gallery__item gallery__item--1">'
            + '<img src="img/category_women.jpg" class="category_item" alt="womens clothing"/>'
            + '</figure>'
            + '<figure class="gallery__item gallery__item--2">'
            + '<img src="img/category_men.jpg" class="category_item" alt="mens clothes" />'
            + '</figure>'
            + '<figure class="gallery__item gallery__item--3">'
            + '<img src="img/category_kids.jpg" class="category_item" alt="kids clothes" />'
            + '</figure>'
            + '</div></div>'

})
const womenClothing = Vue.component('womenclothing', {

        data: function () {
            return {
                filtered: filterProduct("women's clothing")
            }
        },

    template: ''
});
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
