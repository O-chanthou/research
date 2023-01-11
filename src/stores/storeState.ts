import { defineStore } from "pinia";
import type { announceData } from "@/shared/utils/announceType.interface";
import type { Approval } from "@/shared/utils/announce-type";

const announceDatas: announceData[] = [];
const dataApprovalLines: Approval[] = [];

interface formSearch {
  title: string;
  announceType: string;
}

export const usePushStore = defineStore("push", {
  state: () => ({
    announceData: announceDatas,
    dataApprovalLine: dataApprovalLines,
  }),
  getters: {

  },
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
      this.dataApprovalLine = data
      return this.dataApprovalLine
    }
  },
});
