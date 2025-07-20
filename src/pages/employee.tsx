import TableEmployee from "../sections/employee/TableEmployee";

const Page = () => {
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