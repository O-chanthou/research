
interface CreateApprovalData {
    id: number
    branchType: string,
    role: string,
    mandatory: string
}

interface Approval {
    no: number;
    busCate: string;
    busSubCate: string;
    authType: string;
    approvalSteps: number;
    approvalLine: string;
    approvalList: {
      id: number;
      branchType: string;
      role: string;
      mandatory: number | string;
    }[];
  }

export type { CreateApprovalData, Approval };