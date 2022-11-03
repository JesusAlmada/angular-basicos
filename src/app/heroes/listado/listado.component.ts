import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Captain America'];
  heroeBorrado: string = ''
  borrarHeroe(){
    console.log('borrando...')
    console.log('se ha eliminado al heroe ' + this.heroes[this.heroes.length-1])
    this.heroeBorrado = this.heroes[this.heroes.length-1]
    this.heroes.pop()
  }
}


