## Comandos principais (nível: básico → intermediário)

| Comando | Pra que serve | Quando usar |
|---|---|---|
| `yarn prisma format` | Formata e organiza o `schema.prisma` (alinha colunas, ordena) | Sempre que editar o schema, antes de commitar |
| `yarn prisma validate` | Checa se o schema tem erro de sintaxe/relacionamento, sem tocar no banco | Antes de migrar, pra pegar erro cedo |
| `yarn prisma migrate dev --name nome_da_mudanca` | Cria uma migration SQL a partir da diferença entre o schema e o banco, aplica, e já roda `generate` no final | **É o comando do dia a dia em desenvolvimento** |
| `yarn prisma generate` | Só regenera o Prisma Client tipado (sem tocar no banco) | Quando você mudou o schema mas não quer criar migration ainda, ou depois de puxar migrations de outra pessoa |
| `yarn prisma db push` | Empurra o schema direto pro banco, **sem** criar arquivo de migration | Só em prototipagem rápida — não gera histórico |
| `yarn prisma studio` | Abre uma UI visual pra ver/editar os dados do banco no navegador | Debug rápido, conferir se os dados batem |
| `yarn prisma migrate reset` | Apaga o banco, recria do zero rodando todas as migrations | Só em dev, quando o banco local ficou bagunçado |


**Fluxo típico enquanto  modela:**
1. Edita `model` no `schema.prisma`
2. `yarn prisma format` (organiza)
3. `yarn prisma migrate dev --name adiciona_tabela_peca` (cria migration + aplica + gera client)
4. Repete pra cada mudança de modelagem

