import { TestBed } from '@angular/core/testing';

import { InfoRetrievalService } from './info-retrieval.service';

describe('InfoRetrievalService', () => {
  let service: InfoRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
