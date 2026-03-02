import { Pipe, PipeTransform } from '@angular/core';
import { DisplayedListItem } from 'src/app/models/displayed-list-item';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(items: DisplayedListItem[], searchText: string): DisplayedListItem[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(({ valueToDisplay }) => valueToDisplay.includes(searchText));
  }

}
