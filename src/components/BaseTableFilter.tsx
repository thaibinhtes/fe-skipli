import '@/assets/scss/components/base-table.scss';
import { data } from 'react-router-dom';

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
      <h4 className="base-table__title title-table">
        {title}
      </h4>

      <div className="base-table__filter">
        {children}
      </div>
    </div>


    <div className="base-table__content w-full">
      <table className='w-full' {...other}>
        <thead className="base-table__head">
          {
            cols.map((col: Column) => {
              return <th className="base-table__th" key={`th-${col.key}`}>
                {col.title}
              </th>
            })
          }
        </thead>

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
      </table>
    </div>
  </div>
}

export default BaseTable;
