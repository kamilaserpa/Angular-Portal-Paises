import { PaisModule } from './pais.module';
import { MatTableModule } from '@angular/material';

describe('PaisModule', () => {
    let paisModule: PaisModule;

    beforeEach(() => {
        paisModule = new PaisModule();
    });

    it('should create an instance', () => {
        expect(paisModule).toBeTruthy();
    });
});
