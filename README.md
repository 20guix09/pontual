# Pontual Planejados — versão 2026

Site estático completo. Extraia o ZIP e abra index.html no navegador. Não exige instalação nem compilação. Para publicar, envie index.html, style.css, script.js e a pasta assets para a raiz da hospedagem.

## Alterações
- Amarelo principal #ADA46D, baseado na referência da logo enviada por Guilherme. Fundo branco preservado, texto branco no cabeçalho, nas seções com fundo da marca e nos botões preenchidos. Texto escuro preservado nos fundos claros.
- Fotos reais da Pontual, baixadas do Instagram e salvas no projeto. As seis fotos utilizadas no site receberam tratamento técnico com ImageGen, reaproveitando o tratamento existente da cozinha. Os originais estão preservados em assets/projetos/originais.
- Galeria de seis projetos com ampliação, navegação por teclado e fechamento por Escape.
- Links de Instagram, Facebook, WhatsApp, telefone e e-mail funcionais.
- Rodapé © 2026 e crédito “Desenvolvido por Guilherme Lima”, com o nome sublinhado e link https://portfolio-guilherme-lima.vercel.app/.
- Menu móvel com estado acessível, suporte a movimento reduzido e ícones originais da biblioteca Bootstrap Icons 1.13.1, incorporados localmente sem depender de CDN.

## Verificação
Prévia HTTP local com resposta 200. Galeria abriu e fechou corretamente. Menu testado em largura de 390 px; sem rolagem horizontal ou fotos quebradas. Links sociais e portfólio conferidos no HTML. O site antigo não foi alterado nem publicado.

Consulte FONTES-DAS-IMAGENS.txt para as publicações de origem. O arquivo TRATAMENTO-DA-IMAGEM.txt registra a ferramenta e o prompt usado.

## Revisão de cores e ícones
Todos os desenhos de ícones anteriores foram substituídos pelos SVGs originais de Bootstrap Icons, incluindo WhatsApp, régua e caminhão. As formas foram preservadas integralmente. Fonte: https://icons.getbootstrap.com/ — licença MIT em assets/icons/LICENSE.md.

## Ampliação das fotos
Cartões identificados com “Ampliar foto”, sem sugerir uma coleção de imagens. Janela transparente com fundo do site desfocado, legenda escura e botão circular de fechar junto ao canto superior direito da foto. Fechamento pelo botão, pela tecla Escape ou clicando fora da imagem. Ícone de projetos personalizados substituído pelo pencil-square da mesma biblioteca.

Menu do cabeçalho: fonte ampliada de 14 px para 17 px no desktop, com espaçamento ajustado entre os links.

Menu móvel: animação dos três traços para um X centralizado, sincronizada com aria-expanded. Retorna ao formato original ao fechar, selecionar um link, pressionar Escape ou sair do menu. Respeita a preferência por movimento reduzido.

## Navegação por seção e progresso
O link da seção atual recebe uma linha branca animada da esquerda para a direita. A linha também aparece ao passar o mouse. A barra branca no topo acompanha a posição na página, aumentando ao descer e diminuindo ao subir. Atualização sincronizada com a rolagem, com suporte ao menu móvel, redimensionamento e preferência por movimento reduzido.

## Atualização das fotos
Dormitório, sala, banheiro, escritório e closet tratados em maior resolução com ImageGen. Cozinha tratada reutilizada também nos cartões e na ampliação. Exportação JPEG de alta qualidade (94) para equilibrar definição e carregamento. Logotipos e ícones vetoriais preservados.
