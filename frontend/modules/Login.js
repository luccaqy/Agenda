import validator from 'validator';
import FormErros from './FormErrors';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const clearInput = new FormErros();
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            clearInput.showError(emailInput, 'E-mail inválido.');
            error = true;
        } else {
            clearInput.clearFieldError(emailInput);
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            clearInput.showError(passwordInput, 'A senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        } else {
            clearInput.clearFieldError(passwordInput);
        }

        if(!error) el.submit();
    }
}