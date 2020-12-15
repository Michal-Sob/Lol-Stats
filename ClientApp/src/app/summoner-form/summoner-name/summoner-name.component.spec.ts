/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SummonerNameComponent } from './summoner-name.component';

let component: SummonerNameComponent;
let fixture: ComponentFixture<SummonerNameComponent>;

describe('summonerName component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SummonerNameComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SummonerNameComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});