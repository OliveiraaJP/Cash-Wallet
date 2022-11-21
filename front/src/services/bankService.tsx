import axios from "axios";

type Config = {
    headers: {
        Authorization: string;
    };
}

type BodyTransfer = {
  receiver?: string
  amount?: number
}



export async function getAccInfo(config: Config) {
  return await axios.get(process.env.REACT_APP_API_URI + "/bank", config);
}

export async function getTransactionsInfo(config: Config) {
  return await axios.get(process.env.REACT_APP_API_URI + `/bank/transactions`, config);
}


export async function getFilterTransactions(config: Config, filter: string) {
  return await axios.get(process.env.REACT_APP_API_URI + `/bank/transactions?type=${filter}`, config);
}

export async function doTransaction(config: Config, body: BodyTransfer) {
  console.log(body)
  return await axios.post(process.env.REACT_APP_API_URI + "/bank/transactions", body ,config);
}