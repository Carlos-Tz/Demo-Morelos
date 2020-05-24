import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import 'fecha';
import fechaObj from 'fecha';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  public canvasWidth = 180;
  public needleValue = 50;
  public centralLabel = '';
  public name = '';
  public bottomLabel = '';
  public options = {
    hasNeedle: true,
    needleColor: 'red',
    needleUpdateSpeed: 1000,
    /* arcColors: ['red', 'yellow', 'black'],
    arcDelimiters: [33, 67], */
    arcColors: ['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white', 'black', 'white', 'black', 'white', 'black'],
    arcDelimiters: [6, 17, 21, 32, 36, 47, 53, 64, 68, 79, 83, 94],
    rangeLabel: ['E', 'F'],
    needleStartValue: 50,
  };

  public air = false;
  public eng = false;
  public abs = false;
  public oil = false;
  public bat = false;
  public cin = false;
  public fre = false;
  public lig = false;
  public sta = false;
  public tem = false;
  public fecha = '';
  public nameC = '';
  public ordenC = '';

  @ViewChild('sig1', {static: false}) signaturePad: SignaturePad;
  @ViewChild('sig2', {static: false}) signaturePad2: SignaturePad;
  @ViewChild('sig3', {static: false}) signaturePad3: SignaturePad;
  @ViewChild('sig4', {static: false}) signaturePad4: SignaturePad;
  public signaturePadOptions: object = {
    minWidth: 0.7,
    maxWidth: 0.8,
    penColor: 'rgb(255,0,0)',
    canvasWidth: 180, // 189
    canvasHeight: 125 // 125
  };
  save = 0;
  orden = {
    tcar: 'sedan',
    gas: 50
  };

   @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
   // console.log('Processing beforeunload...');
    // Do more processing...
    event.returnValue = false;
  }
  constructor() { }

  ngOnInit() {
    this.fecha = fechaObj.format(new Date(), 'D [de] MMMM [de] YYYY');
  }

  combus(ev) {
    this.needleValue = ev.srcElement.value;
  }

  airbag() {
    this.air = !this.air;
  //  this.form_.airbag = !this.form_.airbag;
  }

  engine() {
    this.eng = !this.eng;
  //  this.form_.engine = !this.form_.engine;
  }

  abs_() {
    this.abs = !this.abs;
  //  this.form_.abs = !this.form_.abs;
  }

  oil_() {
    this.oil = !this.oil;
  //  this.form_.oil = !this.form_.oil;
  }
  battery_() {
    this.bat = !this.bat;
  //  this.form_.oil = !this.form_.oil;
  }
  cintu_() {
    this.cin = !this.cin;
  //  this.form_.oil = !this.form_.oil;
  }
  freno_() {
    this.fre = !this.fre;
  //  this.form_.oil = !this.form_.oil;
  }
  lights_() {
    this.lig = !this.lig;
  //  this.form_.oil = !this.form_.oil;
  }
  stabil_() {
    this.sta = !this.sta;
  //  this.form_.oil = !this.form_.oil;
  }
  temper_() {
    this.tem = !this.tem;
  //  this.form_.oil = !this.form_.oil;
  }

  drawComplete() {
    /* this.form_.dere = this.signaturePad.toDataURL(); */
  }
  drawComplete2() {
    /* this.form_.frente = this.signaturePad2.toDataURL(); */
  }
  drawComplete3() {
    /* this.form_.detras = this.signaturePad3.toDataURL(); */
  }
  drawComplete4() {
    /* this.form_.izq = this.signaturePad4.toDataURL(); */
  }
  clear1() {
    this.signaturePad.clear();
    /* this.form_.dere =  ''; */
  }

  clear2() {
    this.signaturePad2.clear();
    /* this.form_.frente =  ''; */
  }

  clear3() {
    this.signaturePad3.clear();
    /* this.form_.detras =  ''; */
  }

  clear4() {
    this.signaturePad4.clear();
    /* this.form_.izq =  ''; */
  }
}
