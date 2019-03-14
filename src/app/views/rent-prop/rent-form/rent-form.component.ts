import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})
export class RentFormComponent implements OnInit {

  articleToRent: Article;
  faculty_teachers: string[] = ['Anna', 'Bob', 'Carly', 'Dorian', 'Elena'];
  filteredOptions: Observable<string[]>;

  rentArticleForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildRentArticleForm();
    this.route.params.subscribe(params => {
      this.articlesService.getArticleById(params.id)
        .subscribe(article => this.articleToRent = article)
    });
    this.filteredOptions = this.rentArticleForm.controls['professor_incharge'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  /**
   * Sends the request to the backend.
   */
  sendRequest(): void {
    const request = this.rentArticleForm.value as Request;
    console.log(request);
    
  }

  /**
   * Filters the array of techers and leaves only the ones 
   * that contain the string passed as paramenter.
   * @param value substring to find in all teachers
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.faculty_teachers.filter(
      teacher => teacher.toLocaleLowerCase().includes(filterValue)
    );
  }

  /**
   * Builds the FormGroup to rent an article.
   */
  private buildRentArticleForm(): void {
    this.rentArticleForm = this.formBuilder.group({
      professor_incharge: ['', Validators.required],
      proyect: ['', Validators.required],
      begin: ['', Validators.required],
      end: ['', Validators.required]
    });
  }
}
