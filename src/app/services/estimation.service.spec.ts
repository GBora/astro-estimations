/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstimationService } from './estimation.service';

describe('EstimationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstimationService]
    });
  });

  it('should ...', inject([EstimationService], (service: EstimationService) => {
    expect(service).toBeTruthy();
  }));
});
