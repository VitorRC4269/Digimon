import { Component, OnInit } from '@angular/core';
import { Digimon } from 'src/app/models/digimon.model';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-search-digimon',
  templateUrl: './search-digimon.component.html',
  styleUrls: ['./search-digimon.component.css']
})
export class SearchDigimonComponent implements OnInit {
  
  
  digimons?: Digimon[];
  currentDigimon: Digimon = {};
  currentIndex = -1;
  name = '';
  level = '';

  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {
   
  }


  setActiveDigimon(digimon: Digimon, index: number): void {
    this.currentDigimon = digimon;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentDigimon = {};
    this.currentIndex = -1;

   this.digimonService.findByName(this.name).subscribe({
        next: (data) => {
          this.digimons = data;
    
        },
        error: (e) => console.error(e)
      });
  }



  searchLevel(): void {
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

