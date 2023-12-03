export interface Emprestimo {

    id?: number;
    dataInicial: Date;
    dataFinal: Date;
    finalidade?: string;
    quantidade: number;
    pessoaId?: number;
    materialId?: number;
    createdAt: Date;
    updatedAt: Date;
}
