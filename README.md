# NOXGR Auxiliar de Tratativas

Ferramenta auxiliar de interface para organização de modelos de tratativas no Webnox.

> **Uso interno e autorizado.** Não substitui procedimentos obrigatórios da gerenciadora de risco. O operador deve verificar o alerta, seguir o procedimento vigente e revisar a tratativa antes de gravar.

## Situação do projeto
- Repositório privado.
- Estrutura inicial em preparação.
- O código operacional do aplicativo **ainda não foi publicado neste repositório**.
- Um loader remoto **ainda não está ativado**.

## Estrutura prevista
- `noxgr.js`: aplicativo principal (versão revisada e aprovada).
- `loader.js`: carregador para ambiente e origem permitidos.
- `tratativas/`: modelos opcionais e banco de tratativas genéricas.
- `docs/`: guia de instalação, versão e política de dados.

## Cuidados
Não adicionar nomes, CPF, CNH, contatos, placas reais, dados de viagens, credenciais ou tokens pessoais ao repositório. Não utilizar scripts que contornem controles de segurança do Webnox.

**Importante:** um arquivo Raw hospedado em repositório **privado** não pode ser consumido diretamente por um loader público no navegador. Para execução abreviada, usar distribuição autorizada (por exemplo, extensão local com código empacotado) ou um artefato público revisado, sem segredos, com validação de integridade e origem permitida.

## Próximos passos
1. Revisar e versionar o código do NOXGR.
2. Definir a forma autorizada de distribuição.
3. Testar em ambiente de homologação antes de utilizar em produção.
