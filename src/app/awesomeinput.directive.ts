import { formatCurrency } from '@angular/common';
import { Directive,ElementRef,HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class AwesomeinputDirective {

  constructor(private el: ElementRef) { }
// I THINK THIS MIGHT NEED A OUTPUT
  //@Output

  /* @Input('format') format: any; */


/* 
  THE SELECTOR AND THE INPUT HAVE TO MATCH IN ORDER TO USE THIS VERIATION 
  
  THIS @Directive({
  selector: '[appInputFormat]'
  })
  
  WITH  @Input('appInputFormat') format: any; SAME WITH OUTPUT
  */
  @Input('appInputFormat') format: any;

  @HostListener('focus')onFocus(){

  
    console.log("on Focus");
   /*  let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value= value.toUpperCase(); */
  }
  @HostListener('blur')onBlur()
  {
    console.log("on Blur");
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
           this.el.nativeElement.value= value.toLowerCase();
    else
      this.el.nativeElement.value= value.toUpperCase();
  }

 /*  @HostListener('blur')onBlurX()
  {
    console.log("on Blur");
    let value: string = this.el.nativeElement.value;
    if(this.format2 == 'lowercase')
           this.el.nativeElement.value= value.toLowerCase();
    else
      this.el.nativeElement.value= value.toUpperCase();
      this.el.nativeElement.value= value.repeat(1);
  }
 */


}
