import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  carName:string = 'Mercedes-Benz';
  model:string = 'E500 (W124)';
  year:number = 1994;
  powerEngine:number = 319;
  kpp:string = 'МКПП';
  color:string = 'Серебристый';
  speed:number = 243;
  wheels:string = '225/55R16';

  options:string[] = ['ABS', 'Подушки безопасности', 'Кондиционер', 'Электростеклоподъемники', 'Усилитель руля'];

  isHide:boolean = false;

  addOption(option:string) {

    this.options.push(option);
    return false;
  }

  deleteOption(option:string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  hideBlock() {
    this.isHide = !this.isHide;
  }

  carSelect(carName:string) {
    if (carName == 'bmw') {
      this.carName = 'BMW';
      this.model = 'M5 (E34)';
      this.year = 1993;
      this.powerEngine = 337;
      this.kpp = 'МКПП';
      this.color = 'Черный';
      this.speed = 251;
      this.wheels = '225/45R17';

      this.options = ['ABS', 'Старт-стоп','Подушки безопасности', 'Климат-контроль', 'Электростеклоподъемники', 'Гидроусилитель руля', 'Подогрев сидений', 'Электрозеркала']

    } else if (carName == 'audi') {

      this.carName = 'Audi';
      this.model = 'S6 (C4)';
      this.year = 1996;
      this.powerEngine = 290;
      this.kpp = 'АКПП';
      this.color = 'Серебристый металлик';
      this.speed = 239;
      this.wheels = '225/50R16';

      this.options = ['ABS', 'Электро-люк','Подушки безопасности', 'Климат-контроль', 'Электростеклоподъемники', 'Подогрев сидений', 'Электрозеркала']

    } else {

      this.carName = 'Mercedes-Benz';
      this.model = 'E500 (W124)';
      this.year = 1994;
      this.powerEngine = 319;
      this.kpp = 'МКПП';
      this.color = 'Серебристый';
      this.speed = 243;
      this.wheels = '225/55R16';

      this.options = ['ABS', 'Подушки безопасности', 'Кондиционер', 'Электростеклоподъемники', 'Усилитель руля', 'Подогрев сидений', 'Электрозеркала']
    }
  }
}
