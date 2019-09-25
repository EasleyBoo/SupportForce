import { TestBed } from '@angular/core/testing';

import { ForumserviceService } from './forumservice.service';

describe('ForumserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumserviceService = TestBed.get(ForumserviceService);
    expect(service).toBeTruthy();
  });
});
