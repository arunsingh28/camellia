import { HomeIcon, LogOutIcon,User, GraduationCap,
       LucideProps, Database, 
      Workflow,
      MessageSquare,
      MessagesSquare,IndianRupee,UserPen,
      History} from "lucide-react";
import { paths } from "@/router/path";


export interface IMenuOptions{
    [key: string]: {
        name: string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    path: string
    }[]
}


export const menuOptions: IMenuOptions = {
    main:[
        {
            name: "Message",
            icon: MessageSquare,
            path: paths.APP.MESSAGE.INDEX
        },
        {
            name: "Dashboard",
            icon: HomeIcon,
            path: paths.APP.DASHBOARD,
        },
        {
            name: "Students",
            icon: GraduationCap,
            path: paths.APP.STUDENTS.INDEX,
        },
        {
            name: "Teachers",
            icon: User,
            path: paths.APP.TEACHERS.INDEX,
        },
    ],
    utils:[
        {
            name: "Master Records",
            icon: Database,
            path: paths.APP.MASTER_DATA.INDEX,
        },
        {
            name: "Templates",
            icon: MessagesSquare,
            path: paths.APP.TEMPLATES.INDEX,
        },
        {
            name: "Workflow",
            icon: Workflow,
            path: "/dashboard",
        },
        {
            name: "History",
            icon: History,
            path: "/dashboard",
        },
    ],
};

export const ProfileMenu = [
    {
        title: 'Billing and Payments',
        icon: IndianRupee,
        path: ''
    },
    {
        title: 'Profile',
        icon: UserPen,
        path: ''
    },
    {
        title: "Logout",
        icon: LogOutIcon,
        path: paths.APP.DASHBOARD,
    },
]