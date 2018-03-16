import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {createRequestOption} from '../../shared';
import {Brewerysummary} from './brewerysummary.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BrewerysummaryService {

    private resourceUrl = SERVER_API_URL + 'api/brewery-summary';

    constructor(private http: HttpClient) {
    }

    query(req?: any): Observable<HttpResponse<Brewerysummary[]>> {
        const options = createRequestOption(req);
        return this.http.get<Brewerysummary[]>(this.resourceUrl, {params: options, observe: 'response'})
            .map((res: HttpResponse<Brewerysummary[]>) => this.convertArrayResponse(res));
    }

    private convertArrayResponse(res: HttpResponse<Brewerysummary[]>): HttpResponse<Brewerysummary[]> {
        const jsonResponse: Brewerysummary[] = res.body;
        const body: Brewerysummary[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Brewery.
     */
    private convertItemFromServer(brewerysummary: Brewerysummary): Brewerysummary {
        const copy: Brewerysummary = Object.assign({}, brewerysummary);
        return copy;
    }

}
