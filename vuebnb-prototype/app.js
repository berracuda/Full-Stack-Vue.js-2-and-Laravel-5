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
        prices: sample.prices,
        contracted: true,
        textMore: "+ More",
        textLess: "- Less",
        modalOpen: false
    },
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    methods: {
        escapeKeyListener: function(evt){
            if (evt.keyCode === 27 && app.modalOpen) {
                app.modalOpen = false;
            }
        }
    },
    created: function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});