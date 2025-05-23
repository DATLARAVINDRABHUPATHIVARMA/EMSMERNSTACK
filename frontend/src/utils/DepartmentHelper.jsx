export const columns = [
    {
        name: 'S.No',
        selector: (row) => row.sno
    },
    {
        name: 'Department Name',
        selector: (row) => row.departmentName
    },
    {
        name: 'Total Employees',
        selector: (row) => row.employeeCount
    },
    {
        name: 'Action',
        selector: (row) => row.action
    },
]

export const DepartmentButtons = () => {
    return (
        <div>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
