# Team Showcase

Um site interativo e responsivo para apresentacao da equipe Front End, desenvolvido com tecnologias web modernas e foco em acessibilidade e experiencia do usuario.

## Visao Geral

Este projeto apresenta uma vitrine digital elegante para os membros da equipe Front End da Atletica Computos. O site combina design moderno com funcionalidades interativas, oferecendo uma experiencia fluida tanto em desktop quanto em dispositivos moveis.

## Funcionalidades

### Interface e Design
- **Tema Escuro Otimizado**: Paleta de cores com alto contraste para melhor legibilidade
- **Layout Responsivo**: Design adaptavel para todos os tamanhos de tela
- **Animacoes Suaves**: Transicoes elegantes entre estados dos elementos
- **Tipografia Clara**: Hierarquia visual bem definida com fontes adequadas

### Interatividade
- **Menu Dropdown Acessivel**: Navegacao por teclado e mouse com suporte completo a leitores de tela
- **Busca em Tempo Real**: Filtragem instantanea dos membros da equipe
- **Cards Interativos**: Efeitos hover com transformacoes suaves
- **Navegacao Intuitiva**: Links diretos para perfis individuais

### Paginas da Equipe
- **Pagina Principal**: Visao geral da equipe com cards informativos
- **Perfis Individuais**: Paginas dedicadas para Leonardo, Julia e Kelly
- **Informacoes Detalhadas**: Habilidades tecnicas, experiencia e contato

## Tecnologias Utilizadas

### Frontend Core
- **HTML5**: Estrutura semantica e acessivel
- **CSS3**: Estilizacao avancada com variaveis CSS e Flexbox/Grid
- **JavaScript (ES6+)**: Interatividade e manipulacao DOM

### Funcionalidades Tecnicas
- **CSS Custom Properties**: Sistema de variaveis para temas consistentes
- **Flexbox & CSS Grid**: Layouts responsivos e flexiveis
- **Media Queries**: Adaptacao para diferentes dispositivos
- **DOM Manipulation**: Interacao dinamica com elementos da pagina
- **Event Listeners**: Captura de eventos para interatividade

### Acessibilidade & UX
- **ARIA Labels**: Atributos para tecnologias assistivas
- **Keyboard Navigation**: Navegacao completa via teclado
- **Focus Management**: Indicadores visuais de foco
- **Screen Reader Support**: Compatibilidade com leitores de tela

## Estrutura do Projeto

```
team-showcase-main/
├── main.html              # Pagina principal com cards da equipe
├── leonardo.html          # Perfil do Leonardo Hosoyiri de Oliveira
├── julia.html             # Perfil da Julia
├── kelly.html             # Perfil da Kelly
├── style.css              # Estilos CSS com variaveis e responsividade
├── script.js              # JavaScript para interatividade
├── imagens/               # Diretorio de imagens
│   ├── leonardo.jpeg
│   ├── julia.jpeg
│   └── kelly.jpeg
└── README.md              # Este arquivo
```

## Como Executar

### Pre-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nao requer servidor - pode ser executado localmente

### Execucao Local
1. **Clone ou baixe** o repositorio
2. **Abra o arquivo** `main.html` em seu navegador
3. **Navegue** pelas paginas usando o menu ou links diretos

### Servidor Local (Opcional)
```bash
# Usando Python
python -m http.server 8000

# Ou usando Node.js
npx serve .

# Acesse: http://localhost:8000
```

## Estrutura dos Arquivos

### HTML (`main.html`, `leonardo.html`, `julia.html`, `kelly.html`)
- **Estrutura Semantica**: Header, main, footer com roles apropriados
- **Meta Tags**: Viewport e charset configurados
- **Links Acessiveis**: Navegacao clara e descritiva
- **Imagens Otimizadas**: Alt texts descritivos e lazy loading

### CSS (`style.css`)
```css
/* Variaveis CSS para consistencia */
:root {
  --bg: #0a0a0a;           /* Fundo principal */
  --surface: #1a1a1a;       /* Superficies (cards, header, footer) */
  --text: #ffffff;          /* Texto principal */
  --primary: #7c3aed;       /* Cor primaria (roxa) */
  /* ... mais variaveis */
}

/* Layout responsivo */
@media (max-width: 900px) {
  /* Ajustes para tablets */
}

@media (max-width: 640px) {
  /* Ajustes para mobile */
}
```

### JavaScript (`script.js`)
```javascript
// Funcionalidades principais:
// 1. Menu dropdown acessivel
// 2. Sistema de busca
// 3. Configuracao dinamica de imagens
// 4. Gerenciamento de eventos

// Exemplo: Toggle do menu dropdown
function toggleMenu() {
  // Logica de acessibilidade incluida
}
```

## Funcionalidades Tecnicas Detalhadas

### Sistema de Busca
- **Busca em Tempo Real**: Filtragem instantanea conforme digitacao
- **Busca Multifacetada**: Pesquisa por nome e descricao
- **Feedback Visual**: Ocultacao suave de cards nao correspondentes
- **Case Insensitive**: Busca nao diferencia maiusculas/minusculas

### Menu Dropdown Acessivel
- **Navegacao por Teclado**: Suporte a Enter, Espaco, Setas
- **Estados ARIA**: `aria-expanded`, `aria-hidden`
- **Focus Management**: Ciclo correto de foco nos itens
- **Escape Handler**: Fechamento com tecla Escape

### Design System
- **Paleta Consistente**: 6 cores principais com variacoes
- **Tipografia Hierarquica**: Tamanhos e pesos apropriados
- **Espacamentos Padronizados**: Sistema de gaps consistente
- **Sombras e Bordas**: Efeitos visuais sutis

## Design e Acessibilidade

### Principios de Design
- **Minimalismo**: Interface limpa e focada no conteudo
- **Consistencia**: Padroes visuais mantidos em todas as paginas
- **Hierarquia Visual**: Elementos importantes destacados
- **Feedback Visual**: Estados hover, focus e active claros

### Acessibilidade (WCAG 2.1)
- **Contraste Adequado**: Razao de contraste > 4.5:1
- **Navegacao por Teclado**: Todos os elementos interativos acessiveis
- **Leitores de Tela**: Labels e descricoes apropriadas
- **Zoom**: Layout funciona ate 200% de zoom

### Responsividade
- **Mobile-First**: Design prioriza dispositivos moveis
- **Breakpoints Estrategicos**: 640px, 900px, 1200px
- **Flexibilidade**: Elementos se adaptam a diferentes larguras
- **Performance**: Imagens otimizadas e CSS eficiente

## Desenvolvimento e Manutencao

### Convencoes de Codigo
- **HTML Semantico**: Uso correto de tags estruturais
- **CSS Organizado**: Secoes comentadas e variaveis nomeadas
- **JavaScript Modular**: Funcoes bem definidas e comentadas
- **Nomes Descritivos**: Classes e IDs autoexplicativos

### Boas Praticas Implementadas
- **Separacao de Responsabilidades**: HTML, CSS e JS distintos
- **Performance**: CSS eficiente, JavaScript otimizado
- **Manutenibilidade**: Codigo comentado e bem estruturado
- **Escalabilidade**: Estrutura preparada para expansao

### Possiveis Melhorias Futuras
- [ ] Sistema de temas (claro/escuro) dinamico
- [ ] Animacoes mais elaboradas
- [ ] Integracao com CMS
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)

## Equipe

### Leonardo Hosoyiri de Oliveira
**Especialidades**: PHP, JavaScript, Python, C#, C++, HTML, CSS
**Perfil**: Estudante veterano de Analise e Desenvolvimento de Sistemas

### Julia
**Especialidades**: Tecnologias web modernas
**Perfil**: Estudante veterana de Analise e Desenvolvimento de Sistemas

### Kelly
**Especialidades**: Programacao e Design
**Perfil**: Estudante veterana de Analise e Desenvolvimento de Sistemas

## Licenca

Este projeto foi desenvolvido como parte do curso de Analise e Desenvolvimento de Sistemas da Atletica Computos.

---

Desenvolvido pela equipe Front End
