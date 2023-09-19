import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inicio'
})
export class InicioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
