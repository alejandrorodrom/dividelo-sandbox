import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MyErrorStateMatcher } from "../../classes/error-matcher.class";

@Component({
  selector: 'app-pay-in-three',
  templateUrl: './pay-in-three.component.html',
  styleUrls: ['./pay-in-three.component.scss']
})
export class PayInThreeComponent {

  payInThree: FormGroup;

  readonly currencies = [
    { label: 'Soles', value: 'PEN' },
    { label: 'Dólares', value: 'USD' },
  ]

  matcher = new MyErrorStateMatcher();

  @ViewChild('webComponent') content!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.payInThree = new FormGroup({
      subscriptionKey: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      currency: new FormControl(this.currencies[0].value, [Validators.required]),
      grayScale: new FormControl(false, [Validators.required]),
      primaryColor: new FormControl('#05BE50', [Validators.required]),
      secondaryColor: new FormControl('#0039A6', [Validators.required]),
      accentColor: new FormControl('#F44336', [Validators.required]),
      regularTypography: new FormControl('', []),
      mediumTypography: new FormControl('', []),
      boldTypography: new FormControl('', [])
    });
  }

  generateWebComponent(): void {
    const slicePaymentChild = this.content.nativeElement.children[0];
    if (slicePaymentChild) {
      this.renderer.removeChild(this.content.nativeElement, slicePaymentChild);
    }

    const webComponent = this.renderer.createElement('split-payment-four');
    webComponent.setAttribute('subscription-key', this.payInThree.value['subscriptionKey']);
    webComponent.setAttribute('amount', this.payInThree.value['amount']);
    webComponent.setAttribute('currency', this.payInThree.value['currency']);

    webComponent.setAttribute('primary', this.payInThree.value['primaryColor']);
    webComponent.setAttribute('secondary', this.payInThree.value['secondaryColor']);
    webComponent.setAttribute('accent', this.payInThree.value['accentColor']);
    webComponent.setAttribute('regular-typography', this.payInThree.value['regularTypography']);
    webComponent.setAttribute('medium-typography', this.payInThree.value['mediumTypography']);
    webComponent.setAttribute('bold-typography', this.payInThree.value['boldTypography']);

    this.renderer.appendChild(this.content.nativeElement, webComponent);
  }

}
