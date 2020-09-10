import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpEventType, HttpEvent } from '@angular/common/http';


@Component({
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

    files: Set<File>;
    progress = 0;

    constructor() { }

    ngOnInit() { }

    onChange(event) {
        console.log(event);

        const selectedFiles = <FileList>event.srcElement.files;
        // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

        const fileNames = [];
        this.files = new Set();
        for (let i = 0; i < selectedFiles.length; i++) {
            fileNames.push(selectedFiles[i].name);
            this.files.add(selectedFiles[i]);
        }
        document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

        this.progress = 0;
    }


}
