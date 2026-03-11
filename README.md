# FAZCASA — Materiais de Construção LTDA.

> 🔗 **Link do site:** `vou adicionar`

---

![FAZCASA Preview](https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&h=500&fit=crop)

---

## 📋 Sobre o Projeto

O **FAZCASA** é um site institucional e de catálogo de produtos para a empresa **FAZCASA Materiais de Construção LTDA.**, desenvolvido com foco em design moderno, responsividade total e experiência de usuário de alto nível.

O objetivo do site é apresentar a empresa ao público, exibir o catálogo completo de produtos disponíveis na loja e fornecer informações de contato e localização, tudo em uma interface elegante e profissional.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🏠 Apresentação | Página inicial com hero, galeria interativa da loja e diferenciais da empresa |
| 🛍️ Catálogo de Produtos | Grade com todos os produtos cadastrados, imagens reais e opção de orçamento |
| 📷 Galeria com troca de fotos | Miniaturas clicáveis que trocam a imagem principal da loja |
| ▶️ Vídeos incorporados | Vídeo institucional e vídeos por produto via YouTube embed |
| 🗺️ Mapa interativo | Google Maps incorporado com a localização real da loja |
| 📱 Menu hambúrguer | Navegação responsiva para dispositivos móveis |
| 📞 Página de Contato | Endereço, telefone, WhatsApp, e-mail e horário de funcionamento |
| 🔗 Links diretos | Clique em WhatsApp abre conversa, clique no telefone já discagem |
| 🎨 Identidade visual | Paleta preto/amarelo/branco com vermelho como cor secundária |
| ⚡ Performance | Build otimizado com Vite, lazy loading de imagens, compressão gzip |

---

## 🎨 Identidade Visual

A paleta de cores foi pensada para transmitir **solidez, confiança e energia**:

| Papel | Cor | Hex |
|---|---|---|
| Principal | Preto | `#0c0c0c` |
| Destaque | Amarelo | `#ffd200` |
| Fundo claro | Branco | `#ffffff` |
| Secundária | Vermelho | `#ce1f1f` |
| Detalhe | Azul info | `#007ca8` |

A tipografia utilizada é a **Montserrat** (Google Fonts), com pesos de 400 a 900, garantindo hierarquia visual clara entre títulos, subtítulos e textos corridos.

---

## 🧱 Tecnologias Utilizadas

### Front-end
- ⚛️ **React 18** — biblioteca para construção de interfaces componentizadas
- ⚡ **Vite 7** — bundler ultrarrápido com hot reload para desenvolvimento
- 🎨 **CSS puro (Vanilla CSS)** — variáveis CSS nativas, Flexbox e CSS Grid
- 🔤 **Google Fonts — Montserrat** — tipografia moderna e legível

### Serviços externos integrados
- 🖼️ **Unsplash** — imagens de alta qualidade via URL direta
- ▶️ **YouTube Embed** — vídeos institucionais e de produto
- 🗺️ **Google Maps Embed** — mapa interativo de localização

### Ferramentas de desenvolvimento
- 🧹 **ESLint** — análise estática de código e boas práticas
- 📦 **npm** — gerenciamento de dependências
- 🗜️ **Vite Build** — minificação e compressão para produção

---

## 📁 Estrutura de Pastas

```
app/
├── public/                  # Arquivos estáticos públicos
├── src/
│   ├── App.jsx              # Componente principal com toda a estrutura do site
│   ├── App.css              # Estilos globais, tokens de design e responsividade
│   ├── index.css            # Reset CSS e importação de fontes
│   └── main.jsx             # Ponto de entrada da aplicação React
├── index.html               # HTML base da SPA
├── package.json             # Dependências e scripts
└── vite.config.js           # Configuração do Vite
```

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first** e possui breakpoints para:

- 📱 **Mobile** (até 620px) — menu hambúrguer, cards em coluna única
- 📲 **Tablet** (até 860px) — grid de 2 colunas, galeria reorganizada
- 💻 **Desktop** (até 1024px) — grid de 3 colunas nos produtos
- 🖥️ **Desktop largo** (1200px+) — layout completo com 4 colunas

---
<!--
## 🚀 Como Rodar Localmente

### Pré-requisito
- **Node.js** versão 18 ou superior → [nodejs.org](https://nodejs.org)

### Passos

```bash
# 1. Entre na pasta do projeto
cd app

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:5173
```

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---
-->
## 🏗️ Seções do Site

### 1. Apresentação
- **Hero** com título, descrição e chamadas para ação
- **Imagem principal** da loja com badge de quantidade de produtos
- **Vídeo institucional** incorporado (YouTube)
- **Galeria interativa** com 3 fotos da loja e miniaturas clicáveis
- **Diferenciais** da empresa em cards (Entrega Rápida, Assessoria Técnica, Melhores Preços, Grande Estoque)

### 2. Compras
- Grade com **12 produtos** cadastrados (expansível)
- Cada card contém: **imagem real**, categoria, nome, preço e botão de orçamento
- Produtos com vídeo têm botão de alternância **foto ↔ vídeo**
- Categorias cobertas: Estrutural, Alvenaria, Agregados, Acabamento, Revestimento, Pisos, Cobertura, Vedação, Esquadrias, Hidráulica

### 3. Contato
- **Endereço**, telefone, WhatsApp, e-mail e horário de funcionamento
- **Foto do interior** da loja
- **Mapa do Google Maps** interativo e incorporado

---

## 📦 Produtos Cadastrados

| # | Produto | Categoria | Preço |
|---|---|---|---|
| 1 | Cimento CP-II 50kg | Estrutural | R$ 42,90 |
| 2 | Tijolo Cerâmico 8 Furos | Alvenaria | R$ 1,39 |
| 3 | Areia Lavada (m³) | Agregados | R$ 159,00 |
| 4 | Brita Nº 1 (m³) | Agregados | R$ 174,00 |
| 5 | Tinta Acrílica 18L | Acabamento | R$ 319,90 |
| 6 | Argamassa AC-II 20kg | Revestimento | R$ 26,90 |
| 7 | Piso Porcelanato 84x84 | Pisos | R$ 89,90/m² |
| 8 | Telha Ondulada 2,44m | Cobertura | R$ 77,50 |
| 9 | Vergalhão CA-50 12mm | Estrutural | R$ 8,90/m |
| 10 | Impermeabilizante 18L | Vedação | R$ 189,00 |
| 11 | Porta de Madeira 80cm | Esquadrias | R$ 420,00 |
| 12 | Tubo PVC 100mm 6m | Hidráulica | R$ 58,90 |

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para uso da **FAZCASA Materiais de Construção LTDA.**
Todos os direitos reservados © 2026 FAZCASA.

---

<div align="center">
  <strong>Desenvolvido com ⚡ React + Vite</strong><br/>
  FAZCASA Materiais de Construção LTDA. — Qualidade para sua obra.
</div>
