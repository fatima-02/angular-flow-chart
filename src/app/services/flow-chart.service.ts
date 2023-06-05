import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowChartService {
  public zoneDimensions$: BehaviorSubject<[number, number]> = new BehaviorSubject([0, 0])
  public data$: BehaviorSubject<any> = new BehaviorSubject(null)
  public dataChild$: BehaviorSubject<any> = new BehaviorSubject(null)
  public dataEnd$: BehaviorSubject<any> = new BehaviorSubject(null)
  constructor() { }

  calculateDimensions(el: HTMLElement): void {
    const { width, height } = el.getBoundingClientRect()
    this.zoneDimensions$.next([width - 5, height - 8])
  }

  setDataFrom(source: string): void {
    //TODO: Aqui podemos hacer un llamado a API HTTP!
    const httpMock: any = {
      angular: {
        id: 'first',
        label: 'A',
        data: {
          title: 'Angular 🎁',
          img: 'https://i.imgur.com/Rb27aIA.png',
          text: '<b>Validacion</b>'
        },
        action: {
          more: 'Continuar',
          src: 'angular',
          key: 'childs'
        }
      }
    }
    this.data$.next(httpMock[source])
  }

  setDataFromChild(source: string): void {
    //TODO: Aqui podemos hacer un llamado a API HTTP!
    const httpMock: any = {
      angular: {
        nodes: [

          {
            id: '1',
            label: '1',
            data: {
              title: 'Go ANGULAR!',
              img: 'https://i.imgur.com/Ajzts77.png',
              text: '<b>Angular</b> Validacion2.'
            },
            action: {
              more: 'Ver ruta',
              src: 'ts',
              key: 'Final'
            }
          }
        ],
        links: [
          {
            id: 'a',
            source: 'first',
            target: '1',
            label: 'is parent'
          }
        ]
      }
    }
    this.dataChild$.next(httpMock[source])
  }

  setDataEnd(source: string): void {
    //TODO: Aqui podemos hacer un llamado a API HTTP!
    const httpMock: any = {
      angular: {
        nodes: [
          {
            id: '2',
            label: '2',
            data: {
              title: 'Go ANGULAR!',
              img: 'https://i.imgur.com/Ajzts77.png',
              text: '<b>Angular</b> <b>Angular</b> Validacion5'
            },
            action: {
              more: 'Ver ruta',
              src: 'ts',
              key: 'Final2'
            }
          }
        ],
        links: [
          {
            id: 'a',
            source: 'first',
            target: '2',
            label: 'is parent of'
          }
        ]
      }
    }
    this.dataEnd$.next(httpMock[source])
  }

  setDataEnd3(source: string): void {
    //TODO: Aqui podemos hacer un llamado a API HTTP!
    const httpMock: any = {
      angular: {
        nodes: [
          {
            id: '3',
            label: '3',
            data: {
              title: 'Go ANGULAR!',
              img: 'https://i.imgur.com/Ajzts77.png',
              text: '<b>Angular</b> <b>Angular</b> Validacion5'
            },
            action: {
              more: 'Ver ruta',
              src: 'ts',
              key: 'Final3'
            }
          }
        ],
        links: [
          {
            id: 'a',
            source: 'first',
            target: '3',
            label: 'is parent of'
          }
        ]
      }
    }
    this.dataEnd$.next(httpMock[source])
  }

  setDataFinalize(source: string): void {
    //TODO: Aqui podemos hacer un llamado a API HTTP!
    const httpMock: any = {
      angular: {
        nodes: [
          {
            id: '3',
            label: '3',
            data: {
              title: 'Go ANGULAR!',
              img: 'https://i.imgur.com/Ajzts77.png',
              text: '<b>Angular</b> <b>Angular</b> Validacion FINAL'
            },
            action: {
              more: 'Ver ruta',
              src: 'ts',
              key: 'Final4'
            }
          },
        ],
        links: [
          {
            id: '3',
            source: 'first',
            target: '3',
            label: 'is parent of'
          }
        ]
      }
    }
    this.dataEnd$.next(httpMock[source])
  }
}
