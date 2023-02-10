const announceTypes = [
  "All",
  "Campaign or Promotion in procress, Other Notices",
  "Notices of new ATM & Brand, or Gold Club Service, Foreign Desk",
  "SME Center and Socials Coffe",
  "new mobilePay location",
  "Merchant promotion (Discount or Event)",
  "New Function, Customer Survey / Feedback Collection",
  "Campaign or Promotion in progress",
];

const elTableColumns = [
  {
    prop: "no",
    label: "No",
    width: 50,
    align: "center",
  },
  {
    prop: "busCate",
    label: "Business Category",
    width: 140,
    align: "center",
  },
  {
    prop: "busSubCate",
    label: "Business Sub Category",
    width: 200,
    align: "center",
  },
  {
    prop: "authType",
    label: "Authority Type",
    // width: 280,
    align: "center",
  },
  {
    prop: "approvalSteps",
    label: "Approval Steps",
    width: 110,
    align: "center",
  },
  {
    prop: "approvalLine",
    label: "Approval Line",
    // width: 180,
    align: "center",
  },
];

export { announceTypes, elTableColumns };