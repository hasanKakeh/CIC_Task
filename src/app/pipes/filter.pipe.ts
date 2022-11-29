import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, ...keys: any): any[] {
    if (!items)
      return [];
    if (!searchText)
      return items;
    searchText = searchText?.toLocaleLowerCase();
    return items.filter(it => {
      return keys.find((key: any) => {
        return it[key]?.toLocaleLowerCase().includes(searchText)
      });
    })

  }

}
