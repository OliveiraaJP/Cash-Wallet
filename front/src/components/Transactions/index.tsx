import { Container } from "./styles";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

interface Props {
  typeColor?: "credit" | "debit" | undefined;
  value?: number | undefined;
  date?: any | undefined;
  name?: string | undefined;
}

const Transaction = ({ typeColor, value, date, name }: Props): JSX.Element => {
  return (
    <Container className={typeColor}>
      <div>
        <article >{dayjs(date).format("DD/MM/YY")}</article>
        {typeColor === "credit" && (
          <h4>
            <b>de:</b> {name}
          </h4>
        )}
        {typeColor === "debit" && (
          <h4>
            <b>para:</b> {name}
          </h4>
        )}
        <p>
          {typeColor === "debit" && <HiArrowNarrowDown />}
          {typeColor === "credit" && <HiArrowNarrowUp />}
          R$ <span> {value?.toFixed(2)}</span>
        </p>
      </div>
    </Container>
  );
};

export default Transaction;
