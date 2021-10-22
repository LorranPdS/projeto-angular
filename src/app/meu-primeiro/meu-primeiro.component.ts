// 3. criamos aqui um component a partir do zero para entendermos como funciona sua estrutura
import { Component } from '@angular/core';

@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular!</p>
    `
}) // 4. Feito o component acima, vamos colocar esse component em outra classe e ele terá uma tag com o nome que descrevemos ali acima no "selector", e vamos colocar no app.component.html
export class MeuPrimeiroComponent{}

// Sempre que forem vistas chaves, entenda que se trata de um Objeto
// É necessário que acima tenha um "export" para que o html possa enxergar o selector