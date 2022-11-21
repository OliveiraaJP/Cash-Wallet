import { toast } from "react-toastify";

export function throwError(status: number, message: string) {
  if (message === "User not found!")
    toast.error("Usuário inexistente, envie para um destinatário cadastrado");
  if (message === "Balance cannot be less than 0!")
    toast.error("Não da pra ficar com saldo negativo né gente fina");
  if (message === "Cannot do transactions with same account!")
    toast.error("Você ta tentando transferir pra sua própria conta?");
}
