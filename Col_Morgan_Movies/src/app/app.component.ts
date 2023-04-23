import { Component } from '@angular/core';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Col_Morgan_Movies';

  constructor(private contentService: ContentService,
    private logService: LogUpdateService) { }
    ngOnInit(): void {
    this.log.init();
    }
    
}
