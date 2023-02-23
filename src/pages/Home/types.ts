export interface IFormLogin{
    nome: string;
    senha: string;
    placeholder: string;
}



export const defaultValues: IFormLogin = {
    nome: '',
   senha: '',
   placeholder: ''
}