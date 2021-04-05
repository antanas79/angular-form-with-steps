(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-loan-form-reactive-loan-form-reactive-module"],{

/***/ "26uG":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/loan-form-reactive-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LoanFormReactiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormReactiveRoutingModule", function() { return LoanFormReactiveRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/loan-form-reactive/loan-form-reactive.component */ "UjCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: "",
        component: _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_1__["LoanFormReactiveComponent"]
    }
];
class LoanFormReactiveRoutingModule {
}
LoanFormReactiveRoutingModule.ɵfac = function LoanFormReactiveRoutingModule_Factory(t) { return new (t || LoanFormReactiveRoutingModule)(); };
LoanFormReactiveRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoanFormReactiveRoutingModule });
LoanFormReactiveRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoanFormReactiveRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "JlfH":
/*!************************************************!*\
  !*** ./src/app/modules/shared/classes/step.ts ***!
  \************************************************/
/*! exports provided: Step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
class Step {
    constructor(options = {}) {
        var _a;
        this.label = (_a = options.label) !== null && _a !== void 0 ? _a : "";
        this.key = options.key;
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.isEditable = options.isEditable;
        this.questions = options.questions;
        this.text = options.text;
    }
}


/***/ }),

/***/ "Oxbd":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/services/question.service.ts ***!
  \*************************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _classes_question_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/question-dropdown */ "tKVC");
/* harmony import */ var _classes_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/step */ "JlfH");
/* harmony import */ var _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/question-textbox */ "n562");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class QuestionService {
    getLoanStepsWithQuestions() {
        const steps = [
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 0,
                isEditable: true,
                label: "Income",
                questions: [
                    new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                        key: "income",
                        label: "Income",
                        placeholder: "Monthy Income After Taxes (EUR)",
                        required: true,
                        type: "number",
                        value: null
                    })
                ]
            }),
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 1,
                isEditable: true,
                label: "Contact Method",
                questions: [
                    new _classes_question_dropdown__WEBPACK_IMPORTED_MODULE_0__["DropdownQuestion"]({
                        key: "contactMethod",
                        label: "Contact method",
                        placeholder: "Contact method",
                        required: true,
                        options: [
                            { key: "none", value: 0, label: "Select one" },
                            { key: "phone", value: 1, label: "Phone call" },
                            { key: "email", value: 2, label: "Email" },
                            { key: "sms", value: 3, label: "SMS" }
                        ],
                        value: 0
                    })
                ]
            }),
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 2,
                isEditable: true,
                label: "Contact",
                questions: [
                    new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                        key: "contact",
                        label: "Phone number",
                        placeholder: "Enter phone (+370)",
                        required: true,
                        value: null,
                        type: "number"
                    })
                ]
            }),
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 3,
                isEditable: true,
                label: "Amount",
                questions: [
                    new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                        key: "amount",
                        label: "Loan amount",
                        placeholder: "Loan Amount (EUR)",
                        type: "number",
                        required: true,
                        value: null,
                        order: 3
                    })
                ]
            })
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(steps.sort((a, b) => a.order - b.order));
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac });


/***/ }),

/***/ "SJsF":
/*!*************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/loan-form-reactive.module.ts ***!
  \*************************************************************************/
/*! exports provided: LoanFormReactiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormReactiveModule", function() { return LoanFormReactiveModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loan_form_reactive_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-form-reactive-routing.module */ "26uG");
/* harmony import */ var _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/loan-form-reactive/loan-form-reactive.component */ "UjCR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/summary/summary.component */ "yKco");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intro/intro.component */ "jP/x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class LoanFormReactiveModule {
}
LoanFormReactiveModule.ɵfac = function LoanFormReactiveModule_Factory(t) { return new (t || LoanFormReactiveModule)(); };
LoanFormReactiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LoanFormReactiveModule });
LoanFormReactiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _loan_form_reactive_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoanFormReactiveRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LoanFormReactiveModule, { declarations: [_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_2__["LoanFormReactiveComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__["SummaryComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _loan_form_reactive_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoanFormReactiveRoutingModule"]] }); })();


/***/ }),

/***/ "UjCR":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LoanFormReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormReactiveComponent", function() { return LoanFormReactiveComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/question.service */ "Oxbd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/intro/intro.component */ "jP/x");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/summary/summary.component */ "yKco");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function LoanFormReactiveComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Intro");
} }
function LoanFormReactiveComponent_ng_container_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
} if (rf & 2) {
    const step_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](step_r3.label);
} }
function LoanFormReactiveComponent_ng_container_7_ng_container_3_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 16);
} if (rf & 2) {
    const question_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", question_r8.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", question_r8.key)("id", question_r8.key)("type", question_r8.type);
} }
function LoanFormReactiveComponent_ng_container_7_ng_container_3_mat_select_4_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r14.label);
} }
function LoanFormReactiveComponent_ng_container_7_ng_container_3_mat_select_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoanFormReactiveComponent_ng_container_7_ng_container_3_mat_select_4_mat_option_1_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", question_r8.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", question_r8.key)("formControlName", question_r8.key)("value", question_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", question_r8.options);
} }
function LoanFormReactiveComponent_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoanFormReactiveComponent_ng_container_7_ng_container_3_input_3_Template, 1, 4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoanFormReactiveComponent_ng_container_7_ng_container_3_mat_select_4_Template, 2, 5, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " is invalid!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const question_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", question_r8.controlType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "textbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](question_r8.label);
} }
const _c0 = function (a0) { return [a0]; };
function LoanFormReactiveComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-step", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoanFormReactiveComponent_ng_container_7_ng_template_2_Template, 1, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoanFormReactiveComponent_ng_container_7_ng_container_3_Template, 9, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("editable", step_r3.isEditable)("formGroupName", i_r4)("stepControl", (tmp_2_0 = ctx_r1.stepsForm.get("steps")) == null ? null : tmp_2_0.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, i_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", step_r3.questions);
} }
function LoanFormReactiveComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Summary");
} }
class LoanFormReactiveComponent {
    constructor(_formBuilder, questionService) {
        this._formBuilder = _formBuilder;
        this.questionService = questionService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showError = false;
        this.loaded = false;
        this.isLinear = true;
    }
    ngOnInit() {
        this.questionService
            .getLoanStepsWithQuestions()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((res) => {
            console.log(res);
            this.steps = res;
        }, 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => { });
        this.stepsForm = this._formBuilder.group({
            steps: this._formBuilder.array([
                this._formBuilder.group({
                    income: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]]
                }),
                this._formBuilder.group({
                    contactMethod: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]]
                }),
                this._formBuilder.group({
                    contact: [
                        null,
                        [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8)
                        ]
                    ]
                }),
                this._formBuilder.group({
                    amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]]
                })
            ])
        });
        console.log(this.stepsForm);
        this.loaded = true;
        this.onChanges();
    }
    onChanges() {
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
                this.steps[2].questions[0] = Object.assign(Object.assign({}, this.steps[2].questions[0]), emailQuestionKeys);
                this.stepsForm
                    .get("steps")
                    .get([2])
                    .get("contact")
                    .setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(320),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email
                ]);
            }
            else {
                const phoneQuestionKeys = {
                    label: "Phone number",
                    placeholder: "Enter phone (+370)",
                    type: "number"
                };
                this.steps[2].questions[0] = Object.assign(Object.assign({}, this.steps[2].questions[0]), phoneQuestionKeys);
                this.stepsForm
                    .get("steps")
                    .get([2])
                    .get("contact")
                    .setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8)
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
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
LoanFormReactiveComponent.ɵfac = function LoanFormReactiveComponent_Factory(t) { return new (t || LoanFormReactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"])); };
LoanFormReactiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoanFormReactiveComponent, selectors: [["app-loan-form-reactive"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            },
            _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]
        ])], decls: 15, vars: 9, consts: [[1, "mt-3", 3, "formGroup"], ["labelPosition", "bottom", "formArrayName", "steps", 3, "linear"], [3, "editable"], ["class", "mt-3", "matStepLabel", ""], [3, "text"], ["mat-button", "", "matStepperNext", "", "type", "button"], [4, "ngFor", "ngForOf"], [3, "isEmail", "text", "data"], ["mat-button", "", "matStepperPrevious", "", "type", "button"], ["mat-button", "", "type", "button"], [1, "mt-3", 3, "editable", "formGroupName", "stepControl"], [1, "mr-3", "mt-3"], [3, "ngSwitch"], ["matInput", "", 3, "placeholder", "formControlName", "id", "type", 4, "ngSwitchCase"], ["matInput", "", 3, "placeholder", "id", "formControlName", "value", 4, "ngSwitchCase"], [1, "text-capitalize"], ["matInput", "", 3, "placeholder", "formControlName", "id", "type"], ["matInput", "", 3, "placeholder", "id", "formControlName", "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LoanFormReactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-horizontal-stepper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoanFormReactiveComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-intro", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoanFormReactiveComponent_ng_container_7_Template, 10, 6, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoanFormReactiveComponent_ng_template_9_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-summary", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.stepsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("editable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "Press next to start applying for a loan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("editable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isEmail", ctx.stepsForm.get("steps").value[1].contactMethod == 2)("text", "Please review entered information below before submitting the form.")("data", ctx.stepsForm.get("steps").value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_10__["SummaryComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWZvcm0tcmVhY3RpdmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "dLIH":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/classes/question-base.ts ***!
  \*********************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
class QuestionBase {
    constructor(options = {}) {
        this.value = options.value;
        this.key = options.key || "";
        this.placeholder = options.placeholder || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        this.type = options.type || "";
        this.options = options.options || [];
    }
}


/***/ }),

/***/ "jP/x":
/*!********************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/components/intro/intro.component.ts ***!
  \********************************************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IntroComponent {
    constructor() {
        //do nothing
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], inputs: { text: "text" }, decls: 3, vars: 1, template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "n562":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/classes/question-textbox.ts ***!
  \************************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "dLIH");

class TextboxQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = "textbox";
    }
}


/***/ }),

/***/ "tKVC":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/classes/question-dropdown.ts ***!
  \*************************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "dLIH");

class DropdownQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = "dropdown";
    }
}


/***/ }),

/***/ "yKco":
/*!************************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/components/summary/summary.component.ts ***!
  \************************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SummaryComponent_div_3_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data[2].contact, " ");
} }
function SummaryComponent_div_3_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+370) ", ctx_r2.data[2].contact == null ? null : ctx_r2.data[2].contact.slice(0, 3), " ", ctx_r2.data[2].contact == null ? null : ctx_r2.data[2].contact.slice(3, 8), " ");
} }
function SummaryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Monthly Income:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loan Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SummaryComponent_div_3_span_16_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SummaryComponent_div_3_span_17_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.data[0].income, " (EUR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isEmail ? "Email" : "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.data[3].amount, " (EUR)");
} }
class SummaryComponent {
    constructor() {
        //do nothing
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], inputs: { text: "text", data: "data", isEmail: "isEmail" }, decls: 4, vars: 2, consts: [["class", "d-flex col-12 col-md-6 p-0", 4, "ngIf"], [1, "d-flex", "col-12", "col-md-6", "p-0"], [1, "d-flex", "flex-column", "first", "pl-0", "pr-3"], [1, "py-2"], [1, "d-flex", "flex-column", "second", "p-0"], [4, "ngIf"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryComponent_div_3_Template, 20, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".first[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.second[_ngcontent-%COMP%] {\n  width: calc(100% - 110px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qge1xuICB3aWR0aDogMTEwcHg7XG59XG4uc2Vjb25kIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMHB4KTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=modules-loan-form-reactive-loan-form-reactive-module-es2015.7ea842609e0175d84272.js.map