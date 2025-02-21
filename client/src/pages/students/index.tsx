import { Typography } from "antd"
import { GraduationCap } from "lucide-react"
import TableComponent from "./components/Table"
const Students = () => {
  return (
    <div className="p-2">
        <div>
            <Typography.Title level={3} className="!text-gray-700 flex items-center gap-1">
                <GraduationCap size={30} />
                Students List
            </Typography.Title>
        </div>
        <TableComponent />
    </div>
  )
}

export default Students