import { Component, OnInit , ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  elements: Node[] = [];
  positionCounter: number = 0;
  elementsLength: number = 0;
  sliderContainer: HTMLElement | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.doSlider();
  }

  doSlider() {
    this.sliderContainer = this.elementRef.nativeElement.querySelector('.cool-slider-container');
    this.elements = this.elementRef.nativeElement.querySelectorAll('.cool-slider-element');
    this.elementsLength = this.elements.length;
  }

  backSlide() {
    if(this.positionCounter > 0){
      --this.positionCounter;
      if (this.sliderContainer) {
        this.sliderContainer.style.left = (-(100*this.positionCounter))+"%";
      }
    }
  }

  forwardSlide() {
    if (this.positionCounter < this.elementsLength - 1) {
      ++this.positionCounter;
      if (this.sliderContainer) {
        this.sliderContainer.style.left = -(100 * this.positionCounter) + '%';
      }
    }
  }

  goToSlide(i: number) {
    this.positionCounter = i;
    if(this.sliderContainer){
      this.sliderContainer.style.left = (-(100*i))+"%";
    }
  }
}
