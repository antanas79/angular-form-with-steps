import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuestionService } from "../../../shared/services/question.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Step } from "../../../shared/classes/step";

@Component({
	selector: "app-loan-form-reactive",
	templateUrl: "./loan-form-reactive.component.html",
	styleUrls: ["./loan-form-reactive.component.scss"],
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: { showError: true }
		},
		QuestionService
	]
})
export class LoanFormReactiveComponent implements OnInit, OnDestroy {
	private ngUnsubscribe = new Subject();
	stepsForm: FormGroup;
	showError = false;
	steps: Step[];
	loaded = false;
	isLinear = true;

	constructor(
		public _formBuilder: FormBuilder,
		public questionService: QuestionService
	) {}

	ngOnInit(): void {
		this.questionService
			.getLoanStepsWithQuestions()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe(
				(res) => {
					this.steps = res;
					this.stepsForm = this._formBuilder.group({
						steps: this._formBuilder.array([
							this._formBuilder.group({
								income: [
									null,
									[Validators.required, Validators.min(0)]
								]
							}),
							this._formBuilder.group({
								contactMethod: [
									0,
									[Validators.required, Validators.min(1)]
								]
							}),
							this._formBuilder.group({
								contact: [
									null,
									[
										Validators.required,
										Validators.minLength(8),
										Validators.maxLength(8)
									]
								]
							}),
							this._formBuilder.group({
								amount: [
									null,
									[Validators.required, Validators.min(0)]
								]
							})
						])
					});

					this.loaded = true;
					this.onChanges();
				},
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				() => {}
			);
	}

	onChanges(): void {
		this.stepsForm
			.get("steps")
			.get([1])
			.get("contactMethod")
			.valueChanges.subscribe((val) => {
				this.stepsForm
					.get("steps")
					.get([2])
					.get("contact")
					.clearValidators();
				if (val === 2) {
					const emailQuestionKeys = {
						label: "Email",
						placeholder: "Enter email",
						type: "email"
					};
					this.steps[2].questions[0] = {
						...this.steps[2].questions[0],
						...emailQuestionKeys
					};
					this.stepsForm
						.get("steps")
						.get([2])
						.get("contact")
						.setValidators([
							Validators.required,
							Validators.maxLength(320),
							Validators.email
						]);
				} else {
					const phoneQuestionKeys = {
						label: "Phone number",
						placeholder: "Enter phone (+370)",
						type: "number"
					};
					this.steps[2].questions[0] = {
						...this.steps[2].questions[0],
						...phoneQuestionKeys
					};
					this.stepsForm
						.get("steps")
						.get([2])
						.get("contact")
						.setValidators([
							Validators.required,
							Validators.minLength(8),
							Validators.maxLength(8)
						]);
				}
				this.stepsForm
					.get("steps")
					.get([2])
					.get("contact")
					.updateValueAndValidity({ emitEvent: false });
				this.stepsForm.updateValueAndValidity({ emitEvent: false });
			});
	}

	ngOnDestroy(): void {
		// prevent memory leak when component destroyed
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
