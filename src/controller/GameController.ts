import { Game } from "../model/Game";
import { ContaRepository } from "../repository/GameRepository";

export class GameController implements ContaRepository {

    private listarGame = new Set<Game>();
    nome: string = "";

    procurarPorNome(nome: string): void {
        throw new Error("Method not implemented.");
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

}