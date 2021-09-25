import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>05/09/2021</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Despesas</td>
            <td>01/09/2021</td>
          </tr>
          <tr>
            <td>Contas de casa</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Despesas</td>
            <td>01/09/2021</td>
          </tr>
          <tr>
            <td>Supérfluo</td>
            <td className="deposit">R$ 5.400,00</td>
            <td>Outros</td>
            <td>31/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
