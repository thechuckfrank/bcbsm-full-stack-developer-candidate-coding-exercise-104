
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private fileUploadEndpoint = 'http://localhost:8080/upload'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  uploadFile(file: FormData) {
    return this.http.post(this.fileUploadEndpoint, file);
  }
}
