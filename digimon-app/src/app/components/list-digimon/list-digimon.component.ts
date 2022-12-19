import { Component, OnInit } from '@angular/core';
import { Digimon } from 'src/app/models/digimon.model';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-list-digimon',
  templateUrl: './list-digimon.component.html',
  styleUrls: ['./list-digimon.component.css']
})
export class ListDigimonComponent implements OnInit {
  
  
  digimons?: Digimon[];
  currentDigimon: Digimon = {};
  currentIndex = -1;
  
  level = '';
  levels = ['Fresh','In training','Rookie','Champion','Ultimate','Mega'

  ]
  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {
   
  }


  setActiveDigimon(digimon: Digimon, index: number): void {
    this.currentDigimon = digimon;
    this.currentIndex = index;
  }



  listLevel(): void {
    
    this.currentDigimon = {};
    this.currentIndex = -1;

   this.digimonService.findByLevel(this.level).subscribe({
        next: (data) => {
          this.digimons = data;
      
        },
        error: (e) => console.error(e)
      });
  }

}

