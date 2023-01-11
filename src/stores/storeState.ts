import { defineStore } from "pinia";
import type { announceData, formSearch } from "@/shared/utils/announce/announceType.interface";
import type { Approval, CreateApprovalData } from "@/shared/utils/approval/approval-interface";



export const usePushStore = defineStore("push", {
  state: () => ({
    announceData: [] as announceData[],
    dataApprovalLineOri: {} as Approval[],
    dataApprovalLine: [] as Approval[],
    dataTrApproval: {} as Approval,
    arrMandatory: [] as string[],
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
      this.dataApprovalLineOri = data
      this.dataApprovalLine = data
      return data
    },

    ////////// get a row data from table
    getTrData(data: Approval) {
      this.dataApprovalLineOri.forEach(item => {
        if (item.no === data.no) {
          console.log('item', item);
          
          this.dataTrApproval = item
          console.log(this.dataTrApproval);
       }
      })
    },
    getMandatory(data: string[]) {
      return this.arrMandatory = data
    },

    ///////// add new approver to approval line
    addNewApprover(data: CreateApprovalData) {
      this.arrMandatory.push(data.mandatory)
      this.dataTrApproval.approvalList.push(data)
    },
    removeApprovalLine(id: number) {
      this.dataTrApproval.approvalList = this.dataTrApproval.approvalList.filter(item => item.id !== id)
    }
  },
});
