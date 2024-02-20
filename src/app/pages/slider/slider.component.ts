import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  elements: Node[] = [];
  positionCounter: number = 0;
  elementsLength: number = 0;
  sliderContainer: HTMLElement | undefined;

  constructor(private elementRef: ElementRef){}

  ngOnInit() {
    this.doSlider();
  }

  doSlider() {
    this.sliderContainer = this.elementRef.nativeElement
  }
}
