class AppDateTimePicker{
    picker;
    domElement;
    enabled;
    start;
    end;
    resetButton;
    ACTIVE_COLOR_CLASS;

    constructor(domElement, resetButton) {
        this.domElement = domElement;
        this.picker = createDateTimePicker(domElement, resetButton);
        this.enabled = false;
        this.start = undefined;
        this.end = undefined;
        this.resetButton = resetButton;
        this.ACTIVE_COLOR_CLASS = 'bg-pink';
    }

    toggleRangeSelectionActive() {
        if (this.enabled) {
            this.domElement.classList.add(this.ACTIVE_COLOR_CLASS);
            this.resetButton.disabled = false;
        } else {
            this.domElement.classList.remove(this.ACTIVE_COLOR_CLASS);
            this.resetButton.disabled = true;
        }
    }

    update() {
        this.picker.data('daterangepicker').setStartDate(this.pickerStart);
        this.picker.data('daterangepicker').setEndDate(this.pickerEnd);
    }

    reset() {
        this.pickerStart = undefined;
        this.pickerEnd = undefined;
        this.enabled = false;
        this.toggleRangeSelectionActive();
    }

}

function createDateTimePicker(domElement) {
    //TODO check whether Max and Min Values are possible (doable but dynamic setting may be to difficult for the purpose)
    return $(domElement).daterangepicker({
        opens: 'center',
        startDate: undefined,
        endDate: undefined,
        timePicker: true,
        timePicker24Hour: true,
        applyButtonClasses: 'btn-green',
        cancelButtonClasses: 'btn-pink',
        locale: {
            format: 'DD.MM.YY HH:mm',
        },
    });
}


module.exports = {
    AppDateTimePicker: AppDateTimePicker,
    createDateTimePicker: createDateTimePicker,
};