import { Game } from "./Game";

export class JogoDesktop extends Game {

    private _requisitosMinimos: { so: string; espaco: number; ram: number };

   constructor(nome: string, preco: number, tipo: number, genero: string, requisitosMinimos: { so: string; espaco: number; ram: number }, disponivel: boolean = true) {
        super(nome, genero, tipo, preco, disponivel);
        this._requisitosMinimos = requisitosMinimos;
    }

    public get requisitosMinimos(): { so: string; espaco: number; ram: number } {
        return this._requisitosMinimos;
    }
    
    public set requisitosMinimos(requisitosMinimos: { so: string; espaco: number; ram: number }) {
        this._requisitosMinimos = requisitosMinimos;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Requisitos Mínimos:\n");
        console.log("Sistema Operacional: " + this._requisitosMinimos.so);
        console.log("CPU: " + this._requisitosMinimos.espaco + " GB");
        console.log("RAM: " + this._requisitosMinimos.ram + " GB");
        console.log("*****************************************************\n");
    }
}