import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFiles: File[] = [];
  noFilesSelected: boolean = false;
  formData: FormData = new FormData(); 

  constructor(private fileUploadService: FileUploadService) {} 
  onFileSelected(event: any) {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 0) {
      this.noFilesSelected = false;
      this.formData = new FormData();
  
      for (let i = 0; i < selectedFiles.length; i++) {
        this.formData.append('files', selectedFiles[i]);
      }
    } else {
      this.noFilesSelected = true;
    }
  }
  

  uploadFiles(): void {
    if (this.formData.getAll('files').length === 0) {
      this.noFilesSelected = true;
      return;
    }
  
    this.fileUploadService.uploadFile(this.formData).subscribe(
      (response: any) => {
        console.log('Files uploaded successfully:', response);
        this.formData = new FormData();
      },
      (error: any) => {
        console.error('File upload failed:', error);
      }
    );
  }
}
