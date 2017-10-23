import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatsService {

    Key = '6mJrvJnL9FH6ZvB6s82GH2JN8Udz3KAs';
    Question = 'angry cats';
    Limit = 50;

    constructor(private http: HttpClient) {
    }

    getNextCat(callback): any {
        this.http.get(`http://api.giphy.com/v1/gifs/search?q=${this.Question}&api_key=${this.Key}&limit=${this.Limit}`)
            .subscribe(data => {
                const parsed = <Array<any>>(data['data']);
                for (const img of parsed) {
                    callback(img);
                }
            });
    }
}
