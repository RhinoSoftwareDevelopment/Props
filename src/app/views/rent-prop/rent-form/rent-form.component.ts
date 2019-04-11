import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from 'src/app/shared/article.model';
import { PropRequest } from 'src/app/shared/request.model';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { RequestService } from 'src/app/services/request/request.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})
export class RentFormComponent implements OnInit, OnDestroy {

  private articleToRentId: string;
  private ngUnsubscribe: Subject<void> = new Subject();

  articleToRent: Article;
  faculty_teachers: string[] = [];
  filteredOptions: Observable<string[]>;
  rentArticleForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private requestsService: RequestService,
    private teachersService: TeachersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildRentArticleForm();
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.articleToRentId = params['id'];
        this.articlesService.getArticleById(params.id)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(article => this.articleToRent = article);
      });
    this.teachersService.getTeachers().subscribe(teachers => {
      for (const teacher of teachers) {
        this.faculty_teachers.push(teacher.name);
      }
    });
    this.filteredOptions = this.rentArticleForm.controls['professor_incharge'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Sends the request to the backend.
   */
  sendRequest(): void {
    const request = { ...this.rentArticleForm.value as PropRequest };
    this.addTimeToDate(this.rentArticleForm.value['begin_time'], request.begin);
    this.addTimeToDate(this.rentArticleForm.value['end_time'], request.end);
    delete request['begin_time'];
    delete request['end_time'];
    request.uid = sessionStorage.getItem('uid');
    request.articleId = this.articleToRentId;
    this.requestsService.addRequest(request);
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
   * Adds to a date the hours in the string.
   * @param timeString String of hours to add
   * @param date Date to add time
   */
  private addTimeToDate(timeString: string, date: Date): void {
    const hours = +timeString.substr(0, 2);
    const minutes = +timeString.substr(3, 2);
    date.setHours(hours);
    date.setMinutes(minutes);
  }

  /**
   * Builds the FormGroup to rent an article.
   */
  private buildRentArticleForm(): void {
    this.rentArticleForm = this.formBuilder.group({
      professor_incharge: ['', Validators.required],
      proyect: ['', Validators.required],
      begin: ['', Validators.required],
      begin_time: ['', Validators.required],
      end_time: ['', Validators.required],
      end: ['', Validators.required]
    });
  }
}
