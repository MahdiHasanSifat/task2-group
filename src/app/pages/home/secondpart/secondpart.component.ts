import { Component } from '@angular/core';
import { infs } from 'src/app/core/db/inf.db';

@Component({
  selector: 'app-secondpart',
  templateUrl: './secondpart.component.html',
  styleUrls: ['./secondpart.component.scss']
})
export class SecondpartComponent {
items: any[] = infs;
}
