import { Game } from "../model/Game";
import { ContaRepository } from "../repository/GameRepository";

export class GameController implements ContaRepository {

    private listarGame = new Set<Game>();
    nome: string = "";

    procurarPorNome(nome: string): void {
        let buscaGame = this.buscarNoSet(nome);
        if (buscaGame) {
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
        throw new Error("Method not implemented.");
    }
    deletar(nome: string): void {
        throw new Error("Method not implemented.");
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