import { toast } from 'react-toastify'

export function throwError(status: number, message: string){
    if(status === 422) toast.error("Senha precisa ter 8 digítos, sendo 1 maiúsculo, 1 minúsculo e 1 número");
    if(message === "Username invalid.") toast.error("Username não existe!");
    if(message === "Password invalid!") toast.error("Senha inválida!");
    if(status === 400) toast.error("Username já existente!")
}

export function sucessMessage(status: number, message: string){
    if(message === "Created User") toast.success("Usuário criado com sucesso")
    if(message === "login") toast.success("Login feito :D")
}