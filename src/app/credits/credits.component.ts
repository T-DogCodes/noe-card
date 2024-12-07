import { Component, OnInit } from '@angular/core';

/**
 * The credits component provides a credits page to credit all people and
 * organizations creating this application
 */
@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
