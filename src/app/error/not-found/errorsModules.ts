import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NotFoundComponent } from "./not-found.component";

@NgModule({
    imports:[CommonModule],
    declarations: [NotFoundComponent],
    exports: [NotFoundComponent]
})
export class ErrorsModules{

}