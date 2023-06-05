import { FlowChartService } from './../../services/flow-chart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-card-node',
  templateUrl: './flow-card-node.component.html',
  styleUrls: ['./flow-card-node.component.css']
})
export class FlowCardNodeComponent implements OnInit {

  @Input() dataIn: any;

  selectedOption: string = '';
  constructor(
    private flowChartService: FlowChartService
    ) { }


  ngOnInit(): void {
    this.selectedOption = 'opcion1';
  }

  callChilds(src: string, action: string): void {
    console.log(action);
    switch (action) {
      case 'childs':
        this.flowChartService.setDataEnd(src)
        break;
      default:
        this.flowChartService.setDataFromChild(src)
        break
    }

  }
  end(src: string, action: string){
    console.log(action);
    switch (action) {
      case 'Final':
        this.flowChartService.setDataEnd3(src)
        break;
      default:
        this.flowChartService.setDataEnd(src)
        break
    }


  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
    console.log(this.selectedOption);
  }

}
