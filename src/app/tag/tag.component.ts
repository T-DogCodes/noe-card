import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ImageService} from "../../service/image.service";
import {State} from "../declarations";

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

    @Input() tag!: string;
    @Input() state: State = State.ACTIVE

    @HostListener("click") onClick(){
    }

    constructor(private imageService: ImageService) {
    }

    ngOnInit(): void {
    }

    getImage(tag: string) {
        return this.imageService.getImageForTag(tag)
    }
}
