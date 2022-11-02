export interface Transferencia {
    id?: string | number;
    valor: number;
    destino: number;
    data?: Date;
}

export interface RootObject {
    transferencias: Transferencia[];
}