const myEmail = new Vue ({
    el: "#mySpace",
    data: {
        email: []
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                // questa costante mi va a prendere la proprietà dell'oggetto dell'API che mi interessa
                const risultato = result.data.response;
                console.log("prova", risultato);
                this.email.push(risultato);
            });
        }

    }

})