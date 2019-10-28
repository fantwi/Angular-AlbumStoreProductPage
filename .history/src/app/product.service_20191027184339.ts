import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl = '../'

  constructor(private _http: Http) { }

}
