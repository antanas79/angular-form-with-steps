import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoanFormReactiveComponent } from "./loan-form-reactive.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("LoanFormReactiveComponent", () => {
	let component: LoanFormReactiveComponent;
	let fixture: ComponentFixture<LoanFormReactiveComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				BrowserAnimationsModule,
				FormsModule,
				MatFormFieldModule,
				MatInputModule,
				MatSelectModule
			],
			declarations: [LoanFormReactiveComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoanFormReactiveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		void expect(component).toBeTruthy();
	});
});
