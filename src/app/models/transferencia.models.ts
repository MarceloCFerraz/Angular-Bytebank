declare module namespace {

    export interface Transferencia {
        id: string;
        valor: number;
        destino: string;
        data: Date;
    }

    export interface RootObject {
        transferencias: Transferencia[];
    }

}