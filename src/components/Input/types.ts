import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Home/types";

export  interface IIInputProps extends React.InputHTMLAttributes<HTMLInputElement>{

    control: Control<IFormLogin, any>
    name : "nome" | "senha";
    errorMessage?: string; 
}
declare namespace JSX {
    interface IntrinsicElements {
        parError: any
    }
}