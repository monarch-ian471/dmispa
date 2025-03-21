import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App',
    data() {
        return {
            form: {
                name: '',
                email: '',
                age: null,
                gender: '',
                occupation: '',
                interests: [],
                bio: '',
                subscribe: false,
            },
            jsonOutput: '',
        };
    },
    methods: {
        convertToJson() {
            const data = {
                name: this.form.name,
                email: this.form.email,
                age: this.form.age,
                gender: this.form.gender,
                occupation: this.form.occupation || 'Not specified',
                interests: this.form.interests.length ? this.form.interests : ['None selected'],
                bio: this.form.bio || 'Not provided',
                subscribe: this.form.subscribe,
            };
            this.jsonOutput = JSON.stringify(data, null, 2);
            console.log('Form Data:', this.jsonOutput); // Log to console
            this.downloadJson(); // Automatically trigger download
            this.resetForm(); // Optional: Reset form after submission
        },
        downloadJson() {
            const blob = new Blob([this.jsonOutput], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'student-questionnaire.json';
            link.click();
            URL.revokeObjectURL(url);
        },
        resetForm() {
            this.form = {
                name: '',
                email: '',
                age: null,
                gender: '',
                occupation: '',
                interests: [],
                bio: '',
                subscribe: false,
            };
            this.jsonOutput = ''; // Clear jsonOutput
        },
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-box" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/dmi_logo.png",
    alt: "Logo",
    ...{ class: "logo" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.convertToJson) },
    ...{ class: "form" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "name",
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    value: (__VLS_ctx.form.name),
    type: "text",
    id: "name",
    ...{ class: "input" },
    placeholder: "Enter your full name",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "email",
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "email",
    id: "email",
    ...{ class: "input" },
    placeholder: "Enter your email",
    required: true,
});
(__VLS_ctx.form.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "age",
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    id: "age",
    min: "1",
    max: "150",
    ...{ class: "input" },
    placeholder: "Enter your age",
    required: true,
});
(__VLS_ctx.form.age);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.form.gender),
    ...{ class: "select" },
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
    disabled: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "male",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "female",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "prefer-not-to-say",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "occupation",
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    value: (__VLS_ctx.form.occupation),
    type: "text",
    id: "occupation",
    ...{ class: "input" },
    placeholder: "Enter your current year",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "checkbox-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "checkbox-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
    value: "Sciences",
    ...{ class: "checkbox" },
});
(__VLS_ctx.form.interests);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "checkbox-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "checkbox-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
    value: "education",
    ...{ class: "checkbox" },
});
(__VLS_ctx.form.interests);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "checkbox-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "checkbox-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
    value: "arts",
    ...{ class: "checkbox" },
});
(__VLS_ctx.form.interests);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "checkbox-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "checkbox-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
    value: "business",
    ...{ class: "checkbox" },
});
(__VLS_ctx.form.interests);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "checkbox-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "bio",
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    value: (__VLS_ctx.form.bio),
    id: "bio",
    ...{ class: "textarea" },
    placeholder: "Tell us about yourself",
    rows: "4",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "checkbox-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
    ...{ class: "checkbox" },
});
(__VLS_ctx.form.subscribe);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "checkbox-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
    ...{ class: "button" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['form-box']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['select']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-group']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-label']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-text']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-label']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-text']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-label']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-text']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-label']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-text']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['textarea']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-label']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-text']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
var __VLS_dollars;
let __VLS_self;
