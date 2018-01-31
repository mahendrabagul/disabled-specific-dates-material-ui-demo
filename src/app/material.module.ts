import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatCardModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [MatNativeDateModule, MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatDatepickerModule],
    exports: [MatNativeDateModule, MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDatepickerModule],
})
export class MaterialModule { }