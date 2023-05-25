import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImgurService } from '../services/ImgurService.service';
import { ImgModel } from '../models/Img.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
 
}