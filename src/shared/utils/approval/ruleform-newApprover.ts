import type { FormRules } from "element-plus";
import { reactive } from "vue";

const rules = reactive<FormRules>({
    branchType: [
      {
        required: true,
        message: "Please select Activity zone",
        trigger: "change",
      },
    ],
    role: [
      {
        required: true,
        message: "Please select Activity role",
        trigger: "change",
      },
    ],
    mandatory: [
      {
        required: true,
        message: "Please select activity resource",
        trigger: "change",
      },
    ],
  });

  export { rules }