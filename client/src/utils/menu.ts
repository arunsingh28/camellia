import { HomeIcon, LogOutIcon,User, GraduationCap,
    //  History, 
     MessageCircle,
    //  Workflow,
      Wallet2, LucideProps, Database } from "lucide-react";
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
    financing: [
        {
            name: "Billing & Usage",
            icon: Wallet2,
            path: paths.APP.BILLING_USAGE,
        },
    ],
    utils:[
        {
            name: "Master Records",
            icon: Database,
            path: paths.APP.MASTER_DATA.INDEX,
        },
        {
            name: "Messages",
            icon: MessageCircle,
            path: paths.APP.MESSAGES.INDEX,
        },
        // {
        //     name: "Workflow",
        //     icon: Workflow,
        //     path: "/dashboard",
        // },
        // {
        //     name: "History",
        //     icon: History,
        //     path: "/dashboard",
        // },
    ],
    general: [
        {
            name: "Logout",
            icon: LogOutIcon,
            path: paths.APP.DASHBOARD,
        },
    ],
};