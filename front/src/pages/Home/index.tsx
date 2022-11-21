import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { ButtonsBox, CardBox, Container, TransactionsBox } from "./styles";
import card from "../../assets/creditCard.jpeg";
import * as bankService from "../../services/bankService";
import { throwError } from "../../utils/bankResponseHandler";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Transaction from "../../components/Transactions";
import { HiOutlineLogout } from "react-icons/hi";
import CurrencyFormat from "react-currency-format";
import Swal from "sweetalert2";

const Home: React.FC = () => {
  const { token } = useContext(UserContext);
  const [saldo, setSaldo] = useState(100);
  const [userId, setUserId] = useState(-1);
  const [transactions, setTransactions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [reload, setReload] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    getAccountInfo();
    getTransactionsInfo();
    console.log(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  function getAccountInfo() {
    const promise = bankService.getAccInfo(config);
    promise
      .then((res) => {
        const { data } = res;
        console.log(data);
        setUserId(data.account.id);
        setSaldo(data.bank.balance);
      })
      .catch((err) => {
        console.log("err acc info: " + err);
        toast.error("Desconectado, tente logar novamente!");
        navigate("/");
      });
  }

  function getTransactionsInfo() {
    const promise = bankService.getTransactionsInfo(config);
    promise
      .then((res) => {
        console.log(res);
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log("err transactions: " + err);
      });
  }

  function doTransfer(event: any) {
    event.preventDefault();
    const resAmount: number = Number(amount.replace("R$ ", ""));
    const promise = bankService.doTransaction(config, {
      receiver,
      amount: resAmount,
    });
    promise
      .then((e) => {
        console.log(e);
        setOpenModal(false);
        setReload(!reload);
        setAmount("");
        setReceiver("");
      })
      .catch((err) => {
        console.log(err);
        throwError(err.response.status, err.response.data.message);
      });
  }

  function logout() {
    Swal.fire({
      title: "Deseja fazer logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, até breve!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Usuário deslogado!",
          "Voltando a tela de login.",
          "success"
        ).then(() => {
          localStorage.removeItem("userToken");
          navigate("/");
        });
      }
    });
  }

  function filterTransactions(event: any){
    event.preventDefault()
    const transactions = bankService.getFilterTransactions(config, filter);
    transactions.then((res) => {
      setTransactions(res.data)
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <Container>
      <header>
        <img
          className="logo"
          src="https://ng.cash/_nuxt/img/logo-ngcash-branco.88c5860.svg"
          alt="logo ng cash"
        />
        <div>
          <HiOutlineLogout color="white" fontSize="4em" onClick={logout} />
        </div>
      </header>
      <main>
        <CardBox>
          <img className="card" src={card} alt="card" />
          <img
            className="cardLogo"
            src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/a9/09/9da9092b-85d0-4751-e430-388eff68d729/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp"
            alt=""
          />
          <p>Saldo: R${saldo.toFixed(2)}</p>
        </CardBox>
        <ButtonsBox>
          {!openModal && (
            <button onClick={() => setOpenModal(!openModal)}>
              Realizar transferência
            </button>
          )}
          {openModal && (
            <>
              <button onClick={() => setOpenModal(!openModal)}>
                Cancelar transferência
              </button>
              <form onSubmit={doTransfer}>
                <input
                  type="text"
                  placeholder="Username de quem vai receber"
                  value={receiver}
                  onChange={(e: any) => setReceiver(e.target.value)}
                />
                <CurrencyFormat
                  prefix="R$ "
                  allowNegative={false}
                  placeholder="R$ 0.00"
                  value={amount}
                  onChange={(e: any) => setAmount(e.target.value)}
                  required
                />
                <button type="submit" className="submit">
                  Confirmar transação
                </button>
              </form>
            </>
          )}
        </ButtonsBox>
        <TransactionsBox>
          <>
            <div>
              <h1>Transações:</h1>
              <div>
                <h2>Filtro:</h2>
                <form onSubmit={filterTransactions}>
                  <input type="radio" name="filtro" onChange={() => {setFilter("")}} />
                  <label id="">Todos</label>
                  <input type="radio" name="filtro" onChange={() => setFilter("credit")} />
                  <label id="">Crédito</label>
                  <input type="radio" name="filtro" onChange={() => setFilter("debit")} />
                  <label id="">Débito</label>
                  <button type="submit">Filtrar</button>
                </form>
              </div>
              <span></span>
            </div>
            {transactions.map((tran, i) => {
              if (tran["debId"] === userId) {
                return (
                  <Transaction
                    key={i}
                    typeColor="debit"
                    value={tran["value"]}
                    date={tran["createdAt"]}
                    name={tran["credUser"]}
                  />
                );
              } else {
                return (
                  <Transaction
                    key={i}
                    typeColor="credit"
                    value={tran["value"]}
                    date={tran["createdAt"]}
                    name={tran["debUser"]}
                  />
                );
              }
            })}
          </>
        </TransactionsBox>
      </main>
    </Container>
  );
};

export default Home;
