new Vue({
    el : "#app",
    data : {
        title : "Merhaba ben Deniz",
        description: "Bu bir açıklamadır....."
    },
    methods : {
        changeTitle: function(event){
            this.description = event.target.value;
        }
    }
});