import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

const URL = '/test';
@Component({
  moduleId: module.id,
  selector: 'uploader',
  templateUrl: 'uploader.html',
  providers: [FileSelectDirective, FileDropDirective]
})
export class UploaderComponent implements OnInit {
  constructor() { }
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  ngOnInit() { }
}