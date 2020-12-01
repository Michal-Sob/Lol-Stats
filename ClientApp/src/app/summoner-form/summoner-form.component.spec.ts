/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SummonerFormComponent } from './summoner-form.component';

let component: SummonerFormComponent;
let fixture: ComponentFixture<SummonerFormComponent>;

describe('summoner-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SummonerFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SummonerFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});