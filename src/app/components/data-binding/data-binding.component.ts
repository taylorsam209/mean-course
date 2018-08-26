import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})

export class DataBindingComponent {
interpolationString: string = 'This is an interpolation';
propertyBindingValue: number = 605;
nameBinding: string = 'number';
number: string = 'number';
name: string = '';
nameVarForEvents: string= '';

public eventFired(event) {
  console.log('Event Fired');
}
}
