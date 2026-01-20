export default class FormErros {
    showError(input, message) {
        let next = input.nextElementSibling;
        while (next && next.classList.contains('alert')) {
            const toRemove = next;
            next = next.nextElementSibling;
            toRemove.remove();
            if(input) toRemove.remove();
        }

        const div = document.createElement('div');
        div.classList.add('alert', 'alert-danger', 'mt-2', 'p-2');
        div.innerText = message;

        input.after(div);
    }

    clearFieldError(input) {
        let next = input.nextElementSibling;
        while (next && next.classList.contains('alert')) {
            const toRemove = next;
            next = next.nextElementSibling;
            toRemove.remove();
        }
        
    }
}