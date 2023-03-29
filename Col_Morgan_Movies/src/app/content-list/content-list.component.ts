import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

import { Pipe, PipeTransform } from '@angular/core';
import { } from '../modify-content-component';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

@Pipe({name: 'sortByType1'})

export class sortByType1Pipe implements PipeTransform {
  transform(contentList: Content[]) {
    return contentList.filter(c => c.type == "type1" ? c.type.length : null);
  }
}

@Pipe({name: 'sortByType2'})

export class sortByType2Pipe implements PipeTransform {
  transform(contentList: Content[]) {
    return contentList.filter(c => c.type == "type2" ? c.type.length : null);
  }
}

@Pipe({name: 'sortByNoType'})

export class sortByNoTypePipe implements PipeTransform {
  transform(contentList: Content[]) {
    return contentList.filter(c => c.type == null);
  }
}



export class contentListComponent {

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.content = this.movieService.getContent();
  }
}