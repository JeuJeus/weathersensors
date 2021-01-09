const moment = require('./moment/moment.min');
require('./daterangepicker/daterangepicker.min');

class AppDateTimePicker{
  picker;
  domElement;
  enabled;
  start;
  end;
  resetButton;
  ACTIVE_COLOR_CLASS = 'bg-pink';

  constructor(domElement, resetButton, callBackOnChange) {
    this.domElement = domElement;
    this.enabled = false;
    this.start = undefined;
    this.end = undefined;
    this.resetButton = resetButton;
    this.picker = this.createDateTimePicker(this.domElement, this.start, this.end, callBackOnChange);
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
    this.picker.data('daterangepicker').setStartDate(this.start);
    this.picker.data('daterangepicker').setEndDate(this.end);
  }

  reset() {
    this.start = undefined;
    this.end = undefined;
    this.enabled = false;
    this.toggleRangeSelectionActive();
  }

  createDateTimePicker(domElement, start, end, callBackOnChange) {
    const onChange = (start, end) => {
      this.enabled = true;
      this.toggleRangeSelectionActive();
      this.update();
      this.start = start;
      this.end = end;
      callBackOnChange();
    };
    return $(domElement).daterangepicker({
      opens: 'center',
      startDate: undefined,
      endDate: undefined,
      timePicker: true,
      timePicker24Hour: true,
      applyButtonClasses: 'btn-green',
      cancelButtonClasses: 'btn-pink',
      locale: {
        format: 'DD.MM.YYYY HH:mm',
      },
      ranges: {
        'Today': [moment().startOf('day'), moment().endOf('day')],
        'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
        'Last 7 Days': [moment().subtract(6, 'days').startOf('day'), moment().endOf('day')],
        'This Month': [moment().startOf('month').startOf('day'), moment().endOf('month').endOf('day')],
      },
    }, onChange);
  }
}

module.exports = {
  AppDateTimePicker,
};
