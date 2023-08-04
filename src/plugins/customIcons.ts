import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import RoundedAddIcon from "@/assets/icons/RoundedAddIcon.vue"
import RoundedCheckbox from "@/assets/icons/RoundedCheckbox.vue"
import RoundedUncheckbox from "@/assets/icons/RoundedUncheckbox.vue"

const customSvgNameToComponent: any = {
  "rounded-add-icon": RoundedAddIcon,
  "rounded-checkbox": RoundedCheckbox,
  "rounded-uncheckbox": RoundedUncheckbox,
};

const customIcons: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
};

export { customIcons };