import { useEffect } from "react";
import TableEmployee from "../sections/employee/TableEmployee";
import useEmployeeStore from '../store/employee'
const Page = () => {

  const { fetchEmployees } = useEmployeeStore()

  const onFetchEmployee = async () => {
    await fetchEmployees()
  }

  useEffect(() => {
    onFetchEmployee()
  }, [onFetchEmployee])

  return <>
    <title>Manage Employee</title>
    <div className="page-emloyee page">
      <div className="page-employee__container">
        <h3 className="page__title title-page">
          Manage Employye
        </h3>
      </div>

      <TableEmployee />
    </div>
  </>
}

export default Page;