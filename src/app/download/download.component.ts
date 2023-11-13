// download.component.ts
import { Component } from '@angular/core';
import { FileDownloadService } from '../file-download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  filenameInput: string = ''; 
  downloadMessage: string = '';

  constructor(private fileDownloadService: FileDownloadService) {}

  downloadFiles(): void {
    if (!this.filenameInput) {
      this.downloadMessage = 'Please enter a filename.';
      return;
    }

    this.fileDownloadService.downloadFile(this.filenameInput).subscribe(
      (data: Blob) => {
       
        this.downloadMessage = 'Files downloaded successfully!';
       
      },
      (error: any) => {
  
        this.downloadMessage = 'File download failed.';
        console.error('File download error:', error);
      }
    );
  }
}
