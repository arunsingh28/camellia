import { Typography } from "antd"
import { User } from "lucide-react"
import TableComponent from "@/pages/students/components/Table"

const Teachers = () => {
  return (
    <div className="p-2">
        <div>
            <Typography.Title level={3} className="!text-gray-700 flex items-center gap-1">
                <User size={30} />
                Teachers List
            </Typography.Title>
        </div>
        <TableComponent />
    </div>
  )
}

export default Teachers