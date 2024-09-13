import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule , FormGroup } from '@angular/forms'; 


@NgModule({
  declarations: [
    SellerAuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class AuthModule { }
