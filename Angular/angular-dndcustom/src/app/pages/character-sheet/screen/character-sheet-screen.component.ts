import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterService } from 'src/app/services/character-services/character.service';
import { CharacterSheetSavingThrowsComponent } from '../components/character-sheet-saving-throws/character-sheet-saving-throws.component';

@Component({
  selector: 'app-character-sheet-screen',
  templateUrl: './character-sheet-screen.component.html',
  styleUrls: ['./character-sheet-screen.component.css']
})
export class CharacterSheetScreenComponent implements OnInit {

  constructor(readonly service : CharacterService) { }

  characters : Character[];
  character : Character;

  @ViewChild('characterSavingThrows') savingThrowComponent: CharacterSheetSavingThrowsComponent;

  async ngOnInit(): Promise<void> {
  this.characters = await this.service.getCharacters();
  this.character = this.characters.filter(i => i.ref == 4)[0];
  console.log(this.character);
  this.savingThrowComponent.characterProfiency = this.character.profiencyValues;
  }

}
