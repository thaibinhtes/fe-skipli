import { useState } from "react"
import BaseModal from "../../components/BaseModal"
import BaseTable, { type Column } from "../../components/BaseTableFilter"
import BaseInput from "../../components/BaseInput"
import { type EmployeeType } from "../../types/employee"

const TableEmployee = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [employee, setEmployee] = useState<EmployeeType>({
    name: '',
    phone: '',
    email: '',
    role: '',
    address: ''
  })
  const cols: Column[] = [
    {
      title: 'Employee Name',
      key: 'name'
    },
    {
      title: 'Email',
      key: 'email'
    },
    {
      title: 'Status',
      key: 'status',
      render: (row) => {
        return <div className={`inline-block text-status ${row.status ? '--active' : ''}`}>
          {row.status ? 'Active' : 'Deactive'}
        </div>
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (row) => {
        return <div className="flex gap-[30px] items-center">
          <button onClick={() => onEditEmployee(row)} className="button --primary-action">
            Edit
          </button>

          <button onClick={() => onDeleteEmployee(row)} className="button --danger">
            Delete
          </button>
        </div>
      }
    }
  ]

  const dataEmployee = [
    {
      name: 'Employee 1',
      email: '123',
      status: true
    }
  ]

  const onEditEmployee = (data: any) => {

  }

  const onDeleteEmployee = (data: any) => {

  }

  const onChangeFormCreateEmployee = (key: string, value: string | number) => {
    setEmployee({
      ...employee,
      [key]: value
    })
  }
  return <>
    <BaseTable
      title="4 Employee"
      cols={cols}
      data={dataEmployee}
    >
      <div className="table-employee__filter">
        <button type="button" onClick={() => setShowCreate(true)} className="button --primary border">
          Create Employee
        </button>
      </div>
    </BaseTable>

    <BaseModal show={showCreate}
      title="Create Employee"
      onClose={() => setShowCreate(false)}
    >
      <form className="modal-employee grid grid-cols-12 gap-x-[57px] gap-y-[30px] pb-[98px]">
        <div className="col-span-6">
          <BaseInput label="Employee Name"
            name='name'
            value={employee.name}
            onChange={(value: string | number) => onChangeFormCreateEmployee('name', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Phone Number"
            name='phone'
            value={employee.phone}
            onChange={(value: string | number) => onChangeFormCreateEmployee('phone', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Email Address"
            name='email'
            value={employee.email}
            onChange={(value: string | number) => onChangeFormCreateEmployee('email', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Role"
            name='Role'
            value={employee.role}
            onChange={(value: string | number) => onChangeFormCreateEmployee('role', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Address"
            name='Address'
            value={employee.address}
            onChange={(value: string | number) => onChangeFormCreateEmployee('address', value)}
          />
        </div>
      </form>

      <div className="base-modal__footer flex justify-end items-center ">
        <button className="button --primary">
          Create
        </button>
      </div>
    </BaseModal>
  </>
}

export default TableEmployee;