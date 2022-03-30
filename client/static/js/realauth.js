class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            self.fields.forEach((field) => {
                const input = document.querySelector()
            });
        })
    }
}

const form = document.querySelector('#login-form');
if(form){
    const fields = ['username','password'];
    const validator = new Login(form, fields);
}