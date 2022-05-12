import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm = this.fb.group({
    search: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title.next('Movie Search');
  }

  /**
   * @description Open movie list page
   * @returns {void}
   */
  openMovieList(): void {
    if (this.searchForm.valid) {
      this.router.navigate(['search/', this.searchForm.value.search]);
    }
  }

}
