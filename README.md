# Responsivity

- Layout de site responsivo em diversos dispositivos;

## Importante: Estratégia de reset no arquivo style.css recomendada:
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
}

## CSS Units

Unidades de medida do CSS

Layout fixo
`px` - Pixels

Layout fluido
`%` - Porcentagem
`auto` - Automatica
`vh` - Viewport Height
`vw` - Viewport width 

Viewport -> Display da página principal do site.

Textos Fixos
`1px` = o.75pt
`16px` = 12pt

Textos fluidos
`em` - Multiplicado pelo pai
`rem` - Multiplicar pelo root (no caso do exemplo do arquivo, o BODY)

Breakpoints -> Opção no proprio `inspecionar` do browser ao lado dos `Elements`. Útil para verificar a responvidade.

## Media Queries
Exemplo: 
```css
@media (max-width: 320px) {
    #form h3 {
        font-size: 2rem;
    }
}
```

## HTML Media Attrib.
``` css - Formatacao padrao para imprimir CASO PRECISE ```

## IMAGENS

`<picture>` 

JPG, PNG, vs SVG
SVG - Resolucao mantida independente da aproximacao da imagem.

#### POWERED BY: Rocketseat