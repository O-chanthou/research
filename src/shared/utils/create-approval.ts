import { ref } from "vue"

export const createApprovalData = ref({
    branchType: [
        {
            id: 1,
            type: '01:Branch'
        },
        {
            id: 2,
            type: '02:Branch'
        },
        {
            id: 3,
            type: '03:Branch'
        },
        {
            id: 4,
            type: '04:Branch'
        },
        {
            id: 5,
            type: '05:Branch'
        }
    ],
    role: [
        {
            id: 1,
            type: 'Teller'
        },
        {
            id: 2,
            type: 'Head Office'
        },
        {
            id: 3,
            type: 'Admin'
        },
        {
            id: 4,
            type: 'Director'
        },
        {
            id: 5,
            type: 'CEO'
        }
    ],
    mandatory: true
})
