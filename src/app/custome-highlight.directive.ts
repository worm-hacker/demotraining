import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeHighlight]'
})
export class CustomeHighlightDirective {
  @Input() appCustomeHighlight = "";
  @Input() appwhite = "";

  constructor(private el: ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.highlight(this.appCustomeHighlight, this.appwhite);
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.highlight("","");
  }


  private highlight(color:string, white:string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = white;
  }

}
