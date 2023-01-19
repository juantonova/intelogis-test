// import TableRow from "./TableRow.jsx";
import { Col, Table } from 'antd'
import { tableColumns } from "./lang/tableColumns"
import { applicationsData } from './lang/applications'
import { useDispatch, useSelector } from 'react-redux';
import { getApplications, setCurrentApplication } from '../../store/slices/applicationSlice';
import { applicationSelector } from '../../selectors/applicationSelector ';
import { useEffect } from 'react';

export default function ApplicationTable() {
    const applications = useSelector(applicationSelector)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getApplications(applicationsData))
    }, [])

    const rowSelection = {
      onChange: (_, selectedRows) => {
        dispatch(setCurrentApplication(selectedRows[0]))
      },
    }

    return (
      <Col flex={1} className="table__container">
        <Table
          columns={tableColumns}
          dataSource={applications}
          rowSelection={{ type: 'radio', ...rowSelection }}
          pagination={{ position: ['none', 'none'] }}
        />
      </Col>
    )
}