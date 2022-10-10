import {AfterViewInit, Component, Input} from '@angular/core';
import {NotaService} from "../../services/nota.service";
import {Nota} from "../../../model/nota";

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent implements AfterViewInit{

  @Input() id!: any;

  nota!: Nota;

  constructor(private service: NotaService) {
  }

   ngAfterViewInit() {

    this.service.getById(this.id).subscribe(value => {
      this.nota = value;
      console.log(this.nota);
    });


  }



}
