function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaCliques();
        this.capturaTeclas();

    }
    this.capturaTeclas = () => {
        document.addEventListener('keydown', e => {
            if (e.which === 13) {
                this.realizarConta();

            } 
                
            



        });
    }
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
            }
            if (el.classList.contains('btn-del')) {
                this.del();
            }
            if (el.classList.contains('btn-eq')) {
                this.realizarConta();
            }
            if (el.classList.contains('btn-clear')) {
                this.clear();
            }

        });
    }
    this.clear = () => {
        this.display.value = '';
    }
    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    this.realizarConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta invalida');
            }
            this.display.value = conta;

        } catch (e) {
            alert("Erro! Digite uma expressão válida");
            return;
        }
    }
    this.addNumDisplay = el => {
        this.display.value += el.innerText;

    }



}
const criaCalculadora = new Calculadora();
criaCalculadora.inicia();
