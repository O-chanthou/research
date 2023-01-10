export const announceTypes = [
    "All",
    "Campaign or Promotion in procress, Other Notices",
    "Notices of new ATM & Brand, or Gold Club Service, Foreign Desk",
    "SME Center and Socials Coffe",
    "new mobilePay location",
    "Merchant promotion (Discount or Event)",
    "New Function, Customer Survey / Feedback Collection",
    "Campaign or Promotion in progress"
  ]

export interface Approval {
  no: number;
  busCate: string;
  busSubCate: string;
  authType: string;
  approvalSteps: number;
  approvalLine: string;
  approvalList: [
    {
      branchType: string,
      role: string,
      mandatory: boolean
    },
  ]
}
