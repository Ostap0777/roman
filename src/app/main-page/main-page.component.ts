import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private searchService: SearchService) {
    this.searchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: ['']
    });
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    const { from, to, departureDate, returnDate } = this.searchForm.value;

    this.searchService.search(from, to, departureDate, returnDate).subscribe(
      response => {
        console.log('Search results:', response); 
        alert('Search completed successfully!');
      },
      error => {
        console.error('Search failed', error); 
        alert('Search failed! Please try again.');
      }
    );
  }
}