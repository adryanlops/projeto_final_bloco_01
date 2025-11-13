import { Game } from "../model/Game";

export interface ContaRepository {

	// CRUD dos Game
	procurarPorNome(nome: string): void;
	listarTodas(): void;
	cadastrar(jogo: Game): void;
	atualizar(jogo: Game): void;
	deletar(nome: string): void;
	
	
}