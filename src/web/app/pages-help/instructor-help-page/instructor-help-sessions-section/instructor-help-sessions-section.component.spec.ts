import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import {
    CommentBoxModule,
} from '../../../components/comment-box/comment-box.module';
import { SingleStatisticsModule,
} from '../../../components/question-responses/single-statistics/single-statistics.module';
import { StudentViewResponsesModule,
} from '../../../components/question-responses/student-view-responses/student-view-responses.module';
import { QuestionTextWithInfoModule } from '../../../components/question-text-with-info/question-text-with-info.module';
import { SessionEditFormModule } from '../../../components/session-edit-form/session-edit-form.module';
import {
  SessionsRecycleBinTableModule,
} from '../../../components/sessions-recycle-bin-table/sessions-recycle-bin-table.module';
import {
  InstructorSearchPageModule,
} from '../../../pages-instructor/instructor-search-page/instructor-search-page.module';
import { InstructorSessionResultPageModule,
} from '../../../pages-instructor/instructor-session-result-page/instructor-session-result-page.module';
import { ExampleBoxComponent } from '../example-box/example-box.component';
import { InstructorHelpSessionsSectionComponent } from './instructor-help-sessions-section.component';

describe('InstructorHelpSessionsSectionComponent', () => {
  let component: InstructorHelpSessionsSectionComponent;
  let fixture: ComponentFixture<InstructorHelpSessionsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorHelpSessionsSectionComponent, ExampleBoxComponent],
      imports: [
        CommentBoxModule, FormsModule, HttpClientTestingModule, NgbModule,
        RouterTestingModule, NgxPageScrollCoreModule,
        SessionEditFormModule, MatSnackBarModule, SessionsRecycleBinTableModule,
        InstructorSearchPageModule, InstructorSessionResultPageModule, QuestionTextWithInfoModule,
        SingleStatisticsModule, StudentViewResponsesModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorHelpSessionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
