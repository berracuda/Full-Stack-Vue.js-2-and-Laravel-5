// var app = new Vue({
//     el: '#app',
//     data: {
//         title: 'My Apartment',
//         address: 'Jalan Harapan Jaya no.5, Pangkalan Jati, Cipinang Melayu, Makasar, Jakarta Timur',
//         about: 'Ini deskripsi apartment saya.'
//     }
// });

var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices
    }
});