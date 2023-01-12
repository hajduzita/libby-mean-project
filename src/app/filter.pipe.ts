import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], ...args: any[]): any {
    const search = args[0];
    return items.filter((i: string) => new RegExp(search, 'i').test(i));
  }

}
