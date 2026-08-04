# Sistema de aluguel de decoração de festas

## 1. Objetivo
Sistema para gerenciamento de aluguel de peças decorativas para festas de aniversário.

O projeto foi criado para organizar as informações do negócio, permitindo cadastrar peças decorativas, clientes e pedidos de aluguel. A aplicação ajuda a acompanhar a disponibilidade das peças em determinados períodos, identificar quais itens estão com cada cliente e facilitar o controle geral dos aluguéis.

Também tem como objetivo tornar a rotina mais simples, reduzindo controles manuais e centralizando as principais informações do negócio em um único sistema.

## 2. Contexto do negócio
Hoje o controle pode acontecer por conversa no WhatsApp, anotações ou memória.
Isso pode gerar problemas como:
- esquecer datas de entrega ou retirada
- perder informações do cliente
- não acompanhar pagamentos corretamente
- confundir temas ou itens alugados
- querer alugar uma peça que ainda não foi devolvida

## 3. Tipos de usuário

- Dona da loja
- Cliente (futuramente, se houver área para consulta)

## Funcionalidades principais

- [x] Cadastrar material
- [x] Cadastrar cliente
- [x] Cadastrar pedido
- [x] Informar tema da festa
- [x] Informar data do evento
- [x] Informar data de retirada e devolução
- [ ] Registrar pagamento de entrada
- [ ] Registrar pagamento restante
- [ ] Consultar pedidos por data
- [ ] Consultar pedidos por cliente
- [ ] Editar pedido
- [ ] Marcar pedido como devolvido/finalizado

## 5. Histórias de usuário
- Como DONA DA LOJA, quero cadastrar as peças que tenho no meu estoque para poder atrelar a peça a um pedido de aluguel;
- Como dona da loja, quero cadastrar um cliente para guardar seus dados e facilitar novos atendimentos.
- Como dona da loja, quero cadastrar um pedido de aluguel para organizar cada evento.
- Como dona da loja, quero informar a data do evento para saber quando a decoração será usada.
- Como dona da loja, quero registrar o valor pago na entrada para acompanhar o que já foi recebido.
- Como dona da loja, quero ver os pedidos por data para evitar conflitos de agenda.
- Como dona da loja, quero marcar um pedido como finalizado para saber que ele já foi concluído.

## 6. Regras de negócio
- O cliente paga 50% no fechamento do pedido.
- Os outros 50% devem ser pagos na retirada.
- Todo pedido deve ter nome do cliente, data do evento, tema e valor.
- Um pedido não pode ser finalizado sem registro de devolução.
- O sistema deve permitir consultar pedidos por período.
- Permitir multiplas formas de pagamento.

## 7. Dados importantes

### peça_decorativa
- nome da peça
- categoria enum[boleira, bandeijas, jarros, outros]
- descricao
- cor


### Cliente
- Nome
- CPF
- Telefone
- Email
- Endereço

### Pedido
- Cliente
- Tema do evento
- Data do evento
- Data de retirada
- Data de devolução
- Valor total
- Valor da entrada
- Valor restante
- Status do pedido
- Formato do pagamento

## 8. Ideias futuras
- Enviar lembrete no WhatsApp
- Gerar recibo
- Catálogo de temas
- Controle de itens do estoque
- Dashboard financeiro
