import { TestBed } from '@angular/core/testing';

import { MangaConversionService } from './manga-conversion.service';

describe('MangaConversionService', () => {
  let service: MangaConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
