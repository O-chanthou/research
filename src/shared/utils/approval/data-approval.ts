import { ref } from "vue";

export const dataApproval = ref([
  {
    no: 1,
    busCate: "02:Loan",
    busSubCate: "0210:Loan Application",
    authType: "Loan Application - Branch Authorization",
    approvalSteps: 2,
    approvalLine: "RM-->BGM",
    approvalList: [
      {
        branchType: "01:Branch",
        role: "110200:RM",
        mandatory: true
      },
      {
        branchType: "01:Branch",
        role: "120200:BGM",
        mandatory: true
      }
    ]
  },
  {
    no: 2,
    busCate: "02:Loan",
    busSubCate: "0210:Loan Application",
    authType: "Loan Application - CM Authorization",
    approvalSteps: 3,
    approvalLine: "RM-->BGM-->CO",
    approvalList: [
      {
        branchType: "01:Branch",
        role: "110200:RM",
        mandatory: true
      },
      {
        branchType: "01:Branch",
        role: "120200:BGM",
        mandatory: true
      }
    ]
  },
  {
    no: 3,
    busCate: "02:Loan",
    busSubCate: "0210:Loan Application",
    authType: "Loan Application - Screen Dept Authorization",
    approvalSteps: 5,
    approvalLine: "RM-->BGM-->CO-->BCM-->DCM",
    approvalList: [
      {
        branchType: "01:Branch",
        role: "110200:RM",
        mandatory: true
      },
      {
        branchType: "01:Branch",
        role: "120200:BGM",
        mandatory: true
      }
    ]
  }
])


// "dataApprovalLine": [
//   {
//     "no": 1,
//     "busCate": "02:Loan",
//     "busSubCate": "0210:Loan Application",
//     "authType": "Loan Application - Branch Authorization",
//     "approvalSteps": 2,
//     "approvalLine": "RM-->BGM",
//     "approvalList": [
//       {
//         "branchType": "01:Branch",
//         "role": "110200:RM",
//         "mandatory": true
//       },
//       {
//         "branchType": "01:Branch",
//         "role": "120200:BGM",
//         "mandatory": true
//       }
//     ]
//   },
//   {
//     "no": 2,
//     "busCate": "02:Loan",
//     "busSubCate": "0210:Loan Application",
//     "authType": "Loan Application - CM Authorization",
//     "approvalSteps": 3,
//     "approvalLine": "RM-->BGM-->CO",
//     "approvalList": [
//       {
//         "branchType": "01:Branch",
//         "role": "110200:RM",
//         "mandatory": true
//       },
//       {
//         "branchType": "01:Branch",
//         "role": "120200:BGM",
//         "mandatory": true
//       },
//       {
//         "branchType": "02:Head Office",
//         "role": "200300:CO",
//         "mandatory": true
//       }
//     ]
//   },
//   {
//     "no": 3,
//     "busCate": "02:Loan",
//     "busSubCate": "0210:Loan Application",
//     "authType": "Loan Application - Screen Dept Authorization",
//     "approvalSteps": 5,
//     "approvalLine": "RM-->BGM-->CO-->BCM-->DCM",
//     "approvalList": [
//       {
//         "branchType": "01:Branch",
//         "role": "110200:RM",
//         "mandatory": true
//       },
//       {
//         "branchType": "01:Branch",
//         "role": "120200:BGM",
//         "mandatory": true
//       },
//       {
//         "branchType": "02:Head Office",
//         "role": "200300:CO",
//         "mandatory": true
//       },
//       {
//         "branchType": "02:Head Office",
//         "role": "110300:BCM",
//         "mandatory": true
//       },
//       {
//         "branchType": "02:Head Office",
//         "role": "200400:DCM",
//         "mandatory": true
//       }
//     ]
//   }
// ]

// const tableData = <Approval[]>([
//   {
//     no: 1,
//     busCate: "02:Loan",
//     busSubCate: "0210:Loan Application",
//     authType: "Loan Application - Branch Authorization",
//     approvalSteps: 2,
//     approvalLine: "RM-->BGM",
//     approvalList: [
//       {
//         branchType: '01:Branch',
//         role: '110200:RM',
//         mandatory: true
//       },
//       {
//         branchType: '01:Branch',
//         role: '120200:BGM',
//         mandatory: true
//       }
//     ]
//   },
//   {
//     no: 2,
//     busCate: "02:Loan",
//     busSubCate: "0210:Loan Application",
//     authType: "Loan Application - CM Authorization",
//     approvalSteps: 3,
//     approvalLine: "RM-->BGM-->CO",
//   },
//   {
//     no: 3,
//     busCate: "02:Loan",
//     busSubCate: "0210:Loan Application",
//     authType: "Loan Application - Screen Dept Authorization",
//     approvalSteps: 5,
//     approvalLine: "RM-->BGM-->CO-->BCM-->DCM",
//   },
// ]);