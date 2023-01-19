import ApplicationTable from "./table/ApplicationsTable";
import Map from "./map/Map";
import { Content } from "antd/es/layout/layout";

export default function Layout() {
    return (
        <Content className='content__container'>
          <ApplicationTable />
          <Map />
        </Content>
    )
}

