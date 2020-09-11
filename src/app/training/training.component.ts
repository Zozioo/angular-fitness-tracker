import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTraining from './training.reducer';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  // ongoingTraining = false;
  ongoingTraining$ : Observable<boolean>;
  // exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService, private store: Store<fromTraining.State>) {}

  ngOnInit(): void {
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
    // this.exerciseSubscription = this.trainingService.exerciseChange.subscribe(
    //   (newExercise) =>
    //     newExercise
    //       ? (this.ongoingTraining = true)
    //       : (this.ongoingTraining = false)
    // );
  }

  // ngOnDestroy(): void {
  //   this.exerciseSubscription.unsubscribe();
  // }
}
