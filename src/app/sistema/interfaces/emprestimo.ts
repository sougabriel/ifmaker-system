export interface Emprestimo {

    id?: number;
    dataInicial: Date;
    dataFinal: Date;
    finalidade?: string;
    pessoaId?: number;
    materialId?: number;
    createdAt: Date;
    updatedAt: Date;
}
