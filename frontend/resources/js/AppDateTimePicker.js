class AppDateTimePicker{
    picker;
    enabled;
    start;
    end;
}

function createDateTimePicker(pickerStart, pickerEnd, dateTimeRangePickerElement) {
    //TODO check whether Max and Min Values are possible (doable but dynamic setting may be to difficult for the purpose)
    return $(dateTimeRangePickerElement).daterangepicker({
        opens: 'center',
        startDate: pickerStart,
        endDate: pickerEnd,
        timePicker: true,
        timePicker24Hour: true,
        applyButtonClasses: 'btn-green',
        cancelButtonClasses: 'btn-pink',
        locale: {
            format: 'DD.MM.YY HH:mm',
        },
    });
}

function toggleRangeSelectionActive(dateTimeRangePickerElement, resetRangeButton) {
    dateTimeRangePickerElement.classList.toggle('bg-pink');
    resetRangeButton.classList.toggle('disabled');
}

function updateRangePicker(rangepicker) {
    rangepicker.data('daterangepicker').setStartDate(this.pickerStart);
    rangepicker.data('daterangepicker').setEndDate(this.pickerEnd);
}

function resetRangePicker() {
    this.pickerStart = undefined;
    this.pickerEnd = undefined;
    this.rangeEnabled = false;
    this.updateDataOnPage();
    toggleRangeSelectionActive(this.dateTimeRangePickerElement, this.resetRangeButton);
}

module.exports = {
    AppDateTimePicker: AppDateTimePicker,
    createDateTimePicker: createDateTimePicker,
    toggleRangeSelectionActive: toggleRangeSelectionActive,
    updateRangePicker: updateRangePicker,
    resetRangePicker: resetRangePicker
};