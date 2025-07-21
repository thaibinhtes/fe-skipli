import '@/assets/scss/components/base-table.scss';

export type BaseTableType = React.ComponentProps<'table'> & {
  title: string;
  cols: Column[];
  data: Array<any>
}

export type Column = {
  title: string;
  key: string;
  render?: (item: any) => React.ReactNode
}


const BaseTable = ({ children, title, cols, data, ...other }: { children: React.ReactNode } & BaseTableType) => {
  return <div className="base-table w-full">
    <div className="base-table__header flex items-center justify-between">
      <h4 className="base-table__title title-table flex-1/2">
        {title}
      </h4>

      <div className="base-table__filter flex-1/2">
        {children}
      </div>
    </div>


    <div className="base-table__content w-full">
      <table className='w-full' {...other}>
        {cols?.length > 0 ?
          <thead className="base-table__head">
            <tr>
              {
                cols.map((col: Column) => {
                  return <th className="base-table__th" key={`th-${col.key}`}>
                    {col.title}
                  </th>
                })
              }
            </tr>
          </thead>
          : null}

        {data?.length > 0 ? <tbody>
          {
            data.map((item: any, index: number) => {
              return <tr className='base-table__tr' key={`row-${index}`}>
                {
                  cols.map((col: Column) => {
                    return <td key={col.key}>
                      {col.render ? col.render(item) : item[col.key]}
                    </td>
                  })
                }
              </tr>
            })
          }
        </tbody>
          : null}

      </table>
    </div>
  </div>
}

export default BaseTable;
