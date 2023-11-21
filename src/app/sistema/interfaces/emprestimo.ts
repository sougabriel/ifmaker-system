export interface Emprestimo {

    id?: number;
    dataInicial: Date;
    dataFinal: Date;
    finalidade?: string;
    idPessoa?: number;
    idMaterial?: number;

}
