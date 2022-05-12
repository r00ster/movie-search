import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output()
  readonly searchString = new EventEmitter<string>();

  searchForm = this.fb.group({
    search: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  listMovies(): void {
    this.searchString.emit(this.searchForm.value.search);
  }
}
