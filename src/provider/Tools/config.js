export const OptStatus = [
  { label: "Not Started", value: "Not Started" },
  { label: "In Progress", value: "In Progress" },
  { label: "Delayed", value: "Delayed" },
  { label: "Done", value: "Done" },
  { label: "Dropped", value: "Dropped" }
];
export const OptStatusClass = {
  "Not Started": "badge badge-info",
  "In Progress": "badge badge-primary",
  Delayed: "badge badge-warning",
  Done: "badge badge-success",
  Dropped: "badge badge-danger"
};

export const OptPriority = [
  { label: "Low Priority", value: "Low Priority" },
  { label: "Medium Priority", value: "Medium Priority" },
  { label: "High Priority", value: "High Priority" }
];
export const OptPriorityClass = {
  "Low Priority": "badge badge-success",
  "Medium Priority": "badge badge-warning",
  "High Priority": "badge badge-danger"
};

export const OptDeadlineClass = {
  unSoon: "badge badge-success",
  // "Soon": "badge badge-warning",
  Soon: "badge badge-danger"
};

export const OptActiveStatus = [
  { label: "Active", value: "Active" },
  { label: "InActive", value: "InActive" }
];
export const OptActiveStatusClass = {
  Active: "badge badge-success",
  InActive: "badge badge-danger"
};
