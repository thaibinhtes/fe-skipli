import { useEffect, useMemo, useState } from "react"
import BaseModal from "../../components/BaseModal"
import BaseTable, { type Column } from "../../components/BaseTable"
import BaseInput from "../../components/BaseInput"
import { type EmployeeType } from "../../types/employee"
import EmployeeService from "../../services/employeeService"
import useEmployeeStore from "../../store/employee"
import './styles/index.scss';
import BaseLoading from "../../components/BaseLoading"
import BaseIcon from "../../components/BaseIcon"

const TableEmployee = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [employee, setEmployee] = useState<EmployeeType>({
    name: '',
    phone: '',
    email: '',
    department: '',
    address: ''
  })
  const [employeeDelete, setEmployeeDelete] = useState<EmployeeType>()
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const { employees, getEmployee, deleteEmployee, fetchEmployees } = useEmployeeStore()
  const totalEmployee = useMemo(() => {
    return employees.length || 0
  }, [employees])


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


  const onEditEmployee = async (data: EmployeeType) => {
    if (data?.id) {
      const employee = await getEmployee(data.id)
      if (employee) {

        setEmployee({
          ...employee,
          id: data.id
        })
        setShowCreate(true)
      }
    }
  }

  const onCloseUpdate = () => {
    initEmployee()
    setShowCreate(false)
  }

  const onDeleteEmployee = (data: EmployeeType) => {
    if (data.id) {
      setShowDelete(true)
      setEmployeeDelete(data)
    }
  }

  const submitDeleteEmployee = async () => {
    if (employeeDelete?.id) {
      setLoading(true)
      const res = await deleteEmployee(employeeDelete.id)
      if (res?.success) {
        await fetchEmployees()
        setLoading(false)
        setShowDelete(false)
      }
      setLoading(false)
    }
  }

  const initEmployee = () => {
    setEmployee({
      name: '',
      phone: '',
      email: '',
      department: '',
      address: ''
    })
  }
  const onSubmitEmployee = async (data: EmployeeType) => {
    if (!data.id) {
      setLoading(true)
      const res = await EmployeeService.create(data)
      if (res.success) {
        fetchEmployees()
        setLoading(false)
        setShowCreate(false)
        initEmployee()
      }
    }
    else return
  }

  const onChangeFormCreateEmployee = (key: string, value: string | number) => {
    setEmployee({
      ...employee,
      [key]: value
    })
  }

  useEffect(() => {
    initEmployee()
  }, [])


  return <div className="table-employee">
    <BaseTable
      title={`${totalEmployee} Employee`}
      cols={cols}
      data={employees}
    >
      <div className="table-employee__filter flex justify-end gap-[12.45px]">
        <button type="button" onClick={() => setShowCreate(true)} className="button flex items-center gap-[5px] --out-primary border w-[170px]">
          <BaseIcon name="plus" /> Create Employee
        </button>

        <div className="table-employee__search w-[196px]">
          <BaseInput
            append={<BaseIcon name="search" />}
            type="text"
            placeholder="Filter"
            value={search}
            change={(value: string) => setSearch(value)}
          />
        </div>
      </div>
    </BaseTable>

    <BaseModal show={showCreate}
      title={employee?.id ? 'Update Employee' : 'Create Employee'}
      onClose={() => setShowCreate(false)}
    >
      {loading ? <BaseLoading /> : null}
      <div className="modal-employee grid grid-cols-12 gap-x-[57px] gap-y-[30px] pb-[98px]">
        <div className="col-span-6">
          <BaseInput
            label="Employee Name"
            type="text"
            name='name'
            value={employee.name}
            change={(value: string | number) => onChangeFormCreateEmployee('name', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput
            label="Phone Number"
            type="text"
            name='phone'
            value={employee.phone}
            change={(value: string | number) => onChangeFormCreateEmployee('phone', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Email Address"
            type="text"
            name='email'
            value={employee.email}
            change={(value: string | number) => onChangeFormCreateEmployee('email', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Department"
            type="text"
            name='Department'
            value={employee.department}
            change={(value: string | number) => onChangeFormCreateEmployee('department', value)}
          />
        </div>

        <div className="col-span-6">
          <BaseInput label="Address"
            type="text"
            name='Address'
            value={employee.address}
            change={(value: string | number) => onChangeFormCreateEmployee('address', value)}
          />
        </div>
      </div>

      <div className="base-modal__footer flex justify-end items-center gap-[5px]">
        {employee?.id ? <button onClick={() => onCloseUpdate()} className="button border">
          Cancel
        </button> : null}



        <button onClick={() => onSubmitEmployee(employee)} className="button --primary border">
          {employee?.id ? 'Update' : 'Create'}
        </button>
      </div>
    </BaseModal >

    <BaseModal show={showDelete}
      title={'Delete Employee'}
      onClose={() => setShowDelete(false)}
      size={500}
    >
      {loading ? <BaseLoading /> : null}
      <div className="modal-delete">
        <p className="modal-delete__desc mb-[20px]">
          {`Are you want employee ${employeeDelete?.name}?`}
        </p>

        <div className="modal-delete__footer flex justify-end items-center gap-[15px]">
          <button onClick={() => setShowDelete(false)} className="button border bg-white">
            Cancel
          </button>

          <button onClick={() => submitDeleteEmployee()} className="button --primary">
            Submit
          </button>
        </div>
      </div>
    </BaseModal>
  </div >
}

export default TableEmployee;