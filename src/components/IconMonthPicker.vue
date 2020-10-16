<template>
  <div
    v-click-outside="hide"
    class="month-picker-input-container"
  >
    <input
      v-model="selectedDate"
      class="icon-month-picker-input"
      type="text"
      readonly
      @click="showMonthPicker()"
    >
	<img src="../assets/calendar.svg" id="input_img">
    <month-picker
      v-show="monthPickerVisible"
      :default-year="defaultYear"
      :default-month="defaultMonth"
      :lang="lang"
      :months="months"
      :no-default="noDefault"
      :show-year="showYear"
      :clearable="clearable"
      :variant="variant"
      :editable-year="editableYear"
      :max-date="maxDate"
      :min-date="minDate"
      :year-only="yearOnly"
      :range="range"
      @input="populateInput"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
import { MonthPicker } from 'vue-month-picker'
var languages = {
	en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
export default {
	name: 'IconMonthPicker',
	directives: {
    clickOutside: {
      bind: function (el, binding, vnode) {
        el.event = function (event) {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.event)
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.event)
      }
    }
  },
  components: {
    MonthPicker
	},
	emits: [
    'change',
    'input'
  ],
	props: {
		image_path:{
			type:String
		},
		lang: {
			type: String,
			default: 'en',
			validator: function (value) {
				return Object.keys(languages).some(l => Object.is(l, value))
			},
			required: false
		},
		months: {
			type: Array,
			default: null,
			validator: function (value) {
				return value.length === 12
			},
			required: false
		},
		defaultMonth: {
			type: Number,
			default: null,
			required: false
		},
		defaultYear: {
			type: Number,
			default: null,
			required: false
		},
		showYear: {
			type: Boolean,
			default: true,
			required: false
		},
		editableYear: {
			type: Boolean,
			default: false,
			required: false
		},
		yearOnly: {
			type: Boolean,
			default: false,
			required: false
		},
		noDefault: {
			type: Boolean,
			default: false,
			required: false
		},
		clearable: {
			type: Boolean,
			default: false,
			required: false
		},
		minDate: {
			type: Date,
			default: null,
			required: false
		},
		maxDate: {
			type: Date,
			default: null
		},
		inputPreFilled: {
			type: Boolean,
			default: false,
			required: false
		},
		range: {
			type: Boolean,
			default: false,
			required: false
		},
		defaultMonthRange: {
			type: Array,
			default: null,
			required: false,
			validator: function (value) {
				if (value === null || value.length !== 2) {
					return false
				}

				const [firstRange, secondRange] = value
				if (secondRange <= firstRange) {
					return false
				}

				return true
			}
		},
		variant: {
			type: String,
			default: 'default',
			required: false,
			validator: function (value) {
				return ['default', 'dark'].includes(value)
			}
		}
	},
	computed: {
		monthsByLang: function() {
			if (this.months !== null &&
				this.months.length === 12) {
				return this.months
			}
			return languages[this.lang]
		}
	},
	data() {
    return {
      monthPickerVisible: false,
			selectedDate: null
    }
  },
  mounted() {
    if (this.inputPreFilled && this.defaultMonth !== null && this.defaultYear !== null && !this.range) {
      this.selectedDate = `${this.monthsByLang[this.defaultMonth - 1]}, ${this.defaultYear}`
    }
  },
  methods: {
    populateInput(date) {
      if (this.range) {
        this.selectedDate = `${date.rangeFromMonth} - ${date.rangeToMonth}, ${date.year}`
      } else {
        this.selectedDate = `${date.month}, ${date.year}`
      }

      this.monthPickerVisible = false
      this.$emit("input", date)
    },
    showMonthPicker() {
      this.monthPickerVisible = !this.monthPickerVisible
    },
    hide() {
      this.monthPickerVisible = false
    }
  }
}
</script>
<style scoped>
  .month-picker-input-container {
    position: relative;
    width: 180px;
		min-width: 140px;
		padding: 0;
		margin: 0;
  }

  .icon-month-picker-input {
		padding: 11px 26px 11px 16px;
    font-size: .85em;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgba(0,0,0,.15);
    transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .icon-month-picker-input:focus {
    border-color: rgba(0,0,0,.25);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
	#input_img{
		position: absolute;
		bottom: 11px;
		right: 11px;
		width: 18px;
		height: 18px;
	}
  .month-picker__container {
    position: absolute;
		top: 3.5em;
		z-index:10;
	}
</style>
