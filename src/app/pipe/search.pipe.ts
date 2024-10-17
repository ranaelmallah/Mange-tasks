import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(tasks: any[], searchText: string) {

    searchText = searchText.toLowerCase();
    return tasks.filter(task=> {
      return task.title.toLowerCase().includes(searchText)
    })
  }

}
