import { Game } from "../model/Game";
import { ContaRepository } from "../repository/GameRepository";

export class GameController implements ContaRepository {

    private listarGame = new Set<Game>();
    nome: string = "";

    procurarPorNome(nome: string): void {
        let buscaGame = this.buscarNoSet(nome);
        if (buscaGame != null) {
            console.log("\nJogo encontrado:\n");
            buscaGame.visualizar();
        } else {
            console.log(`\nJogo ${nome} não encontrado!\n`);
            console.log("Verifique se escreveu corretamente.")
        }
    }

    listarTodas(): void {
        for(let jogo of this.listarGame){
            jogo.visualizar();
        }
    }

    cadastrar(jogo: Game): void {
        this.listarGame.add(jogo);
        console.log(`\nJogo ${jogo.nome} cadastrado com sucesso!\n`);
    }

    atualizar(jogo: Game): void {
        let buscaGame = this.buscarNoSet(jogo.nome);
        if(buscaGame != null){
            this.listarGame.delete(buscaGame);
            this.listarGame.add(jogo);
            console.log(`\nJogo ${jogo.nome} atualizado com sucesso!\n`);  
        }
    }

    comprar(nome: string): void {
        let buscaGame = this.buscarNoSet(nome);
        if(buscaGame != null){
            this.listarGame.delete(buscaGame);
            console.log(`\nJogo ${nome} Comprado com sucesso!\n`);
        } else {
            console.log(`\nJogo ${nome} não encontrado!\n`);
        }
    }

    buscarNoSet(nome: string): Game | null {
        for (let jogo of this.listarGame) {
            if (jogo.nome === nome) {
                return jogo;
            }
        }
        return null;
    }

}