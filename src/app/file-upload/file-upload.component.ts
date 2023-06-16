import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
    providers: [MessageService]
})
export class FileUploadComponent implements OnInit {

    constructor(private messageService: MessageService) {}

    onUpload(event: Event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    ngOnInit(): void {
    }

}
