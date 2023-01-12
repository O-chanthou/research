import { defineStore } from "pinia";
import type { announceData, formSearch } from "@/shared/utils/announce/announceType.interface";
import type { Approval, CreateApprovalData } from "@/shared/utils/approval/approval-interface";


export const usePushStore = defineStore("push", {
  state: () => ({
    announceData: [] as announceData[],
    dataTableApprovalLine: [] as Approval[],
    approvalList: [] as CreateApprovalData[],
    arrMandatory: [] as (string | number)[],
    isSelectesTr: false,
    isModified: false
  }),
  getters: {},
  actions: {
    async fetchAnnounceType() {
      const res = await fetch("http://localhost:3000/data");
      this.announceData = await res.json();
      return this.announceData;
    },

    async searchData(formSearch: formSearch) {
      let data: announceData[] = [];

      const res = await fetch("http://localhost:3000/data");
      data = await res.json();

      const search = data.filter((e) => {
        if (
          formSearch.title == e.title &&
          formSearch.announceType == e.announce
        ) {
          return e;
        } else if (
          formSearch.title == e.title &&
          formSearch.announceType == "All"
        ) {
          return e;
        }
      });
      console.log(search);
      this.announceData = search
      return this.announceData
    },

    /////////// fetch data Manage Approval ///////////////
    async fetchDataApproval() {
      const res = await fetch('http://localhost:3000/dataApprovalLine')
      const data = await res.json();
      this.dataTableApprovalLine = data
    },

    ////////// get a row data from table
    getTrData(data: CreateApprovalData[]) {
      this.isSelectesTr = true
      this.approvalList = data
    },
    getMandatory(data: string[]) {
      return this.arrMandatory = data
    },

    ///////// add new approver to approval line
    addNewApprover(data: CreateApprovalData) {
      this.arrMandatory.push(data.mandatory)
      this.approvalList.push(data)
    },
    removeApprovalLine(id: number) {
      this.approvalList = this.approvalList.filter(item => item.id !== id)
    }
  },
});
