import { Game } from "./Game";

export class JogoDesktop extends Game {

    private _requisitosMinimos: { so: string; espaco: string; ram: number };

    constructor(nome: string, preco: number, sistemaOperacional: string, requisitosMinimos: { so: string; espaco: string; ram: number }) {
        super(nome, preco, sistemaOperacional);
        this._requisitosMinimos = requisitosMinimos;
    }

    public get requisitosMinimos(): { so: string; espaco: string; ram: number } {
        return this._requisitosMinimos;
    }
    
    public set requisitosMinimos(requisitosMinimos: { so: string; espaco: string; ram: number }) {
        this._requisitosMinimos = requisitosMinimos;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Sistema Operacional: " + this._requisitosMinimos.so);
        console.log("CPU: " + this._requisitosMinimos.espaco + " GB");
        console.log("RAM: " + this._requisitosMinimos.ram + " GB");
        console.log("*****************************************************\n");
    }
}