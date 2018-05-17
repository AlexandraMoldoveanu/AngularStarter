import {
    Component,
    OnInit
  } from '@angular/core';
  
    
  @Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: 'today-component',  // <home></home>
    /**
     * Our list of styles in our component. We may add more to compose many styles together.
     */
    styleUrls: [ './today.component.css' ],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    templateUrl: './today.component.html'
  })
  export class TodayComponent implements OnInit {

    backgroundColor: boolean;
    /**
     * TypeScript public modifiers
     */
    constructor() {

    }
  
    public ngOnInit() {
      console.log('hello `today` component');
      /**
       * this.title.getData().subscribe(data => this.data = data);
       */
    }
    colorMe():void {
      this.backgroundColor = !this.backgroundColor;
    }
       
  