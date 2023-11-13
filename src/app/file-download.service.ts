// file-download.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  private fileDownloadEndpoint = 'http://localhost:8080/download'; 
  private downloadFileEndpoint = `${this.fileDownloadEndpoint}/download`;

  constructor(private http: HttpClient) { }

  downloadFile(filename: string): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' }; 
    return this.http.get(`${this.downloadFileEndpoint}/${filename}`, options)
      .pipe(
        catchError((error: any): Observable<Blob> => {
          console.error('File download failed:', error);
          return throwError('File download failed');
        })
      ) as any; 
  }
}
