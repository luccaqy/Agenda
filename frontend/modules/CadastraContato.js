import validator from 'validator';
import FormErros from './FormErrors';

export default class CadastraContato {
    constructor(formCadastro) {
        this.form = document.querySelector(formCadastro);
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
        const mostraErros = new FormErros();
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if(!nomeInput.value) {
            mostraErros.showError(nomeInput, 'O campo não pode ficar vazio.');
            error = true;
        } else {
            mostraErros.clearFieldError(nomeInput);
        }

        if(!sobrenomeInput.value) {
            mostraErros.showError(sobrenomeInput, 'O campo não pode ficar vazio.');
            error = true;
        } else {
            mostraErros.clearFieldError(sobrenomeInput);
        }

        if(!validator.isEmail(emailInput.value)) {
            mostraErros.showError(emailInput, 'E-mail inválido.');
            error = true;
        } else {
            mostraErros.clearFieldError(emailInput);
        }

        if(/[a-zA-Z]/.test(telefoneInput.value)) {
            mostraErros.showError(telefoneInput, 'O campo deve conter apenas números.');
            error = true;
        } else if (!telefoneInput.value) {
            mostraErros.showError(telefoneInput, 'O campo não pode ficar vazio.');
        } else {
            mostraErros.clearFieldError(telefoneInput);
        }

        if(!error) el.submit();
    }
}