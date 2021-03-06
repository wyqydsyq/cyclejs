import {ResponseStream, Response, RequestOptions, RequestInput} from './lib/interfaces';
import {Observable} from 'rxjs';
export interface HTTPSource {
  filter(predicate: (request: RequestOptions) => boolean): HTTPSource;
  select(category?: string): Observable<Observable<Response> & ResponseStream>;
  isolateSource: (source: HTTPSource, scope: string) => HTTPSource;
  isolateSink: (sink: Observable<RequestInput>, scope: string) => Observable<RequestInput>;
}