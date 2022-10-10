import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NotaService} from "../../services/nota.service";
import {Nota} from "../../../model/nota";

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent implements AfterViewInit{

  @Input() id!: any;

  notas!: Nota[];

  constructor(private service: NotaService) {
  }

   ngAfterViewInit(): void {
    this.service.getNotas().subscribe(value => {
      this.notas = value;
    })
  }



}
