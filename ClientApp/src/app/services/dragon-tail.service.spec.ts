import { TestBed } from '@angular/core/testing';

import { DragonTailService } from './dragon-tail.service';

describe('DragonTailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonTailService = TestBed.get(DragonTailService);
    expect(service).toBeTruthy();
  });
});
