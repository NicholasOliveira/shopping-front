#1.Cenário para Teste Tela de lista de produtos
Cenário A: Adicionar produtos ao carrinho
Dado que um cliente quero adicionar um produto ao carrinho
E o produto ainda não esteja dentro do carrinho
Quando ele clicar em adicionar
Então eu devo adicionar o produto ao carrinho

#Cenário para remover produto do carrinho
Cenário B: Remover produtos do carrinho
Dado que um produto esteja dentro do carrinho
E o cliente deseja remover do carrinho
Quando ele clicar em remover
Então eu devo remover o produto do carrinho

#2.Cenário para Teste Tela de carrinho de compras

Cenário C: Ao clicar no ícone do carrinho no header o usuário deve ser direcionado para o tela de carrinho
Dado que um cliente queira ver seu carrinho
Quando ele clicar no carrinho no header
Então eu devo levar ele até a página de carrinho

Cenário D: Listar os produtos dele no carrinho
Dado que um cliente esteja na pagina de carrinho
E existe produtos no carrinho
Então eu devo listar todos produtos no carrinho

Cenário E: Excluir produtos do carrinho
Dado que um cliente esteja na pagina de carrinho
E existe produtos no carrinho
Quando ele clicar em excluir
Então eu devo apagar o produto especifico do carrinho
