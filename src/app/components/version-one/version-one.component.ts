import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MyErrorStateMatcher } from "../../classes/error-matcher.class";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-version-one',
  templateUrl: './version-one.component.html',
  styleUrls: ['./version-one.component.scss']
})
export class VersionOneComponent {

  slicePaymentV1: FormGroup;

  readonly models = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
  ]

  readonly currencies = [
    { label: 'Soles', value: 'PEN' },
    { label: 'Dólares', value: 'USD' },
  ]

  matcher = new MyErrorStateMatcher();

  showWebComponent = false;

  @ViewChild('webComponent') content!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.slicePaymentV1 = new FormGroup({
      subscriptionKey: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      logo: new FormControl('', []),
      model: new FormControl(this.models[0].value, [Validators.required]),
      currency: new FormControl(this.currencies[0].value, [Validators.required]),
      mediumEmphasis: new FormControl(false, [Validators.required]),
      minimalEmphasis: new FormControl(false, [Validators.required]),
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

    const webComponent = this.renderer.createElement('split-payment-cta');
    webComponent.setAttribute('subscription-key', this.slicePaymentV1.value['subscriptionKey']);
    webComponent.setAttribute('amount', this.slicePaymentV1.value['amount']);
    webComponent.setAttribute('logo-url', this.slicePaymentV1.value['logo']);
    webComponent.setAttribute('use-model', this.slicePaymentV1.value['model']);
    webComponent.setAttribute('currency', this.slicePaymentV1.value['currency']);
    webComponent.setAttribute('medium-brand', this.slicePaymentV1.value['mediumEmphasis']);
    webComponent.setAttribute('minimal-brand', this.slicePaymentV1.value['minimalEmphasis']);
    webComponent.setAttribute('interbank-black', this.slicePaymentV1.value['grayScale']);
    webComponent.setAttribute('primary', this.slicePaymentV1.value['primaryColor']);
    webComponent.setAttribute('secondary', this.slicePaymentV1.value['secondaryColor']);
    webComponent.setAttribute('accent', this.slicePaymentV1.value['accentColor']);
    webComponent.setAttribute('regular-typography', this.slicePaymentV1.value['regularTypography']);
    webComponent.setAttribute('medium-typography', this.slicePaymentV1.value['mediumTypography']);
    webComponent.setAttribute('bold-typography', this.slicePaymentV1.value['boldTypography']);
    webComponent.setAttribute('jwt', 'socio');

    this.renderer.appendChild(this.content.nativeElement, webComponent);
  }
}
