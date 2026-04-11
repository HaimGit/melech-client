import { Pipe, PipeTransform } from '@angular/core';

export const COLOR_RANGES: { color: string; range: string; max: number }[] = [
  { color: 'yellow', range: '0',   max: 0 },
  { color: 'orange', range: '1–2', max: 2 },
  { color: 'green',  range: '3–4', max: 4 },
  { color: 'red',    range: '5+',  max: Infinity },
];

@Pipe({
  name: 'countToColor',
})
export class CountToColorPipe implements PipeTransform {
  transform(value: number): string {
    return COLOR_RANGES.find(r => value <= r.max)!.color;
  }
}
