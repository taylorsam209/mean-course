import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})

export class DataBindingComponent {
interpolationString: string = 'This is an interpolation';
propertyBindingValue: number = 605;
}
